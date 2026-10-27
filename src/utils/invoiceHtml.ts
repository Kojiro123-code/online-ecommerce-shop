import { Order } from '../types';

export function generateInvoiceHtml(order: Order): string {
  const formattedDate = new Date(order.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const paymentLabels: Record<string, string> = {
    credit_card: 'Credit / Debit Card',
    bank_transfer: 'Direct Bank Wire',
    cod: 'Cash on Delivery (COD)',
  };

  const rows = order.items
    .map(
      (item, idx) => `
      <tr>
        <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">
          <strong>${idx + 1}. ${item.product.name}</strong><br>
          <span style="font-size: 11px; color: #64748b; font-family: monospace;">REF. ${item.product.id.toUpperCase()}</span>
        </td>
        <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; font-size: 13px; text-align: center; color: #334155;">
          ${item.quantity}
        </td>
        <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; font-size: 13px; text-align: right; color: #334155; font-family: monospace;">
          $${item.product.price.toFixed(2)}
        </td>
        <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; font-size: 13px; text-align: right; font-weight: 700; color: #0f172a; font-family: monospace;">
          $${(item.product.price * item.quantity).toFixed(2)}
        </td>
      </tr>
    `
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Receipt #${order.id} - Online Atelier</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #f8fafc;
      color: #0f172a;
      padding: 30px 16px;
      line-height: 1.4;
      font-size: 13px;
    }
    .receipt-container {
      max-width: 720px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      padding: 28px 32px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 16px;
      margin-bottom: 18px;
    }
    .brand h1 {
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 0.5px;
      color: #0f172a;
    }
    .brand span {
      background: #fef3c7;
      color: #b45309;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.5px;
      padding: 2px 6px;
      border-radius: 4px;
      border: 1px solid #fcd34d;
      margin-left: 4px;
    }
    .brand p { font-size: 11px; color: #64748b; margin-top: 3px; }
    .receipt-title {
      text-align: right;
    }
    .receipt-title h2 {
      font-size: 16px;
      font-weight: 900;
      color: #0f172a;
      letter-spacing: 1px;
    }
    .receipt-title .order-id {
      font-size: 12px;
      font-family: monospace;
      color: #334155;
      margin-top: 2px;
    }
    .receipt-title .status-pill {
      display: inline-block;
      margin-top: 4px;
      padding: 2px 8px;
      background: #ecfdf5;
      color: #047857;
      font-size: 10px;
      font-weight: 700;
      border-radius: 9999px;
      border: 1px solid #a7f3d0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .meta-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 14px 16px;
      margin-bottom: 18px;
      font-size: 12px;
    }
    .meta-card h3 {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #64748b;
      margin-bottom: 4px;
      font-weight: 700;
    }
    .meta-card p {
      color: #1e293b;
      line-height: 1.4;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 18px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      overflow: hidden;
    }
    th {
      background-color: #f1f5f9;
      color: #475569;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 8px 12px;
      text-align: left;
    }
    th.text-center { text-align: center; }
    th.text-right { text-align: right; }
    .totals-area {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 18px;
    }
    .totals-table {
      width: 260px;
      border-collapse: collapse;
    }
    .totals-table td {
      padding: 4px 8px;
      font-size: 12px;
      color: #475569;
    }
    .totals-table td.amount {
      text-align: right;
      font-family: monospace;
      font-weight: 600;
      color: #0f172a;
    }
    .totals-table tr.grand-total td {
      padding-top: 8px;
      border-top: 2px solid #0f172a;
      font-size: 15px;
      font-weight: 900;
      color: #0f172a;
    }
    .footer {
      border-top: 1px solid #e2e8f0;
      padding-top: 12px;
      font-size: 10px;
      color: #64748b;
      text-align: center;
      line-height: 1.4;
    }
    @media print {
      @page {
        size: portrait;
        margin: 8mm 10mm;
      }
      body { background: #ffffff; padding: 0; }
      .receipt-container {
        border: 1px solid #cbd5e1;
        box-shadow: none;
        padding: 16px 20px;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="receipt-container">
    <div class="header">
      <div class="brand">
        <h1>ONLINE <span>ATELIER</span></h1>
        <p>Haute E-Commerce • Official Purchase Receipt</p>
      </div>
      <div class="receipt-title">
        <h2>RECEIPT</h2>
        <div class="order-id">#${order.id}</div>
        <div class="order-id" style="font-size: 11px; color: #64748b;">${formattedDate}</div>
        <div><span class="status-pill">${order.status === 'Confirmed' ? 'Paid & Confirmed' : order.status}</span></div>
      </div>
    </div>

    <div class="meta-grid">
      <div class="meta-card">
        <h3>Billed & Shipped To</h3>
        <p><strong>${order.customer.fullName}</strong></p>
        <p>${order.customer.address}, ${order.customer.city}</p>
        <p>${order.customer.country} • ${order.customer.postalCode}</p>
        <p style="font-size: 11px; color: #64748b; margin-top: 2px;">${order.customer.email} • ${order.customer.phone}</p>
      </div>
      <div class="meta-card" style="text-align: right;">
        <h3>Payment & Dispatch</h3>
        <p>Payment: <strong>${paymentLabels[order.customer.paymentMethod] || order.customer.paymentMethod}</strong></p>
        <p style="color: #047857; font-weight: 600;">Status: Authorized & Paid</p>
        <p>Courier: Standard Insured</p>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th class="text-center" style="width: 50px;">Qty</th>
          <th class="text-right" style="width: 100px;">Price</th>
          <th class="text-right" style="width: 110px;">Amount</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>

    <div class="totals-area">
      <table class="totals-table">
        <tr>
          <td>Subtotal:</td>
          <td class="amount">$${order.subtotal.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Shipping:</td>
          <td class="amount">${order.shipping === 0 ? 'FREE ($0.00)' : `$${order.shipping.toFixed(2)}`}</td>
        </tr>
        <tr>
          <td>Sales Tax (8%):</td>
          <td class="amount">$${order.tax.toFixed(2)}</td>
        </tr>
        <tr class="grand-total">
          <td>Total Paid:</td>
          <td class="amount">$${order.total.toFixed(2)}</td>
        </tr>
      </table>
    </div>

    <div class="footer">
      <p><strong>Thank you for your order with Online Atelier!</strong></p>
      <p>Official purchase deed and verified authenticity. Retain this receipt for your records.</p>
    </div>
  </div>
</body>
</html>`;
}
