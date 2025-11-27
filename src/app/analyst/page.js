'use client'

import { useState, useEffect } from 'react';

import AIFinancialScore from './components/AIFinancialScore';
import DaysToZero from './components/DaystoZero';
import FinancialBuffer from './components/FinancialBuffer';
import MonthlySpendingShifts from './components/MonthlySpendingShifts';
import MonthlyCashFlow from '../transaction/components/MonthlyCashFlow';
import NavBar from '../components/Navbar';
import transactionsData from '../transaction/transactionsData'; 

export default function AnalystPage() {
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    const getCurrentMonth = () => {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const now = new Date();
      return monthNames[now.getMonth()];
    };

    setCurrentMonth(getCurrentMonth());

    const interval = setInterval(() => {
      const newMonth = getCurrentMonth();
      if (newMonth !== currentMonth) {
        setCurrentMonth(newMonth);
      }
    }, 60000); 

    return () => clearInterval(interval);
  }, [currentMonth]);

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
        <NavBar />
        <main className="p-6">
            <h2 className="font-syne text-xl font-bold text-[#3E076C] mb-6">Financial Insight & Forecasts</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <MonthlyCashFlow 
                  transactions={transactionsData}
                  selectedMonth={currentMonth}
                />
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <AIFinancialScore score={78} change={-1} />
                <MonthlySpendingShifts />
                <FinancialBuffer score={52} />
                <DaysToZero score={15} />
              </div>
            </div>
        </main>
    </div>
  );
}