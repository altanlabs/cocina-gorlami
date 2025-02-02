import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const recipes = [
  { id: 1, name: 'Ensalada de Quinoa', ingredients: ['Quinoa', 'Tomates', 'Pepino'], steps: ['Cocinar la quinoa', 'Cortar los vegetales', 'Mezclar todo'] },
  { id: 2, name: 'Tacos Veganos', ingredients: ['Tortillas', 'Frijoles', 'Aguacate'], steps: ['Calentar tortillas', 'Preparar relleno', 'Servir con aguacate'] },
  { id: 3, name: 'Sopa de Tomate', ingredients: ['Tomates', 'Cebolla', 'Ajo'], steps: ['Sofreír cebolla y ajo', 'Añadir tomates', 'Cocinar a fuego lento'] },
];

export default function RecipeDetailPage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div>Receta no encontrada</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">{recipe.name}</h1>
      <h2 className="text-xl font-semibold mb-4">Ingredientes</h2>
      <ul className="list-disc pl-5 mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-4">Instrucciones</h2>
      <ol className="list-decimal pl-5">
        {recipe.steps.map((step, index) => (
          <li key={index} className="mb-2">{step}</li>
        ))}
      </ol>
      <Button className="mt-6">Añadir a Lista de Compras</Button>
    </div>
  );
}
