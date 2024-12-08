import { PageHeader } from "../components/PageHeader";
import dynamic from 'next/dynamic';

// Disable SSR for ContactList with no loading component to prevent hydration mismatch
const ClientContactList = dynamic(() => import('../components/ContactList'), {
  ssr: false,
  loading: () => null
});

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