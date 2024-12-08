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
    cell: ({ row }) => (
      <div className="font-medium">
        {row.original.first_name} {row.original.last_name}
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="text-gray-500">{row.original.email}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="text-gray-500">{row.original.phone}</div>
    ),
  },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => (
      <div className="text-gray-500">{row.original.company}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex justify-end">
        <span className={`px-2 py-1 rounded-full text-sm ${
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

export function ContactList() {
  const { data: contacts } = useContacts();
  
  console.log("Raw contacts data:", contacts);
  
  if (!contacts) {
    console.log("No contacts data available");
    return <div>Loading contacts...</div>;
  }

  if (contacts.length === 0) {
    console.log("Contacts array is empty");
    return <div>No contacts found</div>;
  }

  // Log the first contact to see its structure
  console.log("First contact:", contacts[0]);
  
  return (
    <DataTable 
      columns={columns} 
      data={contacts} 
    />
  );
}