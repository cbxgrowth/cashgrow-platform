
import React from 'react';
import ReportsHeader from './components/ReportsHeader';
import SummaryCards from './components/SummaryCards';
import ChartsSections from './components/ChartsSections';
import CustomReportForm from './components/CustomReportForm';

const CompanyReports: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <ReportsHeader />
      <SummaryCards />
      <ChartsSections />
      <CustomReportForm />
    </div>
  );
};

export default CompanyReports;
