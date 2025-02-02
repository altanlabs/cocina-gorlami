import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          Bienvenido a la Aplicación de Recetas
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Descubre y Cocina Recetas Deliciosas
          <br />
          Basadas en tus Preferencias
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Explora recetas personalizadas según tus gustos y restricciones alimentarias.
        </p>
        <Button size="lg" className="mt-4" onClick={() => navigate('/recetas')}>
          Explorar Recetas <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.section>

      {/* Featured Recipes Section */}
      <motion.section 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center">Recetas Destacadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Recipe Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/300x200?text=Receta+1" alt="Receta 1" className="w-full h-32 sm:h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Receta 1</h3>
              <p className="text-gray-600 dark:text-gray-300">Descripción breve de la receta.</p>
              <Button onClick={() => navigate('/recetas/1')} className="mt-4 bg-primary text-white dark:text-black hover:bg-primary-dark">Ver Receta</Button>
            </div>
          </div>
          {/* Add more recipe cards as needed */}
        </div>
      </motion.section>
    </div>
  );
}
