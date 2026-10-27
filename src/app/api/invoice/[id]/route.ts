import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../../data/products';
import { generateInvoiceHtml } from '../../../../utils/invoiceHtml';
import { Order } from '../../../../types';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { searchParams } = new URL(request.url);
  const isDownload = searchParams.get('download') === 'true';

  // Construct official order record for the invoice
  const order: Order = {
    id: params.id || 'ORD-882194',
    date: new Date().toISOString(),
    customer: {
      fullName: searchParams.get('name') || 'Jane Doe',
      email: searchParams.get('email') || 'customer@example.com',
      phone: '+1 (555) 019-2831',
      address: '742 Evergreen Terrace',
      city: 'San Francisco',
      postalCode: '94107',
      country: 'United States',
      paymentMethod: 'credit_card',
    },
    items: [
      { product: products[0], quantity: 1 },
      { product: products[2], quantity: 1 },
      { product: products[3], quantity: 1 },
    ],
    subtotal: products[0].price + products[2].price + products[3].price,
    shipping: 0,
    tax: (products[0].price + products[2].price + products[3].price) * 0.08,
    total: (products[0].price + products[2].price + products[3].price) * 1.08,
    status: 'Confirmed',
  };

  const html = generateInvoiceHtml(order);

  const headers = new Headers();
  headers.set('Content-Type', 'text/html; charset=utf-8');

  if (isDownload) {
    headers.set(
      'Content-Disposition',
      `attachment; filename="invoice-${order.id}.html"`
    );
  }

  return new NextResponse(html, {
    status: 200,
    headers,
  });
}

