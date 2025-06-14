
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from 'sonner';

interface SearchBarProps {
  isMobile: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ isMobile }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Buscando por: ${searchQuery}`);
      setMobileSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleMobileSearch = () => {
    setMobileSearchOpen(true);
  };

  if (isMobile) {
    return (
      <Dialog open={mobileSearchOpen} onOpenChange={setMobileSearchOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="flex-shrink-0" onClick={handleMobileSearch}>
            <Search className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[95vw] max-w-md">
          <DialogHeader>
            <DialogTitle>Buscar</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Digite sua busca..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full">
              Buscar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 max-w-sm min-w-0 flex-1">
      <div className="relative flex-1 min-w-0">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Buscar..." 
          className="pl-10 h-9 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </form>
  );
};
