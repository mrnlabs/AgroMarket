import * as z from 'zod';

export const storeSchema = z.object({
  name: z.string().min(1, 'Store name is required'),
  address: z.string().min(1, 'Address is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  image: z.any().optional(),
  images: z.any().optional(),
});

export type StoreFormData = z.infer<typeof storeSchema>;