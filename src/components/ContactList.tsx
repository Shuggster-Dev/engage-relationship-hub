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
    accessorKey: "name",
    header: "",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="space-y-1">
          <div className="font-medium">
            {data.first_name} {data.last_name}
          </div>
          <div className="text-sm text-gray-500">
            {data.company}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "",
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
      <DataTable 
        columns={columns} 
        data={contacts} 
      />
    </div>
  );
}