import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

const sampleRecipes = [
  { id: 1, name: 'Ensalada de Quinoa', time: '15 min', difficulty: 'Fácil', tags: ['saludable', 'rápido'], image: 'https://via.placeholder.com/300x200?text=Ensalada+de+Quinoa', ingredients: ['Quinoa', 'Aguacate', 'Tomate', 'Limón', 'Aceite de Oliva'], steps: ['Cocinar la quinoa según las instrucciones del paquete.', 'Cortar el aguacate y el tomate en cubos.', 'Mezclar todos los ingredientes en un bol.', 'Aliñar con limón y aceite de oliva al gusto.'] },
  { id: 2, name: 'Tacos Veganos', time: '30 min', difficulty: 'Media', tags: ['vegano', 'mexicano'], image: 'https://via.placeholder.com/300x200?text=Tacos+Veganos', ingredients: ['Tortillas', 'Frijoles', 'Aguacate'], steps: ['Calentar tortillas', 'Preparar relleno', 'Servir con aguacate'] },
  { id: 3, name: 'Sopa de Tomate', time: '20 min', difficulty: 'Fácil', tags: ['sopa', 'vegetariano'], image: 'https://via.placeholder.com/300x200?text=Sopa+de+Tomate', ingredients: ['Tomates', 'Cebolla', 'Ajo'], steps: ['Sofreír cebolla y ajo', 'Añadir tomates', 'Cocinar a fuego lento'] },
  { id: 4, name: 'Pasta al Pesto', time: '25 min', difficulty: 'Fácil', tags: ['italiano', 'rápido'], image: 'https://via.placeholder.com/300x200?text=Pasta+al+Pesto', ingredients: ['Pasta', 'Albahaca', 'Ajo', 'Parmesano', 'Aceite de Oliva'], steps: ['Cocinar la pasta según las instrucciones del paquete.', 'Preparar la salsa de pesto.', 'Mezclar la pasta con la salsa de pesto.', 'Servir con parmesano rallado por encima.'] },
  { id: 5, name: 'Curry de Garbanzos', time: '40 min', difficulty: 'Difícil', tags: ['indio', 'vegano'], image: 'https://via.placeholder.com/300x200?text=Curry+de+Garbanzos', ingredients: ['Garbanzos', 'Curry en polvo', 'Leche de coco'], steps: ['Cocinar garbanzos', 'Añadir curry y leche de coco', 'Cocinar a fuego lento'] },
  { id: 6, name: 'Pizza Margarita', time: '30 min', difficulty: 'Media', tags: ['italiano', 'vegetariano'], image: 'https://via.placeholder.com/300x200?text=Pizza+Margarita', ingredients: ['Masa de pizza', 'Tomate', 'Mozzarella'], steps: ['Extender masa', 'Añadir tomate y mozzarella', 'Hornear'] },
  { id: 7, name: 'Hamburguesa Clásica', time: '35 min', difficulty: 'Media', tags: ['americano', 'rápido'], image: 'https://via.placeholder.com/300x200?text=Hamburguesa+Clásica', ingredients: ['Pan de hamburguesa', 'Carne de res', 'Lechuga', 'Tomate'], steps: ['Cocinar carne', 'Montar hamburguesa con ingredientes', 'Servir'] },
  { id: 8, name: 'Paella de Mariscos', time: '60 min', difficulty: 'Difícil', tags: ['español', 'mariscos'], image: 'https://via.placeholder.com/300x200?text=Paella+de+Mariscos', ingredients: ['Arroz', 'Mariscos', 'Azafrán'], steps: ['Cocinar arroz con azafrán', 'Añadir mariscos', 'Cocinar hasta que el arroz esté listo'] },
  { id: 9, name: 'Ramen Japonés', time: '50 min', difficulty: 'Difícil', tags: ['japonés', 'sopa'], image: 'https://via.placeholder.com/300x200?text=Ramen+Japonés', ingredients: ['Fideos ramen', 'Caldo', 'Huevo'], steps: ['Cocinar fideos', 'Preparar caldo', 'Servir con huevo'] },
  { id: 10, name: 'Falafel con Hummus', time: '45 min', difficulty: 'Media', tags: ['mediterráneo', 'vegano'], image: 'https://via.placeholder.com/300x200?text=Falafel+con+Hummus', ingredients: ['Garbanzos', 'Tahini', 'Ajo'], steps: ['Preparar falafel', 'Hacer hummus', 'Servir juntos'] },
];

export default function RecipeRecommendationsPage() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleViewRecipe = (recipe) => {
    console.log(`Viewing recipe: ${recipe.name}`);
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Recomendaciones de Recetas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="p-4">
            <img src={recipe.image} alt={recipe.name} className="w-full h-32 sm:h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{recipe.name}</h2>
            <p>Tiempo: {recipe.time}</p>
            <p>Dificultad: {recipe.difficulty}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {recipe.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{tag}</span>
              ))}
            </div>
            <Button onClick={() => handleViewRecipe(recipe)} className="mt-4">Ver Receta</Button>
          </Card>
        ))}
      </div>

      {selectedRecipe && (
        <Dialog open={!!selectedRecipe} onClose={handleCloseModal}>
          <DialogOverlay className="fixed inset-0 bg-black opacity-30" />
          <motion.div 
            className="fixed inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <DialogContent className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedRecipe.name}</h2>
              <img src={selectedRecipe.image} alt={selectedRecipe.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ingredientes</h3>
              <ul className="list-disc pl-5 mb-4">
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mb-2">Instrucciones</h3>
              <ol className="list-decimal pl-5">
                {selectedRecipe.steps.map((step, index) => (
                  <li key={index} className="mb-2">{step}</li>
                ))}
              </ol>
              <Button onClick={handleCloseModal} className="mt-4">Cerrar</Button>
            </DialogContent>
          </motion.div>
        </Dialog>
      )}
    </div>
  );
}
