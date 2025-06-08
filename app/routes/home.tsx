import { useEffect, useState } from 'react';
import MainLayout from '~/layout/MainLayout';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type BarDataItem = {
  day: string;
  value: number;
};

type PieDataItem = {
  name: string;
  value: number;
};

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

export default function Dashboard() {
  const [barData, setBarData] = useState<BarDataItem[]>([]);
  const [pieData, setPieData] = useState<PieDataItem[]>([]);

  useEffect(() => {
    // Simulate API fetch for bar chart
    setTimeout(() => {
      setBarData([
        { day: '17', value: 240 },
        { day: '18', value: 220 },
        { day: '19', value: 200 },
        { day: '20', value: 260 },
        { day: '21', value: 210 },
        { day: '22', value: 230 },
        { day: '23', value: 250 },
        { day: '24', value: 225 },
        { day: '25', value: 240 },
      ]);
    }, 300);

    // Simulate API fetch for pie chart
    setTimeout(() => {
      setPieData([
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
      ]);
    }, 300);
  }, []);

  return (
    <MainLayout>
      <div className="p-6 bg-gray-900 text-white min-h-screen">
        {/* Top boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-800 rounded-xl shadow-sm"></div>
          ))}
        </div>

        {/* Weekly Revenue */}
        <div className="bg-gray-800 rounded-xl p-4 shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-4">Weekly Revenue</h2>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={barData}>
              <XAxis dataKey="day" stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: '#2d3748', border: 'none' }} />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Lower section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pie Chart */}
          <div className="bg-gray-800 rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-md font-semibold">Your Pie Chart</h3>
              <span className="text-sm text-gray-400">Monthly</span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={60} fill="#8884d8" label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Daily Traffic */}
          <div className="bg-gray-800 rounded-xl p-4 shadow-sm">
            <h3 className="text-md font-semibold mb-2">Daily Traffic</h3>
            <p className="text-2xl font-bold">
              2.579 <span className="text-sm font-medium text-gray-400">Visitors</span>
            </p>
            <p className="text-sm text-green-400 font-semibold">+2.64%</p>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={barData.slice(0, 6)}>
                <XAxis dataKey="day" stroke="#ccc" />
                <Tooltip contentStyle={{ backgroundColor: '#2d3748', border: 'none' }} />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
