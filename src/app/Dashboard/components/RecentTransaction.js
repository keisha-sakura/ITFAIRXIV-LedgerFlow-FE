import Link from "next/link";

export default function DashboardRecentTransaction({ transactions }) {
  const recentTransactions = transactions.slice(0, 3);

  return (
    <div className="border-[#3E076C] border-2 px-6 py-5 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <p className="font-syne text-[#3E076C] text-xl font-bold">Recent Transactions</p>
        <Link 
          href="/transaction"
          className="text-[#0077CC] font-semibold font-poppins hover:text-[#FFBF47] transition"
        >
          View All
        </Link>
      </div>

      <div className="overflow-x-auto font-syne text-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-t border-gray-200">
              <th className="text-left py-2 px-2 text-xs text-gray-500 font-medium">Status</th>
              <th className="text-left py-2 px-2 text-xs text-gray-500 font-medium">Description</th>
              <th className="text-left py-2 px-2 text-xs text-gray-500 font-medium">Date</th>
              <th className="text-left py-2 px-2 text-xs text-gray-500 font-medium">Category</th>
              <th className="text-right py-2 px-2 text-xs text-gray-500 font-medium">Amount</th>
              <th className="text-left py-2 px-2 text-xs text-gray-500 font-medium">Source</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((transaction, index) => (
              <tr key={index} className="border-b border-gray-100 last:border-b-0">
                <td className="py-3 px-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                    transaction.status === 'Confirmed' 
                      ? 'bg-[#2E8B57] text-white' 
                      : 'bg-[#FFBF47] text-[#241838]'
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="py-3 px-2 text-sm text-gray-800">{transaction.description}</td>
                <td className="py-3 px-2 text-sm text-gray-600">{transaction.date}</td>
                <td className="py-3 px-2 text-sm text-gray-800">{transaction.category}</td>
                <td className="py-3 px-2 text-sm text-right font-semibold text-gray-800">
                  {transaction.amount.toLocaleString('id-ID')}
                </td>
                <td className="py-3 px-2 text-sm text-gray-600">{transaction.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}