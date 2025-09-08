"use client";

import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { ProductSchema, ProductFormData } from "@/schemas/product.schema";

export function useProductSubmit() {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      await axios.post("http://localhost:3000/products", values);
      toast.success("Product created successfully");
      return values;
    } catch {
      toast.error("Failed to create product");
    } finally {
      setLoading(false);
    }
  }

  return { form, onSubmit, loading };
}
