import * as z from "zod";

export const ProductFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  description: z
    .string()
    .min(5, { message: "La descripción debe tener al menos 5 caracteres" }),
  price: z
    .string()
    .min(1, { message: "El precio es requerido" })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "El precio debe ser un número mayor a 0",
    }),
});

export const CreateProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
});

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
});

export type ProductFormData = z.infer<typeof ProductFormSchema>;
export type CreateProductData = z.infer<typeof CreateProductSchema>;
export type Product = z.infer<typeof ProductSchema>;
