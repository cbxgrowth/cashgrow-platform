
# Guia de Desenvolvimento - CashBack System

## Estrutura de Arquivos

### Organização de Páginas
- **Padrão**: Todas as páginas devem usar `index.tsx` dentro de uma pasta nomeada
- **Exemplo**: `src/pages/Home/index.tsx` ao invés de `src/pages/Home.tsx`
- **Razão**: Facilita a adição de componentes específicos da página

### Organização de Componentes
```
src/components/
├── common/           # Componentes reutilizáveis
├── ui/              # Componentes base do design system
├── layouts/         # Layouts da aplicação
└── [feature]/       # Componentes específicos de funcionalidade
```

### Organização de Features
```
src/features/[feature-name]/
├── components/      # Componentes específicos da feature
├── hooks/          # Hooks específicos da feature
├── services/       # Services específicos da feature
├── types/          # Types específicos da feature
└── index.ts        # Barrel exports
```

## Padrões de Desenvolvimento

### Hooks Customizados
- **Use casos**: Estado complexo, lógica reutilizável, side effects
- **Localização**: `src/hooks/` para hooks globais, `src/features/[feature]/hooks/` para específicos
- **Nomenclatura**: Sempre prefixar com `use`

### Services
- **Responsabilidade**: Lógica de negócio, API calls, transformação de dados
- **Localização**: `src/services/` para globais, `src/features/[feature]/services/` para específicos
- **Estrutura**: Classes com métodos específicos

### Repositories
- **Responsabilidade**: Abstração das operações de dados (Supabase, APIs externas)
- **Localização**: `src/repositories/`
- **Padrão**: Interface + implementação

### Constants
- **Localização**: `src/constants/`
- **Nomenclatura**: UPPER_SNAKE_CASE para constantes
- **Estrutura**: Objetos com `as const` para type safety

## Boas Práticas

### Componentes React
```typescript
// ✅ Bom
const MyComponent: React.FC<Props> = ({ prop1, prop2 }) => {
  const { data, isLoading } = useCustomHook();
  
  if (isLoading) return <LoadingSpinner />;
  
  return <div>{data}</div>;
};

// ❌ Evitar
const MyComponent = (props) => {
  // Lógica complexa diretamente no componente
  const [state, setState] = useState();
  // ... muita lógica
  
  return <div>{/* JSX complexo */}</div>;
};
```

### Error Handling
- **Use**: `AsyncErrorBoundary` para componentes que fazem chamadas async
- **Hook**: `useErrorHandling` para lógica de erro customizada
- **Toast**: Sempre mostrar feedback visual para o usuário

### TypeScript
- **Types**: Sempre definir tipos explícitos
- **Interfaces**: Para objetos complexos
- **Union Types**: Para valores limitados
- **Generics**: Para componentes/hooks reutilizáveis

### Performance
- **Lazy Loading**: Para rotas e componentes pesados
- **Memoization**: `useMemo`, `useCallback` quando necessário
- **Code Splitting**: Por feature quando apropriado

## Estrutura de Testes (Futuro)

```
src/
├── __tests__/           # Testes de integração
├── components/
│   └── __tests__/       # Testes de componentes
├── hooks/
│   └── __tests__/       # Testes de hooks
└── services/
    └── __tests__/       # Testes de services
```

## Padrões de Nomenclatura

### Arquivos
- **Componentes**: PascalCase (`MyComponent.tsx`)
- **Hooks**: camelCase com prefixo use (`useMyHook.ts`)
- **Services**: camelCase com sufixo service (`myFeature.service.ts`)
- **Types**: camelCase com sufixo types (`myFeature.types.ts`)
- **Constants**: camelCase com sufixo constants (`myFeature.constants.ts`)

### Variáveis e Funções
- **Variables**: camelCase
- **Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Types/Interfaces**: PascalCase

## Git e Commits

### Padrões de Commit
```
feat: adicionar nova funcionalidade
fix: corrigir bug
refactor: refatorar código
docs: atualizar documentação
style: mudanças de estilo/formatação
test: adicionar ou modificar testes
chore: tarefas de manutenção
```

## Recursos Importantes

### Bibliotecas Principais
- **React Query**: Para estado server e cache
- **Sonner**: Para notificações/toasts
- **React Hook Form**: Para formulários
- **Zod**: Para validação de schemas
- **Tailwind CSS**: Para estilização
- **Shadcn/ui**: Para componentes base

### Padrões de Estado
- **Local**: `useState` para estado simples
- **Complexo**: Hooks customizados
- **Server**: React Query
- **Global**: Context API quando necessário

Este guia deve ser seguido por todos os desenvolvedores para manter consistência e qualidade no código.
