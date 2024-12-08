'use client';

import { useState } from 'react';
import { getAvatarUrl } from '@/lib/avatar';

interface AvatarProps {
  firstName: string;
  lastName: string;
  size?: number;
}

export function Avatar({ firstName, lastName, size = 32 }: AvatarProps) {
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
  const colors = [
    'bg-blue-100 text-blue-600',
    'bg-green-100 text-green-600',
    'bg-yellow-100 text-yellow-600',
    'bg-red-100 text-red-600',
    'bg-purple-100 text-purple-600',
  ];
  
  // Use a consistent color based on the name
  const colorIndex = (firstName.length + lastName.length) % colors.length;
  const colorClass = colors[colorIndex];

  return (
    <div 
      className={`relative rounded-full overflow-hidden flex items-center justify-center ${colorClass}`}
      style={{ 
        width: size, 
        height: size,
        fontSize: `${Math.max(size / 2.5, 12)}px`,
        fontWeight: 500
      }}
    >
      {initials}
    </div>
  );
}
