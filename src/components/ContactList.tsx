'use client';

import { DataTable } from "./ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useContacts } from "../hooks/useContacts";
import { Contact } from "../types";
import { Button } from "./ui/button";
import { Plus, Search } from "lucide-react";

const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    header: "",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="space-y-1">
          <div className="font-medium text-white">
            {data.first_name} {data.last_name}
          </div>
          <div className="text-sm text-gray-400">
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
          row.original.status === 'prospect' ? 'bg-blue-500/20 text-blue-400' :
          row.original.status === 'lead' ? 'bg-yellow-500/20 text-yellow-400' :
          'bg-green-500/20 text-green-400'
        }`}>
          {row.original.status}
        </span>
      </div>
    ),
  },
];

export default function ContactList() {
  const { data: contacts, isLoading, error } = useContacts();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-600"
              disabled
            />
          </div>
          <Button className="bg-white text-black hover:bg-gray-100">
            <Plus className="h-4 w-4 mr-2" />
            Add Contact
          </Button>
        </div>
        <div className="h-[400px] w-full bg-gray-800 rounded-lg animate-pulse" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500 bg-gray-800 rounded-lg">
        Error loading contacts
      </div>
    );
  }

  if (!contacts || contacts.length === 0) {
    return (
      <div className="p-4 text-gray-400 bg-gray-800 rounded-lg">
        No contacts found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-600"
          />
        </div>
        <Button className="bg-white text-black hover:bg-gray-100">
          <Plus className="h-4 w-4 mr-2" />
          Add Contact
        </Button>
      </div>
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <DataTable columns={columns} data={contacts} />
      </div>
    </div>
  );
}
