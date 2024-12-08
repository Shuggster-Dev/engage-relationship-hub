'use client';

import { Contact } from "@/types";
import { useQuery } from "@tanstack/react-query";

const mockContacts: Contact[] = [
  {
    id: "1",
    first_name: "Sarah",
    last_name: "Johnson",
    email: "sarah@google.com",
    phone: "(555) 123-4567",
    company: "Google",
    status: "prospect"
  },
  {
    id: "2",
    first_name: "Michael",
    last_name: "Williams",
    email: "michael@microsoft.com",
    phone: "(555) 987-6543",
    company: "Microsoft",
    status: "customer"
  },
  {
    id: "3",
    first_name: "Emma",
    last_name: "Brown",
    email: "emma@amazon.com",
    phone: "(555) 246-8135",
    company: "Amazon",
    status: "lead"
  },
  {
    id: "4",
    first_name: "David",
    last_name: "Jones",
    email: "david@meta.com",
    phone: "(555) 135-7924",
    company: "Meta",
    status: "prospect"
  },
  {
    id: "5",
    first_name: "Lisa",
    last_name: "Garcia",
    email: "lisa@netflix.com",
    phone: "(555) 369-1478",
    company: "Netflix",
    status: "customer"
  },
  {
    id: "6",
    first_name: "James",
    last_name: "Miller",
    email: "james@adobe.com",
    phone: "(555) 258-1470",
    company: "Adobe",
    status: "lead"
  }
];

const fetchContacts = async (): Promise<Contact[]> => {
  console.log('Fetching contacts from mock data');
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockContacts;
};

export function useContacts() {
  return useQuery({
    queryKey: ['contacts'],
    queryFn: fetchContacts,
    staleTime: Infinity,
    cacheTime: 5 * 60 * 1000,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
