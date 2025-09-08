"use client";

import { create } from "zustand";
import { toast } from "sonner";
import api from "@/lib/axios";
import { Product, CreateProductData } from "@/schemas/product.schema";
import { AxiosError } from "axios";

interface ApiErrorResponse {
  message: string | string[];
  error: string;
  statusCode: number;
}

type ProductState = {
  products: Product[];
  loading: boolean;
  getProducts: () => Promise<void>;
  createProduct: (values: CreateProductData) => Promise<Product | null>;
  deleteProduct: (id: string) => Promise<void>;
};

function extractErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof AxiosError) {
    const responseData = error.response?.data as ApiErrorResponse | undefined;
    if (responseData?.message) {
      return Array.isArray(responseData.message)
        ? responseData.message.join(", ")
        : responseData.message;
    }
    return error.message || fallback;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,

  getProducts: async () => {
    set({ loading: true });
    try {
      const { data } = await api.get<Product[]>("/products");
      set({ products: data });
    } catch (error: unknown) {
      toast.error(extractErrorMessage(error, "Error al cargar productos"));
    } finally {
      set({ loading: false });
    }
  },

  createProduct: async (values: CreateProductData) => {
    set({ loading: true });
    try {
      const { data } = await api.post<Product>("/products", values);
      set((state) => ({ products: [...state.products, data] }));
      toast.success("Producto creado correctamente");
      return data;
    } catch (error: unknown) {
      toast.error(extractErrorMessage(error, "No se pudo crear el producto"));
      return null;
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (id: string) => {
    set({ loading: true });
    try {
      await api.delete(`/products/${id}`);
      set((state) => ({
        products: state.products.filter((p) => p.id !== id),
      }));
      toast.success("Producto eliminado");
    } catch (error: unknown) {
      toast.error(
        extractErrorMessage(error, "No se pudo eliminar el producto")
      );
    } finally {
      set({ loading: false });
    }
  },
}));
