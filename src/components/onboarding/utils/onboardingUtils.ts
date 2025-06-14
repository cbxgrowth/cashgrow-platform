
export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'setup': return 'bg-blue-500';
    case 'first_action': return 'bg-green-500';
    case 'exploration': return 'bg-purple-500';
    case 'achievement': return 'bg-orange-500';
    default: return 'bg-gray-500';
  }
};
