import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AutocompleteProps {
  options: string[];
  label: string;
  placeholder: string;
  onChange: (selected: string[]) => void;
}

export function Autocomplete({ options, label, placeholder, onChange }: AutocompleteProps) {
  const [query, setQuery] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(query.toLowerCase())
  );

  const toggleOption = (option: string) => {
    setSelectedOptions(prev => {
      const newSelected = prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option];
      onChange(newSelected);
      return newSelected;
    });
  };

  return (
    <div className="mb-4 relative">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 100)}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 mt-1 w-full max-h-40 overflow-y-auto bg-white dark:bg-gray-800 rounded-md shadow-lg"
          >
            {filteredOptions.map(option => (
              <div
                key={option}
                onMouseDown={() => toggleOption(option)}
                className={`cursor-pointer select-none p-2 ${
                  selectedOptions.includes(option) ? 'bg-primary text-white' : 'text-gray-700 dark:text-gray-300'
                } hover:bg-primary hover:text-white`}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-2 flex flex-wrap gap-2">
        {selectedOptions.map(option => (
          <span key={option} className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full px-3 py-1 text-sm font-semibold">
            {option}
          </span>
        ))}
      </div>
    </div>
  );
}
