'use client';

import { PageHeader } from "../components/PageHeader";
import { ContactList } from "../components/ContactList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a single QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 5 * 60 * 1000,
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto py-6 space-y-6">
        <PageHeader 
          title="Contacts" 
          description="Manage your contacts and keep track of your relationships."
        />
        <ContactList />
      </div>
    </QueryClientProvider>
  );
}