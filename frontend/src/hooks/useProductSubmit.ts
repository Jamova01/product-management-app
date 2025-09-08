"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ProductFormData, ProductSchema } from "@/schemas/product.schema";
import { useProductStore } from "@/stores/product.store";

export function useProductSubmit() {
  const createProduct = useProductStore((state) => state.createProduct);
  const loading = useProductStore((state) => state.loading);

  const form = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      imageUrl: "",
    },
  });

  async function onSubmit(values: ProductFormData) {
    await createProduct(values);
    form.reset();
  }

  return { form, onSubmit, loading };
}
