import React, { useState } from 'react';
import SpreadsheetHeader from './SpreadsheetHeader';
import SpreadsheetToolbar from './SpreadsheetToolbar';
import SpreadsheetTable from './SpreadsheetTable';
import { SpreadsheetData } from '../types/spreadsheet';

const SpreadsheetApp: React.FC = () => {
  const [data] = useState<SpreadsheetData[]>([
    {
      id: 1,
      jobRequest: "Launch social media campaign for product launch",
      submitted: "01-01-2024",
      status: "Completed",
      subscriber: "John Doe",
      job: "www.figma.com",
      assigned: "Sophie Chandler",
      priority: "Medium",
      dueDate: "20-01-2024",
      estValue: "4,500.00"
    },
    {
      id: 2,
      jobRequest: "Update press kit for company rebrand",
      submitted: "01-01-2024",
      status: "In Progress",
      subscriber: "Jane Smith",
      job: "www.figma.com",
      assigned: "Tanya Pancholy",
      priority: "High",
      dueDate: "20-01-2024",
      estValue: "1,500.00"
    },
    {
      id: 3,
      jobRequest: "Finalize press testing feedback for app",
      submitted: "01-01-2024",
      status: "In Progress",
      subscriber: "Mike Johnson",
      job: "www.figma.com",
      assigned: "Darren Lee",
      priority: "Medium",
      dueDate: "20-01-2024",
      estValue: "4,750.00"
    },
    {
      id: 4,
      jobRequest: "Design new brochure for the website",
      submitted: "01-01-2024",
      status: "Completed",
      subscriber: "Emily Brown",
      job: "www.figma.com",
      assigned: "Ben Wright",
      priority: "High",
      dueDate: "15-01-2024",
      estValue: "6,900.00"
    },
    {
      id: 5,
      jobRequest: "Process financial report for Q4",
      submitted: "20-01-2024",
      status: "Rejected",
      subscriber: "Jessica Brown",
      job: "www.figma.com",
      assigned: "Kevin Smith",
      priority: "Low",
      dueDate: "20-01-2024",
      estValue: "2,900.00"
    }
  ]);

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      <SpreadsheetHeader />
      <SpreadsheetToolbar />
      <SpreadsheetTable data={data} />
    </div>
  );
};

export default SpreadsheetApp;