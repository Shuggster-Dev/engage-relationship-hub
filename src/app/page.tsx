'use client';

import { PageHeader } from "../components/PageHeader";
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ClientContactList = dynamic(
  () => import('../components/ContactList'),
  {
    ssr: false,
    loading: () => <div className="border rounded-lg">
      <div className="h-[400px] w-full bg-gray-800 animate-pulse" />
    </div>
  }
);

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
        <ClientContactList />
      </div>
    </QueryClientProvider>
  );
}