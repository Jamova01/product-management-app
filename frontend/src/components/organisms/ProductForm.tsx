"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { Card } from "@/components/atoms/Card";
import { Button } from "@/components/atoms/Button";
import { Form } from "@/components/atoms/Form";
import { FormTextField } from "@/components/molecules/FormTextField";
import { FormTextareaField } from "@/components/molecules/FormTextareaField";
import { useProductSubmit } from "@/hooks/useProductSubmit";

export function ProductForm() {
  const { form, onSubmit, loading } = useProductSubmit();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto"
    >
      <Card className="p-8 shadow-xl rounded-2xl border border-gray-200 bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Crear Nuevo Producto
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormTextField
              control={form.control}
              name="name"
              label="Nombre del producto *"
              placeholder="Ingrese el nombre del producto"
            />

            <FormTextareaField
              control={form.control}
              name="description"
              label="Descripción del producto *"
              placeholder="Ingrese una breve descripción del producto"
              rows={4}
            />

            <FormTextField
              control={form.control}
              name="price"
              label="Precio *"
              placeholder="0.00"
              type="number"
              step="0.01"
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2"
            >
              {loading ? "Guardando..." : "Guardar Producto"}
              {!loading && <Send className="w-4 h-4" />}
            </Button>
          </form>
        </Form>
      </Card>
    </motion.div>
  );
}
