import { Suspense } from "react";
import { ContactList } from "@/components/ContactList";
import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <div className="container mx-auto py-6 space-y-4">
      <PageHeader 
        title="Contacts" 
        description="Manage your contacts and keep track of your relationships."
      />
      <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
        <ContactList />
      </Suspense>
    </div>
  );
}