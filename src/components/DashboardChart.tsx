"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', userBaru: 80, userAktif: 50 },
  { name: 'Feb', userBaru: 120, userAktif: 80 },
  { name: 'Mar', userBaru: 280, userAktif: 120 },
  { name: 'Apr', userBaru: 150, userAktif: 100 },
  { name: 'Mei', userBaru: 200, userAktif: 130 },
  { name: 'Jun', userBaru: 170, userAktif: 110 },
  { name: 'Jul', userBaru: 130, userAktif: 90 },
  { name: 'Agu', userBaru: 190, userAktif: 140 },
  { name: 'Sep', userBaru: 160, userAktif: 120 },
  { name: 'Okt', userBaru: 140, userAktif: 100 },
  { name: 'Nov', userBaru: 180, userAktif: 130 },
  { name: 'Des', userBaru: 220, userAktif: 160 },
];

export default function DashboardChart() {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
            dx={-10}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
          />
          <Area 
            type="monotone" 
            dataKey="userBaru" 
            name="User Baru"
            stroke="#3b82f6" 
            fillOpacity={1} 
            fill="url(#colorUserBaru)" 
          />
          <Area 
            type="monotone" 
            dataKey="userAktif" 
            name="User Aktif"
            stroke="#8b5cf6" 
            fillOpacity={1} 
            fill="url(#colorUserAktif)" 
          />
          <defs>
            <linearGradient id="colorUserBaru" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorUserAktif" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
