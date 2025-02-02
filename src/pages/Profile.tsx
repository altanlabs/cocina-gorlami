import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Autocomplete } from '@/components/ui/Autocomplete';

const dietaryOptions = [
  'Vegetariano', 'Vegano', 'Sin Gluten', 'Bajo en Carbohidratos',
  'Keto', 'Paleo', 'Mediterráneo', 'Pescatariano',
];

const allergyOptions = [
  'Gluten', 'Lácteos', 'Frutos Secos', 'Mariscos',
  'Huevos', 'Soja', 'Pescado', 'Trigo',
];

const likesOptions = [
  'Tomate', 'Aguacate', 'Pollo', 'Carne',
  'Pasta', 'Arroz', 'Queso', 'Chocolate',
];

const dislikesOptions = [
  'Cebolla', 'Ajo', 'Pimiento', 'Brócoli',
  'Coliflor', 'Espinacas', 'Zanahoria', 'Pepino',
];

export default function ProfilePage() {
  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [likes, setLikes] = useState<string[]>([]);
  const [dislikes, setDislikes] = useState<string[]>([]);

  const handleSave = () => {
    console.log('Profile saved:', { dietaryPreferences, allergies, likes, dislikes });
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Perfil Personalizado</h1>
      <div className="space-y-6">
        <Autocomplete 
          options={dietaryOptions} 
          label="Preferencias Dietéticas" 
          placeholder="Selecciona tus preferencias"
          onChange={setDietaryPreferences}
        />
        <Autocomplete 
          options={allergyOptions} 
          label="Alergias" 
          placeholder="Introduce tus alergias"
          onChange={setAllergies}
        />
        <Autocomplete 
          options={likesOptions} 
          label="Gustos" 
          placeholder="Introduce tus ingredientes favoritos"
          onChange={setLikes}
        />
        <Autocomplete 
          options={dislikesOptions} 
          label="Desagrados" 
          placeholder="Introduce los ingredientes que no te gustan"
          onChange={setDislikes}
        />
        <Button onClick={handleSave} className="mt-4 bg-primary text-white dark:text-black hover:bg-primary-dark">Guardar Perfil</Button>
      </div>
    </motion.div>
  );
}
