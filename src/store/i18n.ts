import { reactive } from 'vue';

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Journey",
      project: "Works",
      contact: "Contact",
    },
    hero: {
      role: "Web Developer & UI/UX Designer",
      description: "Shaping digital experiences through elegant code and immersive design. Undergraduate Information Systems student at Gunadarma University, specializing in modern web architecture.",
      explore: "Explore My Work",
    },
    about: {
      title: "About",
      subtitle: "My Journey",
      p1: "I'm a Web Developer and UI/UX Designer who believes that great digital experiences live at the intersection of aesthetics, motion, and usability. Currently a fourth-semester student at Gunadarma University, I focus on crafting modern web interfaces that feel intuitive, immersive, and meaningful.",
      p2: "My work blends clean design with solid engineering, using technologies like React.js, TypeScript, Next.js, and Tailwind CSS to build responsive, scalable applications. Beyond visuals, I care deeply about how users think, interact, and feel — because good design isn't just what people see, it's what they experience.",
      p3: "I'm driven by curiosity, attention to detail, and the ambition to create digital products that leave a lasting impression.",
      resume: "Download Resume",
      tech: {
        react: "React/Next",
        astro: "Astro/Vue",
        tailwind: "Tailwind",
        gsap: "GSAP"
      }
    },
    headings: {
      skills: "Technical Arsenal",
      experience: "My Journey",
      project: "Selected Works",
      contact: "Get In Touch",
      projectSubtitle: "A showcase of passion"
    },
    projects: {
      viewMore: "View Project",
      allProjects: "All Works",
      catDevelopment: "Development",
      catDesign: "UI/UX Design",
      catData: "Data Science",
      catML: "Machine Learning",
      catGame: "Game Development"
    },
    experience: {
      title: "Experience & Education",
      expHeading: "Experience",
      expRole: "Staff Member - PTI Bureau, BEM FIKTI",
      expDate: "November 2024 - Present",
      expDesc: "Serving as a staff member in the IT Development Bureau (PTI) of BEM FIKTI, working on the website to communicate programs and facilitate student engagement.",
      eduHeading: "Education",
      edu1School: "Universitas Gunadarma",
      edu1Date: "2023 - 2027",
      edu1Desc: "Pursuing a Bachelor's in Information Systems, focusing on web development and IT systems.",
      edu2School: "SMA Negeri 8 Kota Bekasi",
      edu2Date: "2020 - 2023",
      edu2Desc: "Developed leadership and communication skills through school activities.",
      edu3School: "SMP Negeri 12 Kota Bekasi",
      edu3Date: "2017 - 2020",
      edu3Desc: "Enhanced academic skills, teamwork, and discipline through extracurricular activities.",
      edu4School: "SDN Pekayon Jaya VI",
      edu4Date: "2011 - 2017",
      edu4Desc: "Built foundational knowledge and passion for learning in South Bekasi."
    },
    footer: {
      name: "Rafly Romeo",
      description: "Crafting elegant digital experiences with passion, precision, and a love for modern web architecture.",
      socialMedia: "Social Media",
      contactInfo: "Contact Info",
      rights: "All rights reserved."
    }
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      experience: "Perjalanan",
      project: "Karya",
      contact: "Kontak",
    },
    hero: {
      role: "Web Developer & UI/UX Designer",
      description: "Membentuk visual digital melalui kode elegan dan desain imersif. Mahasiswa Sistem Informasi di Universitas Gunadarma, memiliki spesialisasi dalam arsitektur web modern.",
      explore: "Jelajahi Karya Saya",
    },
    about: {
      title: "Tentang",
      subtitle: "Perjalanan Saya",
      p1: "Saya adalah seorang Web Developer dan UI/UX Designer yang percaya bahwa pengalaman digital yang luar biasa hidup di perpaduan antara estetika, animasi, dan kegunaan. Saat ini sebagai mahasiswa semester empat di Universitas Gunadarma, saya fokus merancang antarmuka web modern yang terasa intuitif, imersif, dan bermakna.",
      p2: "Karya saya memadukan desain yang bersih dengan rekayasa perangkat lunak yang solid, menggunakan teknologi seperti React.js, TypeScript, Next.js, dan Tailwind CSS untuk membangun aplikasi yang responsif dan dapat diskalakan. Di luar visual, saya sangat peduli tentang bagaimana pengguna berpikir, berinteraksi, dan merasa — karena desain yang baik bukan hanya apa yang dilihat, melainkan apa yang dirasakan.",
      p3: "Saya didorong oleh rasa ingin tahu, ketelitian, dan ambisi untuk menciptakan produk digital yang meninggalkan kesan mendalam.",
      resume: "Unduh CV",
      tech: {
        react: "React/Next",
        astro: "Astro/Vue",
        tailwind: "Tailwind",
        gsap: "GSAP"
      }
    },
    headings: {
      skills: "Gudang Teknis",
      experience: "Perjalanan Saya",
      project: "Karya Pilihan",
      contact: "Hubungi Saya",
      projectSubtitle: "Pameran sebuah hasrat"
    },
    projects: {
      viewMore: "Lihat Proyek",
      allProjects: "Semua Karya",
      catDevelopment: "Pengembangan Web",
      catDesign: "Desain UI/UX",
      catData: "Sains Data",
      catML: "Pembelajaran Mesin",
      catGame: "Pembuatan Gim"
    },
    experience: {
      title: "Pengalaman & Pendidikan",
      expHeading: "Pengalaman",
      expRole: "Anggota Staf - Biro PTI, BEM FIKTI",
      expDate: "November 2024 - Sekarang",
      expDesc: "Menjabat sebagai anggota staf di Biro Pengembangan IT (PTI) BEM FIKTI, mengerjakan situs web untuk mengkomunikasikan program dan memfasilitasi keterlibatan mahasiswa.",
      eduHeading: "Pendidikan",
      edu1School: "Universitas Gunadarma",
      edu1Date: "2023 - 2027",
      edu1Desc: "Mengejar gelar Sarjana Sistem Informasi, dengan fokus pada pengembangan web dan sistem IT.",
      edu2School: "SMA Negeri 8 Kota Bekasi",
      edu2Date: "2020 - 2023",
      edu2Desc: "Mengembangkan keterampilan kepemimpinan dan komunikasi melalui kegiatan sekolah.",
      edu3School: "SMP Negeri 12 Kota Bekasi",
      edu3Date: "2017 - 2020",
      edu3Desc: "Meningkatkan keterampilan akademik, kerja tim, dan kedisiplinan melalui kegiatan ekstrakurikuler.",
      edu4School: "SDN Pekayon Jaya VI",
      edu4Date: "2011 - 2017",
      edu4Desc: "Membangun pengetahuan dasar dan minat belajar di Bekasi Selatan."
    },
    footer: {
      name: "Rafly Romeo",
      description: "Menciptakan pengalaman digital yang elegan dengan semangat, ketepatan, dan kecintaan pada arsitektur web modern.",
      socialMedia: "Media Sosial",
      contactInfo: "Info Kontak",
      rights: "Hak cipta dilindungi undang-undang."
    }
  }
};

type Lang = 'en' | 'id';

export const i18nStore = reactive({
  currentLang: 'en' as Lang,
  toggleLang() {
    this.currentLang = this.currentLang === 'en' ? 'id' : 'en';
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.currentLang;
    }
  },
  setLang(lang: Lang) {
    this.currentLang = lang;
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.currentLang;
    }
  },
  t(path: string) {
    const keys = path.split('.');
    let current: any = translations[this.currentLang];
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  }
});
