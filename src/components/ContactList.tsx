"use client";

import { DataTable } from "./ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useContacts } from "../hooks/useContacts";
import { Contact } from "../types";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="space-y-1">
          <div className="font-medium">
            {data.first_name} {data.last_name}
          </div>
          <div className="text-sm text-muted-foreground">
            {data.company}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "contact",
    header: "Contact",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="space-y-1">
          <div className="text-sm">{data.email}</div>
          <div className="text-sm text-muted-foreground">{data.phone}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex justify-end">
        <span className={`px-3 py-1 rounded-full text-sm ${
          row.original.status === 'prospect' ? 'bg-gray-700 text-white' :
          row.original.status === 'lead' ? 'bg-white text-black border border-gray-200' :
          'bg-gray-700 text-white'
        }`}>
          {row.original.status}
        </span>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="flex justify-end">
        <Link href={`/contacts/${row.original.id}`}>
          <Button variant="ghost" size="sm">
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    ),
  },
];

function ContactListContent() {
  const { data: contacts, isLoading, error } = useContacts();

  if (isLoading) {
    return (
      <div className="border rounded-lg">
        <div className="h-[400px] w-full bg-gray-100 animate-pulse" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="border rounded-lg p-4 text-red-500">
        Error loading contacts
      </div>
    );
  }

  if (!contacts || contacts.length === 0) {
    return (
      <div className="border rounded-lg p-4">
        No contacts found
      </div>
    );
  }

  return (
    <div className="border rounded-lg">
      <DataTable columns={columns} data={contacts} />
    </div>
  );
}

export default function ContactList() {
  // Create QueryClient instance only once using useState
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <ContactListContent />
    </QueryClientProvider>
  );
}