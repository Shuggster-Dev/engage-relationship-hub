"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useContacts } from "@/hooks/useContacts";
import { Contact } from "@/types";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "first_name",
    header: "Name",
    cell: ({ row }) => {
      const contact = row.original;
      return (
        <div className="font-medium">
          {contact.first_name} {contact.last_name}
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const contact = row.original;
      return <div className="text-gray-500">{contact.email}</div>;
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => {
      const contact = row.original;
      return <div className="text-gray-500">{contact.phone}</div>;
    },
  },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => {
      const contact = row.original;
      return <div className="text-gray-500">{contact.company}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const contact = row.original;
      return (
        <div className="flex justify-end">
          <span className={`px-2 py-1 rounded-full text-sm ${
            contact.status === 'prospect' ? 'bg-gray-700 text-white' :
            contact.status === 'lead' ? 'bg-white text-black border border-gray-200' :
            'bg-gray-700 text-white'
          }`}>
            {contact.status}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const contact = row.original;
      return (
        <div className="flex justify-end">
          <Link href={`/contacts/${contact.id}`}>
            <Button variant="ghost" size="sm">
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      );
    },
  },
];

export function ContactList() {
  const { data: contacts, isLoading } = useContacts();
  
  console.log("Contacts data:", contacts);

  return (
    <DataTable 
      columns={columns} 
      data={contacts || []} 
      isLoading={isLoading}
    />
  );
}