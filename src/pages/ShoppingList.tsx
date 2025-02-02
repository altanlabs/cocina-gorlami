import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ShoppingListPage() {
  const [items, setItems] = useState(['Tomates', 'Aguacates', 'Lechuga']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Lista de Compras</h1>
      <div className="space-y-4">
        <div className="flex items-center">
          <Input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Añadir nuevo ingrediente"
            className="mr-2"
          />
          <Button onClick={addItem}>Añadir</Button>
        </div>
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
