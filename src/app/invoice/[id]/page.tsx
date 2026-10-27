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
    title: `Receipt #${params.id} | Online Atelier`,
    description: `Official order confirmation and proof of acquisition for receipt #${params.id}`,
  };
}

export default function InvoicePage({ params }: Props) {
  return <InvoicePageClient orderId={params.id} />;
}

