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
      const data = row.original;
      console.log("Name cell data:", {
        firstName: data.first_name,
        lastName: data.last_name,
        fullRow: data
      });
      return (
        <div className="font-medium">
          {data.first_name} {data.last_name}
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      console.log("Email cell data:", row.getValue("email"));
      return (
        <div className="text-gray-500">{row.getValue("email")}</div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => {
      console.log("Phone cell data:", row.getValue("phone"));
      return (
        <div className="text-gray-500">{row.getValue("phone")}</div>
      );
    },
  },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => {
      console.log("Company cell data:", row.getValue("company"));
      return (
        <div className="text-gray-500">{row.getValue("company")}</div>
      );
    },
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
  const { data: contacts, error } = useContacts();
  
  console.log("ContactList render - Full contacts data:", contacts);
  console.log("ContactList render - Any error?", error);

  if (error) {
    console.error("Error fetching contacts:", error);
    return <div>Error loading contacts</div>;
  }

  if (!contacts) {
    console.log("No contacts data available yet");
    return <div>Loading contacts...</div>;
  }

  if (contacts.length === 0) {
    console.log("Contacts array is empty");
    return <div>No contacts found</div>;
  }

  return (
    <div>
      <pre style={{ display: 'none' }}>{JSON.stringify(contacts, null, 2)}</pre>
      <DataTable 
        columns={columns} 
        data={contacts} 
      />
    </div>
  );
}
