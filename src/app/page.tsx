'use client';

import { PageHeader } from "../components/PageHeader";
import ContactList from '../components/ContactList';

export default function Home() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <PageHeader 
        title="Contacts" 
        description="Manage your contacts and keep track of your relationships."
      />
      <ContactList />
    </div>
  );
}