
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { CreditCard } from 'lucide-react';
import { toast } from "sonner";

// Import components
import MissionHeader from './components/MissionHeader';
import StatusCards from './components/StatusCards';
import ActiveMissions from './components/ActiveMissions';
import CompletedMissions from './components/CompletedMissions';
import AvailableMissions from './components/AvailableMissions';

const ClientMissions: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <MissionHeader />
      <StatusCards />
      <ActiveMissions />
      <CompletedMissions />
      <AvailableMissions />
    </div>
  );
};

export default ClientMissions;
