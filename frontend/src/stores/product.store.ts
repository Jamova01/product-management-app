"use client";

import { create } from "zustand";
import { toast } from "sonner";
import api from "@/lib/axios";
import { Product, ProductFormData } from "@/schemas/product.schema";

type ProductState = {
  products: Product[];
  loading: boolean;
  getProducts: () => Promise<void>;
  createProduct: (values: ProductFormData) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
};

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,

  getProducts: async () => {
    set({ loading: true });
    try {
      const { data } = await api.get<Product[]>("/products");
      set({ products: data });
    } catch {
      toast.error("Error al cargar productos");
    } finally {
      set({ loading: false });
    }
  },

  createProduct: async (values: ProductFormData) => {
    set({ loading: true });
    try {
      const { data } = await api.post<Product>("/products", values);
      set((state) => ({ products: [...state.products, data] }));
      toast.success("Producto creado correctamente");
    } catch {
      toast.error("No se pudo crear el producto");
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
    } catch {
      toast.error("No se pudo eliminar el producto");
    } finally {
      set({ loading: false });
    }
  },
}));
