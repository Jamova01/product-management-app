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
      imageUrl: "",
    },
  });

  async function onSubmit(data: ProductFormData) {
    const payload: CreateProductData = {
      name: data.name,
      description: data.description,
      price: Number(data.price),
    };

    if (data.imageUrl && data.imageUrl.trim() !== "") {
      payload.imageUrl = data.imageUrl;
    }

    await createProduct(payload);
  }

  return { form, onSubmit, loading };
}
