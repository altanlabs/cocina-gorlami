import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function CommunityPage() {
  const [posts, setPosts] = useState([
    { id: 1, user: 'Juan', content: '¡Me encantó la receta de tacos veganos!' },
    { id: 2, user: 'Ana', content: '¿Alguien tiene una buena receta de sopa de tomate?' },
  ]);
  const [newPost, setNewPost] = useState('');

  const addPost = () => {
    if (newPost.trim() !== '') {
      const newPostObject = { id: posts.length + 1, user: 'Usuario', content: newPost };
      setPosts([newPostObject, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Comunidad</h1>
      <div className="space-y-4">
        <div>
          <Textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Comparte tus pensamientos..."
            className="mb-2"
          />
          <Button onClick={addPost}>Publicar</Button>
        </div>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded-md">
              <p className="font-semibold">{post.user}</p>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
