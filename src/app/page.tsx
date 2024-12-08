'use client';

import { PageHeader } from "../components/PageHeader";
import dynamic from 'next/dynamic';

const ClientContactList = dynamic(
  () => import('../components/ContactList'),
  {
    ssr: false,
    loading: () => <div className="border rounded-lg">
      <div className="h-[400px] w-full bg-gray-800 animate-pulse" />
    </div>
  }
);

export default function Home() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <PageHeader 
        title="Contacts" 
        description="Manage your contacts and keep track of your relationships."
      />
      <ClientContactList />
    </div>
  );
}