import ipp from '../assets/images/profile/inpp.png'
import cps from '../assets/images/profile/cps.png'
import giga from '../assets/images/profile/GIGA-SENA2-150x150.jpg'

export const Experience = [
    {
        id: 1, company: "Indo Prima Perkasa", title: "Staff IT", masaKerja: `3 Tahun 5 Bulan`, masukKerja: '2021-11-01', status:"Karyawan Tetap", jobDesk: [
            "Melakukan maintenance, troubleshooting, dan backup pada server",
            "Mengelola dan memelihara website Naiba.co.id berbasis CMS Joomla",
            "Mengembangkan aplikasi Android/iOS menggunakan .NET Core 5 Web API, Node.js Express (TypeScript), dan React Native.",
            "Mengembangkan serta memelihara aplikasi ERP internal menggunakan VB6.",
            "Merancang jaringan VPN tunneling (PPTP & L2TP) serta menangani berbagai masalah jaringan lokal.",
            "Melakukan analisis data dan integrasi laporan ke dalam format PDF menggunakan Crystal Reports"
        ], images: ipp
    },
    {
        id: 2, company: "Cipta Purnama Samudera", title: "Seo Specialist", masaKerja: `5 Bulan`, masukKerja: '2020-04-01', status: "Magang", jobDesk: [
            "Mengoptimalkan performa website melalui teknik-teknik SEO terbaik",
            "Menganalisis dan melaporkan tren pencarian dan kinerja website secara reguler",
            "Melakukan riset kata kunci untuk meningkatkan visibilitas website",
            "implementasi SEO on-page",
            "Memantau dan mengevaluasi performa backlink serta melakukan strategi pembangunan tautan",
            "Mengembangkan dan melaksanakan strategi konten yang dioptimalkan untuk mesin pencari",
            "Menganalisis data analitik untuk menyusun laporan tentang kinerja kampanye SEO"
        ], images: cps
    },
    {
        id:3, company: "Giga Sena Group", title: "IT Dvelopment", masaKerja:`Hingga Saat Ini`, masukKerja: '2025-05-19', status: "Karyawan Kontrak", jobDesk: [
            "Pengembangan & modifikasi Web Forms (ASP.NET) sesuai standar internal ",
            "Penambahan fitur: Export Excel, tampilan filter/view, integrasi Crystal Report",
            "Pembuatan Stored Procedure & Index untuk efisiensi akses data", "Membuat Web api untuk kemudahan dalam integrasi data",
            "Pembuatan web api dengan dotnet 8, untuk aplikasi HR, dan juga Anggota baru dari koperasi",
            "Membuat atau memperbarui manual book sesuai dengan proyek yang telah diselesaikan"
        ], images: giga
    }
]

