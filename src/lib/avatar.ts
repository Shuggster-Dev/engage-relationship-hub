export function getAvatarUrl(firstName: string, lastName: string): string {
  // Normalize the name by removing special characters and trimming
  const normalizedFirstName = firstName.replace(/[^a-zA-Z0-9]/g, '').trim();
  const normalizedLastName = lastName.replace(/[^a-zA-Z0-9]/g, '').trim();

  // Create a consistent seed for the avatar
  const seed = `${normalizedFirstName}+${normalizedLastName}`.toLowerCase();

  // Return the URL with proper encoding
  return `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(seed)}`;
}
