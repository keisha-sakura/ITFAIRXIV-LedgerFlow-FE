import Navbar from "@/app/components/Navbar";
import Header from "@/app/Dashboard/components/Header";
import CurrentNetWorth from "@/app/Dashboard/components/CurrentNetWorth";
import AIFinancialScore from "@/app/Dashboard/components/AIFinancialScore";

export default function DashboardPage() { 
    return (
        <div>
            <Navbar />
            <Header />
            <div className="max-w-5xl mx-auto flex gap-5 items-stretch mt-3">
                <div className="flex-1">
                    <CurrentNetWorth />
                </div>
                <div className="flex-1">
                    <AIFinancialScore />
                </div>
            </div>


        </div>
    );
}
