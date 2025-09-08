"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/atoms/Card";
import { ProductForm } from "@/components/organisms/ProductForm";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold mb-10 text-gray-900"
      >
        Gestión de Productos
      </motion.h1>

      <div className="flex flex-col gap-10">
        <ProductForm />

        <Card className="p-6 shadow-xl rounded-2xl border border-gray-200 bg-white">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Panel de Productos
          </h2>
          <div className="text-gray-500 text-sm italic">
            Aquí aparecerá la lista de productos...
          </div>
        </Card>
      </div>
    </div>
  );
}
