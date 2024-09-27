import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: number
}

export function StatCard({ title, value, change }: StatCardProps) {
  const isPositive = change >= 0
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-500 truncate">{title}</div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">{value}</div>
          </div>
        </div>
      </div>
      <div className={`bg-${isPositive ? 'green' : 'red'}-100 px-5 py-3`}>
        <div className="text-sm flex items-center">
          {isPositive ? (
            <ArrowUpIcon className="h-5 w-5 text-green-500 mr-1" />
          ) : (
            <ArrowDownIcon className="h-5 w-5 text-red-500 mr-1" />
          )}
          <span className={`text-${isPositive ? 'green' : 'red'}-600 font-semibold`}>
            {Math.abs(change)}%
          </span>
          <span className="text-gray-500 ml-1">from last month</span>
        </div>
      </div>
    </div>
  )
}