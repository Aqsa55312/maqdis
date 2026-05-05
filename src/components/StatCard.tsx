import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  subtitle: string;
  value: string;
  icon: ReactNode;
  bg: string;
}

export default function StatCard({ title, subtitle, value, icon, bg }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-slate-900 mb-1">{value}</h3>
          <p className="text-slate-400 text-xs">{subtitle}</p>
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${bg}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
