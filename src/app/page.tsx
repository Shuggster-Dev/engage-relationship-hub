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
      <Suspense fallback={
        <div className="border rounded-lg">
          <div className="h-[400px] w-full bg-gray-100 animate-pulse" />
        </div>
      }>
        <ContactList />
      </Suspense>
    </div>
  );
}