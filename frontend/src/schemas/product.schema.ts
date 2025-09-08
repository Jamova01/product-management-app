import * as z from "zod";

export const ProductSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  description: z
    .string()
    .min(5, { message: "La descripción debe tener al menos 5 caracteres" }),
  price: z
    .number({ error: "El precio debe ser un número" })
    .positive("El precio debe ser mayor a 0"),
  imageUrl: z.url("Debe ser una URL válida").optional().or(z.literal("")),
});

export type ProductFormData = z.infer<typeof ProductSchema>;

export type Product = ProductFormData & { id: string };
