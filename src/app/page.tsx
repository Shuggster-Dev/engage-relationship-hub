import { ContactList } from "../components/ContactList";
import { PageHeader } from "../components/PageHeader";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container mx-auto py-6 space-y-4">
      <PageHeader 
        title="Contacts" 
        description="Manage your contacts and keep track of your relationships."
      />
      <Suspense fallback={<div className="border rounded-lg p-4">Loading contacts...</div>}>
        <ContactList />
      </Suspense>
    </div>
  );
}