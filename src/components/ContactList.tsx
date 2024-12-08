"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useContacts } from "@/hooks/useContacts";
import { Contact } from "@/types";
import { Button } from "./ui/button";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Link from "next/link";

const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const email = row.getValue("email") as string;
      console.log("Email value:", email); // Added logging
      return email ? (
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </div>
      ) : null;
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => {
      const phone = row.getValue("phone") as string;
      console.log("Phone value:", phone); // Added logging
      return phone ? (
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <a href={`tel:${phone}`} className="hover:underline">
            {phone}
          </a>
        </div>
      ) : null;
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
  
  console.log("Contacts data:", contacts); // Added logging

  return (
    <DataTable 
      columns={columns} 
      data={contacts || []} 
      isLoading={isLoading}
    />
  );
}