import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const sampleRecipes = [
  {
    id: 1,
    title: 'Ensalada de Quinoa',
    description: 'Una ensalada fresca y saludable con quinoa, aguacate y tomate.',
    image: 'https://via.placeholder.com/300x200?text=Ensalada+de+Quinoa',
    ingredients: ['Quinoa', 'Aguacate', 'Tomate', 'Limón', 'Aceite de Oliva'],
    steps: [
      'Cocinar la quinoa según las instrucciones del paquete.',
      'Cortar el aguacate y el tomate en cubos.',
      'Mezclar todos los ingredientes en un bol.',
      'Aliñar con limón y aceite de oliva al gusto.',
    ],
  },
  {
    id: 2,
    title: 'Tacos de Pescado',
    description: 'Deliciosos tacos de pescado con salsa de mango y cilantro.',
    image: 'https://via.placeholder.com/300x200?text=Tacos+de+Pescado',
    ingredients: ['Pescado', 'Tortillas', 'Mango', 'Cilantro', 'Lima'],
    steps: [
      'Cocinar el pescado a la parrilla.',
      'Preparar la salsa de mango y cilantro.',
      'Calentar las tortillas.',
      'Servir el pescado en las tortillas con la salsa.',
    ],
  },
  {
    id: 3,
    title: 'Pasta al Pesto',
    description: 'Pasta con salsa de pesto casera y parmesano.',
    image: 'https://via.placeholder.com/300x200?text=Pasta+al+Pesto',
    ingredients: ['Pasta', 'Albahaca', 'Ajo', 'Parmesano', 'Aceite de Oliva'],
    steps: [
      'Cocinar la pasta según las instrucciones del paquete.',
      'Preparar la salsa de pesto.',
      'Mezclar la pasta con la salsa de pesto.',
      'Servir con parmesano rallado por encima.',
    ],
  },
];

export default function RecetasPage() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState(sampleRecipes);

  const handleViewRecipe = (recipeId) => {
    console.log(`Navigating to recipe with ID: ${recipeId}`);
    navigate(`/recetas/${recipeId}`);
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Recetas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 sm:h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{recipe.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{recipe.description}</p>
              <Button onClick={() => handleViewRecipe(recipe.id)} className="mt-4 bg-primary text-white dark:text-black hover:bg-primary-dark">Ver Receta</Button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
