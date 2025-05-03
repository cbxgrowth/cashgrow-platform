
import React from 'react';

const MissionHeader: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Missões & Desafios</h1>
        <p className="text-muted-foreground mt-1">
          Complete missões para ganhar cashback extra e desbloquear benefícios
        </p>
      </div>
    </div>
  );
};

export default MissionHeader;
