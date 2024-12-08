import { Contact } from "@/types";
import { useQuery } from "@tanstack/react-query";

const mockContacts: Contact[] = [
  {
    id: "1",
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
    company: "Acme Inc",
    status: "lead"
  },
  {
    id: "2",
    first_name: "Jane",
    last_name: "Smith",
    email: "jane@example.com",
    phone: "(555) 987-6543",
    company: "Tech Corp",
    status: "prospect"
  },
  {
    id: "3",
    first_name: "Bob",
    last_name: "Johnson",
    email: "bob@example.com",
    phone: "(555) 246-8135",
    company: "Global Solutions",
    status: "customer"
  }
];

const fetchContacts = async (): Promise<Contact[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockContacts);
    }, 1000);
  });
};

export function useContacts() {
  return useQuery({
    queryKey: ['contacts'],
    queryFn: fetchContacts,
  });
}