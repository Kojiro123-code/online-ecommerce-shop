import { Order } from '../types';

export function generateInvoiceHtml(order: Order): string {
  const formattedDate = new Date(order.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const paymentLabels: Record<string, string> = {
    credit_card: 'Credit / Debit Card (Online)',
    bank_transfer: 'Direct Bank Wire / Virtual Account',
    cod: 'Cash on Delivery (COD)',
  };

  const rows = order.items
    .map(
      (item, idx) => `
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b;">
          <strong>${idx + 1}. ${item.product.name}</strong><br>
          <span style="font-size: 12px; color: #64748b;">Category: ${item.product.category} | SKU: ${item.product.id}</span>
        </td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; text-align: center; color: #334155;">
          ${item.quantity}
        </td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; text-align: right; color: #334155;">
          $${item.product.price.toFixed(2)}
        </td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; text-align: right; font-weight: 600; color: #0f172a;">
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
  <title>Invoice #${order.id} - AURA Store</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #f8fafc;
      color: #0f172a;
      padding: 40px 20px;
      line-height: 1.5;
    }
    .invoice-container {
      max-width: 800px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
      padding: 48px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2px solid #0d9488;
      padding-bottom: 28px;
      margin-bottom: 32px;
    }
    .brand h1 {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: #0f172a;
    }
    .brand span { color: #0d9488; }
    .brand p { font-size: 13px; color: #64748b; margin-top: 4px; }
    .invoice-title {
      text-align: right;
    }
    .invoice-title h2 {
      font-size: 22px;
      font-weight: 700;
      color: #0d9488;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .invoice-title .order-id {
      font-size: 14px;
      font-weight: 600;
      color: #334155;
      margin-top: 4px;
    }
    .invoice-title .status-pill {
      display: inline-block;
      margin-top: 8px;
      padding: 4px 12px;
      background: #ecfdf5;
      color: #047857;
      font-size: 11px;
      font-weight: 700;
      border-radius: 9999px;
      border: 1px solid #a7f3d0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .meta-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      margin-bottom: 36px;
    }
    .meta-card h3 {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #64748b;
      margin-bottom: 8px;
      font-weight: 700;
    }
    .meta-card p {
      font-size: 14px;
      color: #1e293b;
      line-height: 1.6;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 32px;
    }
    th {
      background-color: #f1f5f9;
      color: #475569;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 12px 16px;
      text-align: left;
    }
    th.text-center { text-align: center; }
    th.text-right { text-align: right; }
    .totals-area {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 36px;
    }
    .totals-table {
      width: 320px;
      border-collapse: collapse;
    }
    .totals-table td {
      padding: 8px 12px;
      font-size: 14px;
    }
    .totals-table tr.grand-total td {
      padding-top: 14px;
      border-top: 2px solid #0f172a;
      font-size: 18px;
      font-weight: 800;
      color: #0d9488;
    }
    .footer {
      border-top: 1px solid #e2e8f0;
      padding-top: 24px;
      font-size: 12px;
      color: #64748b;
      text-align: center;
      line-height: 1.6;
    }
    @media print {
      body { background: #ffffff; padding: 0; }
      .invoice-container { border: none; box-shadow: none; padding: 20px; }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="invoice-container">
    <div class="header">
      <div class="brand">
        <h1>AURA<span>.STORE</span></h1>
        <p>Server-Side Rendered E-Commerce Platform</p>
        <p>support@aurastore.local • +1 (800) 555-0199</p>
      </div>
      <div class="invoice-title">
        <h2>INVOICE</h2>
        <div class="order-id">Order Ref: ${order.id}</div>
        <div class="order-id" style="font-size: 12px; color: #64748b;">${formattedDate}</div>
        <div><span class="status-pill">${order.status}</span></div>
      </div>
    </div>

    <div class="meta-grid">
      <div class="meta-card">
        <h3>Billed & Shipped To</h3>
        <p><strong>${order.customer.fullName}</strong></p>
        <p>${order.customer.address}</p>
        <p>${order.customer.city}, ${order.customer.postalCode}</p>
        <p>${order.customer.country}</p>
        <p style="margin-top: 4px; color: #64748b; font-size: 13px;">${order.customer.email} • ${order.customer.phone}</p>
      </div>
      <div class="meta-card">
        <h3>Payment & Dispatch Information</h3>
        <p><strong>Payment Method:</strong> ${paymentLabels[order.customer.paymentMethod] || order.customer.paymentMethod}</p>
        <p><strong>Payment Status:</strong> <span style="color: #047857; font-weight: 600;">Authorized / Paid</span></p>
        <p><strong>Fulfillment Mode:</strong> Standard Priority Express</p>
        <p><strong>Delivery Estimate:</strong> 2 - 3 Business Days</p>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th class="text-center" style="width: 80px;">Qty</th>
          <th class="text-right" style="width: 120px;">Unit Price</th>
          <th class="text-right" style="width: 120px;">Amount</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>

    <div class="totals-area">
      <table class="totals-table">
        <tr>
          <td style="color: #64748b;">Subtotal</td>
          <td style="text-align: right; font-weight: 600;">$${order.subtotal.toFixed(2)}</td>
        </tr>
        <tr>
          <td style="color: #64748b;">Shipping Fee</td>
          <td style="text-align: right; font-weight: 600;">${order.shipping === 0 ? 'FREE ($0.00)' : '$' + order.shipping.toFixed(2)}</td>
        </tr>
        <tr>
          <td style="color: #64748b;">Estimated Tax (8%)</td>
          <td style="text-align: right; font-weight: 600;">$${order.tax.toFixed(2)}</td>
        </tr>
        <tr class="grand-total">
          <td>Total Paid</td>
          <td style="text-align: right;">$${order.total.toFixed(2)}</td>
        </tr>
      </table>
    </div>

    <div class="footer">
      <p>Thank you for shopping with <strong>AURA Store</strong>! This official invoice was generated via Server-Side Rendering (SSR).</p>
      <p>Questions about your shipment or warranty? Reach out to support@aurastore.local quoting Order <strong>#${order.id}</strong>.</p>
    </div>
  </div>
</body>
</html>`;
}
