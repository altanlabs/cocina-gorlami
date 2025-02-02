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
    </div>
  );
}
