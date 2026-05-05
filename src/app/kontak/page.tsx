import { Mail, Phone, MapPin } from "lucide-react";

export default function KontakPage() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "zurisky@gmail.com" },
    { icon: Phone, label: "WhatsApp", value: "+62 838-7846-9095" },
    { icon: MapPin, label: "Lokasi", value: "Bandung, Jawa Barat" }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Hubungi Kami
          </h1>
          <p className="text-xl text-slate-600">
            Ada pertanyaan? Kami siap membantu! Jangan ragu untuk menghubungi tim kami melalui form di bawah ini.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form Section */}
            <div className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      id="nama" 
                      placeholder="Masukkan nama lengkap" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Masukkan email" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subjek" className="block text-sm font-medium text-slate-700 mb-2">Subjek</label>
                  <input 
                    type="text" 
                    id="subjek" 
                    placeholder="Subjek pesan" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="pesan" className="block text-sm font-medium text-slate-700 mb-2">Pesan</label>
                  <textarea 
                    id="pesan" 
                    rows={5} 
                    placeholder="Tulis pesanmu di sini..." 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors outline-none resize-none"
                  ></textarea>
                </div>
                <button 
                  type="button" 
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">Informasi Kontak</h3>
              
              <div className="space-y-8 relative z-10">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                        <p className="text-lg font-medium">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-16 relative z-10">
                <p className="text-slate-400 mb-4">Sosial Media</p>
                <div className="flex gap-4">
                  {/* Social media bubbles */}
                  {['IG', 'IN', 'TW'].map((social, idx) => (
                    <div key={idx} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm cursor-pointer hover:bg-blue-600 transition-colors">
                      {social}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
