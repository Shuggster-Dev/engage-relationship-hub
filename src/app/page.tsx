"use client";

import { ContactList } from "../components/ContactList";
import { PageHeader } from "../components/PageHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto py-6 space-y-4">
        <PageHeader 
          title="Contacts" 
          description="Manage your contacts and keep track of your relationships."
        />
        <ContactList />
      </div>
    </QueryClientProvider>
  );
}