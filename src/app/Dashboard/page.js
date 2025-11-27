'use client'

import { useState } from "react";

import Navbar from "@/app/components/Navbar";
import Header from "./components/Header";
import CurrentNetWorth from "../transaction/components/CurrentNetWorth";
import AIFinancialScore from "../analyst/components/AIFinancialScore";
import DashboardRecentTransaction from "./components/RecentTransaction";
import MonthlyBudgetFlow from "./components/MonthlyBudgetFlow";
import transactionsData from "../transaction/transactionsData"; 
import budgetData from "../budgeting/BudgetData"; 

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState({
    userName: "Kiwi",
    netWorth: 15000000,
    netWorthChange: 1000000,
    netWorthChangePercent: 7.14,
    aiScore: 78,
    aiScoreChange: -1
  });

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <Navbar />
      
      <Header userName={dashboardData.userName} />
      
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <CurrentNetWorth 
            netWorth={dashboardData.netWorth}
            change={dashboardData.netWorthChangePercent}
            changeAmount={dashboardData.netWorthChange}
          />
          <AIFinancialScore 
            score={dashboardData.aiScore}
            change={dashboardData.aiScoreChange}
          />
        </div>

        <div className="mb-8">
          <DashboardRecentTransaction transactions={transactionsData} />
        </div>

        <div className="mb-8">
          <MonthlyBudgetFlow budgetData={budgetData} />
        </div>
      </div>
    </div>
  );
}