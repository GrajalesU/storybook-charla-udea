import { DashboardLayout } from "../components/DashboardLayout";
import { StatCard } from "../components/StatCard";
import { DataTable } from "../components/DataTable";

const stats = [
  { title: "Total Subscribers", value: "71,897", change: 12 },
  { title: "Avg. Open Rate", value: "58.16%", change: 2.5 },
  { title: "Avg. Click Rate", value: "24.57%", change: -0.4 },
];

const users = [
  {
    id: 1,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    role: "User",
  },
  {
    id: 3,
    name: "Esther Howard",
    email: "esther.howard@example.com",
    role: "User",
  },
];

export default function Home() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Users</h3>
      <DataTable data={users} />
    </DashboardLayout>
  );
}
