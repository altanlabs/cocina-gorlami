import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function RecipeRecommendationsPage() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch recommended recipes based on user profile
    const fetchRecipes = async () => {
      // Simulate API call
      const recommendedRecipes = [
        { id: 1, name: 'Ensalada de Quinoa', time: '15 min', difficulty: 'Fácil' },
        { id: 2, name: 'Tacos Veganos', time: '30 min', difficulty: 'Media' },
        { id: 3, name: 'Sopa de Tomate', time: '20 min', difficulty: 'Fácil' },
      ];
      setRecipes(recommendedRecipes);
    };

    fetchRecipes();
  }, []);

  const handleViewRecipe = (recipeId) => {
    console.log(`Navigating to recipe with ID: ${recipeId}`);
    navigate(`/recetas/${recipeId}`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Recomendaciones de Recetas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="p-4">
            <h2 className="text-xl font-semibold">{recipe.name}</h2>
            <p>Tiempo: {recipe.time}</p>
            <p>Dificultad: {recipe.difficulty}</p>
            <Button onClick={() => handleViewRecipe(recipe.id)} className="mt-4">Ver Receta</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
