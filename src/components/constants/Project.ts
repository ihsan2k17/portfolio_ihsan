import profile from '../../assets/images/project/banner-abstract.png'
import profile1 from '../../assets/images/project/bg-abstract-portrait.png'
import profile2 from '../../assets/images/project/testing.png'
import kuponExpressjs1 from '../../assets/images/project/backend/kupon/repository.png'
import kuponExpressjs2 from '../../assets/images/project/backend/kupon/service.png'
import kuponExpressjs3 from '../../assets/images/project/backend/kupon/controller_dan_interface.png'
import kuponExpressjs4 from '../../assets/images/project/backend/kupon/db_config.png'
import kuponDotnet1 from '../../assets/images/project/backend/kupon/dotnet_controller_dan_router.png'
import kuponDotnet2 from '../../assets/images/project/backend/kupon/dotnet_datacontext.png'
import kuponDotnet3 from '../../assets/images/project/backend/kupon/dotnet_dependency_injection.png'
import kuponDotnet4 from '../../assets/images/project/backend/kupon/dotnet_models.png'
import kuponDotnet5 from '../../assets/images/project/backend/kupon/dotnet_repository.png'
import kuponDotnet6 from '../../assets/images/project/backend/kupon/dotnet_service.png'
import kuponapps0 from '../../assets/images/project/frontend/kupon/onboarding.jpeg'
import kuponapps1 from '../../assets/images/project/frontend/kupon/login.jpeg'
import kuponapps2 from '../../assets/images/project/frontend/kupon/register.jpeg'
import kuponapps3 from '../../assets/images/project/frontend/kupon/homescreen.jpeg'
import kuponapps4 from '../../assets/images/project/frontend/kupon/form1.jpeg'
import kuponapps5 from '../../assets/images/project/frontend/kupon/form2.jpeg'



export interface IDataProject {
    id: number;
    name: string;
    description: string;
    framework: string;
    type: string;
    orm: string;
    database: string;
    features: string[];
    Gambar: string[];
    link: string;
}
export const DataProject = [
    {
        id: 1,
        name: "Kupon Web Api",
        description: "Proyek backend menggunakan Node.js Typescript, ADO .NET CORE c#",
        framework: "Express",
        orm: "Sequelize",
        database: "SQL Server 2019",
        features: [
            "JWT Authentication",
            "Operasi CRUD pada beberapa entitas",
            "Laporan Jumlah Kupon",
            "Autentikasi Pengguna",
            "Validasi Pendaftaran User Baru",
            "Hak Akses Khusus Admin Kupon",
            "Jika ingin Register Pengguna baru harus memberikan string dengan panjang minimal 3 karakter.",
            "Additional Features - Fungsi delete Customer, Agen, dan Sales hanya dapat dilakukan Oleh SuperAdmin"
        ],
        Gambar: []
    },
    {
        id: 2,
        name: "Laundry Application",
        description: "Proyek backend menggunakan Node.js dan TypeScript dengan SQL Server 2019.",
        framework: "Express",
        orm: "Sequelize",
        database: "SQL Server 2019",
        features: [
            "JWT Authentication",
            "Operasi CRUD pada beberapa entitas",
            "Laporan Jumlah Kupon",
            "Autentikasi Pengguna",
            "Validasi Pendaftaran User Baru",
            "Hak Akses Khusus Admin Kupon",
            "Jika ingin Register Pengguna baru harus memberikan string dengan panjang minimal 3 karakter.",
        ],
        Gambar: []
    },
];

export const EndDumy = [
    {
        id: 1,
        name: "Kupon Web Api",
        description: "Proyek backend menggunakan Teknologi Node.js Typescript, ADO .NET CORE c#",
        framework: "Express Js dan .NET CORE",
        type:"Back End",
        orm: "Sequelize",
        database: "SQL Server 2019",
        features: [
            "JWT Authentication",
            "Operasi CRUD pada beberapa entitas",
            "Laporan Jumlah Kupon",
            "Autentikasi Pengguna",
            "Validasi Pendaftaran User Baru",
            "Hak Akses Khusus Admin Kupon",
            "Jika ingin Register Pengguna baru harus memberikan string dengan panjang minimal 3 karakter.",
            "Additional Features - Fungsi delete Customer, Agen, dan Sales hanya dapat dilakukan Oleh SuperAdmin"
        ],
        Gambar: [kuponExpressjs1, kuponExpressjs2, kuponExpressjs3, kuponExpressjs4, kuponDotnet1, kuponDotnet2, kuponDotnet3, kuponDotnet4, kuponDotnet5, kuponDotnet6],
        link:'/Project/:ProjectId'
    },
    {
        id: 2,
        name: "Laundry Web Api",
        description: "Proyek backend menggunakan Teknologi Node.js Typescript, dan masih dalam tahap pengembangan",
        framework: "express js",
        type:"Back End",
        orm: "Sequelize",
        database: "SQL Server 2019",
        features: [
            "JWT Authentication",
            "Operasi CRUD pada beberapa entitas",
            "Penambahan Fitur Grouping berdasarkan jam waktu dan promo, untuk dijadikan paket",
            "Validasi untuk pendaftaran User Baru yang hanya bisa dilakukan oleh Admin",
            "duration proses Pencucian Hingga Selesai",
            "Fitur Pembayaran yang menggunakan QRIS sebagai alat transaksi utama",
            "Maps Untuk menuju tempat Laundry (On Progress)",
        ],
        Gambar: [profile, profile1, profile2],
        link:'/Project/:ProjectId'
    },
    {
        id: 3,
        name: "Kupon Android Apps",
        description: "Proyek Front End dengan menggunakan teknologi React Native dan Typescript",
        framework: "React Native",
        type: "Front End",
        orm: "None",
        database: "None",
        features: [
            "Operasi CRUD pada beberapa entitas",
            "Laporan Jumlah Kupon",
            "Autentikasi Pengguna",
            "Validasi Pendaftaran User Baru",
            "Hak Akses Khusus Admin Kupon",
            "Jika ingin Register Pengguna baru harus memberikan string dengan panjang minimal 3 karakter.",
            "Additional Features - Fungsi delete Customer, Agen, dan Sales hanya dapat dilakukan Oleh SuperAdmin",
            "Stopwatch untuk melihat Kinerja user dalam menginput Data Kupon",
            "fitur asyncstorage untuk agar saat apps close tidak perlu login ulang"
        ],
        Gambar: [kuponapps0, kuponapps1, kuponapps2, kuponapps3, kuponapps4, kuponapps5],
        link:'/Project/:ProjectId'
    },
];