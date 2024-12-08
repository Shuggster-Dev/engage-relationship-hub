'use client';

import { PageHeader } from "../components/PageHeader";
import dynamic from 'next/dynamic';

// Disable SSR for ContactList with no loading component to prevent hydration mismatch
const ClientContactList = dynamic(
  () => import('../components/ContactList'),
  {
    ssr: false,
    loading: () => <div className="border rounded-lg">
      <div className="h-[400px] w-full bg-gray-100 animate-pulse" />
    </div>
  }
);

export default function Home() {
  return (
    <div className="container mx-auto py-6 space-y-4">
      <PageHeader 
        title="Contacts" 
        description="Manage your contacts and keep track of your relationships."
      />
      <ClientContactList />
    </div>
  );
}