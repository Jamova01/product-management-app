"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import { Card } from "@/components/atoms/Card";
import { ProductForm } from "@/components/organisms/ProductForm";
import { ProductTable } from "@/components/organisms/ProductTable";
import { useProductStore } from "@/stores/product.store";

export default function Home() {
  const getProducts = useProductStore((state) => state.getProducts);
  const products = useProductStore((state) => state.products);
  const loading = useProductStore((state) => state.loading);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-extrabold mb-12 text-gray-900 tracking-tight"
      >
        Gestión de{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Productos
        </span>
      </motion.h1>

      <div className="flex flex-col gap-12">
        <Card className="p-6 shadow-md rounded-2xl border border-gray-200 bg-white">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Agregar nuevo producto
          </h2>
          <ProductForm />
        </Card>

        <Card className="p-6 shadow-md rounded-2xl border border-gray-200 bg-white">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Panel de productos
          </h2>

          {loading ? (
            <div className="text-gray-500 text-sm italic animate-pulse">
              Cargando productos...
            </div>
          ) : products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mb-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 7h18M3 12h18M3 17h18"
                />
              </svg>
              <p className="text-sm italic">
                No hay productos registrados todavía.
              </p>
            </div>
          ) : (
            <ProductTable />
          )}
        </Card>
      </div>
    </div>
  );
}
