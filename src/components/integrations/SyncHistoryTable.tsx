
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Clock, Eye } from "lucide-react";

interface SyncRecord {
  id: string;
  integrationName: string;
  timestamp: string;
  status: 'success' | 'error' | 'running';
  recordsProcessed: number;
  duration: string;
  errorMessage?: string;
}

interface SyncHistoryTableProps {
  records: SyncRecord[];
  onViewDetails: (id: string) => void;
}

const SyncHistoryTable: React.FC<SyncHistoryTableProps> = ({ records, onViewDetails }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return (
          <Badge className="bg-green-100 text-green-800 border-green-200">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Sucesso
          </Badge>
        );
      case 'error':
        return (
          <Badge className="bg-red-100 text-red-800 border-red-200">
            <AlertCircle className="h-3 w-3 mr-1" />
            Erro
          </Badge>
        );
      case 'running':
        return (
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
            <Clock className="h-3 w-3 mr-1 animate-pulse" />
            Executando
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Integração</TableHead>
            <TableHead>Data/Hora</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Registros</TableHead>
            <TableHead>Duração</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.id}>
              <TableCell className="font-medium">{record.integrationName}</TableCell>
              <TableCell>{record.timestamp}</TableCell>
              <TableCell>{getStatusBadge(record.status)}</TableCell>
              <TableCell>{record.recordsProcessed.toLocaleString()}</TableCell>
              <TableCell>{record.duration}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onViewDetails(record.id)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SyncHistoryTable;
