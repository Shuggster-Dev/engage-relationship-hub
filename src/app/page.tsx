import { ContactList } from "../components/ContactList";
import { PageHeader } from "../components/PageHeader";

export default function Home() {
  return (
    <div className="container mx-auto py-6 space-y-4">
      <PageHeader 
        title="Contacts" 
        description="Manage your contacts and keep track of your relationships."
      />
      <ContactList />
    </div>
  );
}