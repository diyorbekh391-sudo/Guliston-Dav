/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Faculty {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: string;
}

export const FACULTIES: Faculty[] = [
  {
    id: "pedagogika",
    name: "Pedagogika va psixologiya",
    description: "Bo'lajak pedagoglar va psixologlarni tayyorlash markazi.",
    icon: "GraduationCap"
  },
  {
    id: "filologiya",
    name: "Filologiya",
    description: "O'zbek tili va adabiyoti, rus tili va xorijiy tillarni o'rganish.",
    icon: "BookOpen"
  },
  {
    id: "sanat",
    name: "Tasviriy sanʼat va muhandislik grafikasi",
    description: "Ijodiy mahorat va dizayn asoslarini o'rgatuvchi fakultet.",
    icon: "Palette"
  },
  {
    id: "jismoniy",
    name: "Jismoniy madaniyat",
    description: "Sog'lom turmush tarzi va sport mutaxassislarini shakllantirish.",
    icon: "Trophy"
  },
  {
    id: "tabiiy",
    name: "Tabiiy fanlar",
    description: "Biologiya, geografiya va kimyo yo'nalishlari bo'yicha ta'lim.",
    icon: "Microscope"
  },
  {
    id: "sanat-musiqa",
    name: "Sanʼatshunoslik",
    description: "Musiqa va san'at sohasi mutaxassislarini tayyorlash.",
    icon: "Music"
  }
];

export const NEWS: NewsItem[] = [
  {
    id: "1",
    title: "Institutda xalqaro ilmiy konferensiya bo'lib o'tdi",
    date: "2024-05-15",
    excerpt: "Zamonaviy ta'lim metodikalariga bag'ishlangan xalqaro muloqot.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Talabalar xalqaro olimpiadada g'olib bo'lishdi",
    date: "2024-05-10",
    excerpt: "Bizning talabalarimiz matematika fanidan yuqori natijalarni qayd etishdi.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Yangi kutubxona binosi foydalanishga topshirildi",
    date: "2024-05-05",
    excerpt: "Zamonaviy texnologiyalar bilan jihozlangan yangi bilim maskani.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop"
  }
];

export const STATS: StatItem[] = [
  { label: "Talabalar", value: "8,500+", icon: "Users" },
  { label: "Professor-o'qituvchilar", value: "450+", icon: "UserCheck" },
  { label: "Fakultetlar", value: "6", icon: "School" },
  { label: "Kafedralar", value: "24", icon: "BookMarked" }
];
