'use client'
import { useState, useEffect } from "react";

import BudgetingList from "./components/BudgetingList";
import AddNewBudget from "./components/AddNewBudget";
import NavBar from "../components/Navbar"
import budgetData from "./BudgetData"; 

export default function Budgeting() {
    const [budgets, setBudgets] = useState(budgetData); 
    const [isAddOpen, setIsAddOpen] = useState(false);

    const handleAddBudget = ({ category, budget }) => {
        setBudgets(prev => [
            ...prev,
            { category, budget: Number(budget), spent: 0 }
        ]);
        setIsAddOpen(false);
    };

    return(
        <>
            <NavBar />

            <div className="p-8">
                <p className="font-syne text-[#3E076C] text-xl font-bold mb-5">Budgeting</p>
                <BudgetingList budgetData={budgets} />
            </div>
            <button 
                className="fixed bottom-8 right-8 h-16 w-16 text-4xl bg-[#3E076C] rounded-full text-white shadow-lg hover:bg-[#5A0A9E] transition-all duration-200 hover:scale-110 z-50"
                onClick={() => setIsAddOpen(true)}
            >
                +
            </button>

            <AddNewBudget isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} onAdd={handleAddBudget} />
        </>
    );
}