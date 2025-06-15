
import React from 'react';
import { Brain } from "lucide-react";

export const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-8">
      <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-500">
        A IA está analisando seus dados. Novas sugestões aparecerão em breve.
      </p>
    </div>
  );
};
