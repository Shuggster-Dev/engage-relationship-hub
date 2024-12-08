"use client";

import { DataTable } from "../components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useContacts } from "../hooks/useContacts";
import { Contact } from "../types";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex items-center gap-3">
          <Avatar firstName={data.first_name} lastName={data.last_name} size={32} />
          <div className="space-y-1">
            <div className="font-medium">
              {data.first_name} {data.last_name}
            </div>
            <div className="text-sm text-muted-foreground">
              {data.company}
            </div>
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

export function ContactList() {
  const { data: contacts, error } = useContacts();
  
  if (error) {
    return <div>Error loading contacts</div>;
  }

  if (!contacts) {
    return <div>Loading contacts...</div>;
  }

  if (contacts.length === 0) {
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