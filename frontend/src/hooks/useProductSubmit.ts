"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CreateProductData,
  ProductFormData,
  ProductFormSchema,
} from "@/schemas/product.schema";
import { useProductStore } from "@/stores/product.store";

export function useProductSubmit() {
  const createProduct = useProductStore((state) => state.createProduct);
  const loading = useProductStore((state) => state.loading);

  const form = useForm<ProductFormData>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
    },
  });

  async function onSubmit(data: ProductFormData) {
    const payload: CreateProductData = {
      name: data.name,
      description: data.description,
      price: Number(data.price),
    };

    const product = await createProduct(payload);
    if (product) {
      form.reset();
    }
  }

  return { form, onSubmit, loading };
}
