import React from 'react';
import type { Metadata } from 'next';
import InvoicePageClient from './InvoicePageClient';

interface Props {
  params: {
    id: string;
  };
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Invoice #${params.id} (.html) | AURA Store (SSR)`,
    description: `Official order confirmation and downloadable HTML invoice for order #${params.id}`,
  };
}

export default function InvoicePage({ params }: Props) {
  return <InvoicePageClient orderId={params.id} />;
}

