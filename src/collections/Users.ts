import { revalidateTag } from 'next/cache';
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  hooks: {
    afterChange: [
      () => {
        revalidateTag('payload');
      }
    ]
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
