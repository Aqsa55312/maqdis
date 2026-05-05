import { Users, FolderOpen, TrendingUp } from "lucide-react";
import StatCard from "@/components/StatCard";
import DashboardChart from "@/components/DashboardChart";

export default function DashboardPage() {
  const stats = [
    { title: "Total User", subtitle: "Keseluruhan", value: "50.050", icon: <Users className="w-6 h-6" />, bg: "bg-blue-500" },
    { title: "Total Proyek", subtitle: "Selesai", value: "128", icon: <FolderOpen className="w-6 h-6" />, bg: "bg-violet-500" },
    { title: "Total Pendapatan", subtitle: "Tahun 2026", value: "Rp 17.144.000", icon: <TrendingUp className="w-6 h-6" />, bg: "bg-green-500" }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topbar equivalent */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
            <p className="text-slate-500 text-sm">Selamat datang kembali, pantau aktivitas terkinimu.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-slate-900">Zurisky Aqsa</p>
              <p className="text-xs text-slate-500">Admin</p>
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
              Z
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Chart & Side Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Statistik User Dalam Satu Tahun</h2>
            <DashboardChart />
          </div>

          {/* Side Panels */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-slate-500 font-medium text-sm mb-4">User 7 Hari Terakhir</h3>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-bold text-slate-900">127</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span className="text-sm text-slate-600">User Baru</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-slate-500 font-medium text-sm mb-4">User Sedang Aktif</h3>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-bold text-slate-900">12</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm text-slate-600">User Aktif saat ini</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-6 text-white shadow-lg mt-auto">
              <h3 className="font-bold text-lg mb-2">Upgrade to Pro</h3>
              <p className="text-sm text-blue-100 mb-4">Dapatkan akses ke fitur analitik lanjutan dan report kustom.</p>
              <button className="w-full py-2 bg-white text-blue-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors">
                Upgrade Sekarang
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
