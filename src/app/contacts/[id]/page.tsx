'use client';

import { useParams } from 'next/navigation';
import { Contact } from '@/types';
import { useContacts } from '@/hooks/useContacts';
import { Avatar } from '@/components/ui/avatar';

export default function ContactDetailPage() {
  const params = useParams();
  const { data: contacts } = useContacts();
  const contact = contacts?.find(c => c.id === params.id);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center gap-6">
        <Avatar 
          firstName={contact.first_name} 
          lastName={contact.last_name} 
          size={96}
        />
        <div>
          <h1 className="text-3xl font-bold">
            {contact.first_name} {contact.last_name}
          </h1>
          <p className="text-muted-foreground">{contact.company}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Email</p>
            <p>{contact.email}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Phone</p>
            <p>{contact.phone}</p>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Status</h2>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Current Status</p>
            <span className={`inline-block px-3 py-1 rounded-full text-sm ${
              contact.status === 'prospect' ? 'bg-gray-700 text-white' :
              contact.status === 'lead' ? 'bg-white text-black border border-gray-200' :
              'bg-gray-700 text-white'
            }`}>
              {contact.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
