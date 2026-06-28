export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  fullName: string;
  category: "sedan" | "suv" | "minivan" | "minibus";
  year: string;
  passengers: number;
  luggage: number;
  pricePerHour: number;
  pricePerDay: number;
  priceHalfDay: number;
  description: string;
  shortDesc: string;
  features: string[];
  image: string;
  gallery: string[];
  color: string;
  popular?: boolean;
  occasions: string[];
  specs: {
    engine?: string;
    power?: string;
    transmission?: string;
    interior?: string;
  };
}

export const fleet: Vehicle[] = [
  {
    id: "mercedes-s-class",
    slug: "mercedes-s-class",
    name: "Mercedes S-Class",
    fullName: "Mercedes-Benz S-Class W222/W223",
    category: "sedan",
    year: "2018–2024",
    passengers: 3,
    luggage: 2,
    pricePerHour: 25000,
    priceHalfDay: 150000,
    pricePerDay: 280000,
    shortDesc: "Икона делового мира. Максимальный комфорт для переговоров и VIP-встреч.",
    description: "Mercedes-Benz S-Class — эталон представительского автомобиля. Роскошный салон с массажными сиденьями, панорамной крышей, аудиосистемой Burmester и идеальной шумоизоляцией создают атмосферу первого класса. Идеален для деловых переговоров, встречи партнёров и VIP-персон.",
    features: [
      "Массажные сиденья с подогревом и вентиляцией",
      "Аудиосистема Burmester 3D",
      "Панорамная крыша",
      "Экраны на задних сиденьях",
      "Беспроводная зарядка",
      "Wi-Fi на борту",
      "Вода и напитки",
      "Шумоизоляция первого класса",
    ],
    image: "/images/fleet/mercedes-s-class/main.jpg",
    gallery: [
      "/images/fleet/mercedes-s-class/1.jpg",
      "/images/fleet/mercedes-s-class/2.jpg",
      "/images/fleet/mercedes-s-class/3.jpg",
    ],
    color: "#1a1a2e",
    popular: true,
    occasions: ["Деловые встречи", "Аэропорт VIP", "Корпоративные события", "Делегации", "Иностранные гости"],
    specs: {
      engine: "3.0L Inline-6 / 4.0L V8",
      power: "435–630 л.с.",
      transmission: "9G-Tronic",
      interior: "Наппа кожа, дерево, алюминий",
    },
  },
  {
    id: "mercedes-maybach",
    slug: "mercedes-maybach",
    name: "Mercedes Maybach",
    fullName: "Mercedes-Benz Maybach S-Class",
    category: "sedan",
    year: "2021–2024",
    passengers: 3,
    luggage: 2,
    pricePerHour: 50000,
    priceHalfDay: 300000,
    pricePerDay: 550000,
    shortDesc: "Ультра-люкс для самых взыскательных. Автомобиль уровня глав государств.",
    description: "Mercedes-Maybach S-Class — вершина автомобильной роскоши. Удлинённый салон с двумя бизнес-креслами, шампанским холодильником, массажем и раздельным климат-контролем. Автомобиль выбирают главы государств, послы и топ-менеджеры.",
    features: [
      "Два персональных бизнес-кресла",
      "Встроенный холодильник для шампанского",
      "Аудиосистема Burmester High-End 4D",
      "Массаж 14 направлений",
      "Беспроводная зарядка x4",
      "Перегородка водитель/пассажир",
      "Звёздное небо на потолке",
      "Дерево красного ореха",
    ],
    image: "/images/fleet/mercedes-maybach/main.jpg",
    gallery: [
      "/images/fleet/mercedes-maybach/1.jpg",
      "/images/fleet/mercedes-maybach/2.jpg",
      "/images/fleet/mercedes-maybach/3.jpg",
    ],
    color: "#0d0d0d",
    popular: true,
    occasions: ["Послы и дипломаты", "Главы делегаций", "VIP-мероприятия", "Свадьбы", "Государственные визиты"],
    specs: {
      engine: "4.0L V8 Biturbo / 6.0L V12",
      power: "550–630 л.с.",
      transmission: "9G-Tronic",
      interior: "Наппа кожа Exclusive, карбон, золото",
    },
  },
  {
    id: "mercedes-v-class",
    slug: "mercedes-v-class",
    name: "Mercedes V-Class",
    fullName: "Mercedes-Benz V-Class 250d/300d",
    category: "minivan",
    year: "2020–2024",
    passengers: 7,
    luggage: 5,
    pricePerHour: 20000,
    priceHalfDay: 120000,
    pricePerDay: 200000,
    shortDesc: "Бизнес-минивэн для групп до 7 человек. Комфорт бизнес-класса в просторном салоне.",
    description: "Mercedes-Benz V-Class — идеальный выбор для групповых VIP-трансферов. Просторный салон с кожаными сиденьями, сдвижные двери, три ряда сидений — максимальный комфорт для команды или семьи. Популярен для корпоративных мероприятий и аэропортовых трансферов.",
    features: [
      "7 пассажирских мест",
      "Кожаные сиденья с подогревом",
      "Три зоны климат-контроля",
      "Раскладные столики",
      "Wi-Fi и USB-зарядки",
      "Большой багажник",
      "Сдвижные двери с электроприводом",
      "Тонировка",
    ],
    image: "/images/fleet/mercedes-v-class/main.jpg",
    gallery: [
      "/images/fleet/mercedes-v-class/1.jpg",
      "/images/fleet/mercedes-v-class/2.jpg",
      "/images/fleet/mercedes-v-class/3.jpg",
    ],
    color: "#1a1a1a",
    popular: true,
    occasions: ["Групповые трансферы", "Корпоративные события", "Аэропорт (группы)", "Туры", "Свадьбы"],
    specs: {
      engine: "2.0L / 3.0L Дизель",
      power: "190–237 л.с.",
      transmission: "9G-Tronic",
      interior: "Кожа, дерево, алюминий",
    },
  },
  {
    id: "mercedes-sprinter",
    slug: "mercedes-sprinter",
    name: "Mercedes Sprinter",
    fullName: "Mercedes-Benz Sprinter VIP",
    category: "minibus",
    year: "2019–2024",
    passengers: 14,
    luggage: 10,
    pricePerHour: 25000,
    priceHalfDay: 150000,
    pricePerDay: 250000,
    shortDesc: "Переговорный минибус для делегаций и корпоративных групп до 14 человек.",
    description: "Mercedes-Benz Sprinter в VIP-исполнении — переговорная комната на колёсах. Оснащён кожаными сиденьями, кондиционером, холодильником, телевизором и столами для совещаний. Идеален для корпоративных делегаций, экскурсий и трансферов крупных групп.",
    features: [
      "14 пассажирских мест",
      "Кожаные сиденья с подогревом",
      "Столики для переговоров",
      "Телевизор и звуковая система",
      "Холодильник с напитками",
      "Wi-Fi на борту",
      "Кондиционер",
      "USB и 220V зарядки",
    ],
    image: "/images/fleet/mercedes-sprinter/main.jpg",
    gallery: [
      "/images/fleet/mercedes-sprinter/1.jpg",
      "/images/fleet/mercedes-sprinter/2.jpg",
      "/images/fleet/mercedes-sprinter/3.jpg",
    ],
    color: "#111111",
    occasions: ["Делегации", "Корпоративные туры", "Большие группы", "Мероприятия", "Конференции"],
    specs: {
      engine: "2.1L Дизель",
      power: "190–211 л.с.",
      transmission: "7G-Tronic",
      interior: "Кожа VIP, дерево, алюминий",
    },
  },
  {
    id: "cadillac-escalade",
    slug: "cadillac-escalade",
    name: "Cadillac Escalade",
    fullName: "Cadillac Escalade ESV",
    category: "suv",
    year: "2021–2024",
    passengers: 6,
    luggage: 4,
    pricePerHour: 35000,
    priceHalfDay: 200000,
    pricePerDay: 350000,
    shortDesc: "Американская мощь и роскошь. Статусный SUV для максимального впечатления.",
    description: "Cadillac Escalade — символ американского могущества. Огромный внедорожник с роскошным салоном, OLED-экранами по всему периметру и пространством, достойным президентского кортежа. Выбор тех, кто хочет произвести максимальное впечатление.",
    features: [
      "38 дюймов OLED-экранов",
      "Задние сиденья с полным откидыванием",
      "Аудиосистема AKG 36 динамиков",
      "Super Cruise - автопилот",
      "Магнитная подвеска",
      "Ночное видение",
      "Панорамный люк",
      "Задняя камера 4K",
    ],
    image: "/images/fleet/cadillac-escalade/main.jpg",
    gallery: [
      "/images/fleet/cadillac-escalade/1.jpg",
      "/images/fleet/cadillac-escalade/2.jpg",
      "/images/fleet/cadillac-escalade/3.jpg",
    ],
    color: "#0a0a0a",
    popular: true,
    occasions: ["VIP-события", "Статусные встречи", "Свадьбы", "Фотосессии", "Кортежи"],
    specs: {
      engine: "6.2L V8 / 3.0L Дизель",
      power: "420–460 л.с.",
      transmission: "10-ступенчатый автомат",
      interior: "Перфорированная кожа, дерево ореха",
    },
  },
  {
    id: "toyota-land-cruiser",
    slug: "toyota-land-cruiser",
    name: "Toyota Land Cruiser",
    fullName: "Toyota Land Cruiser 300",
    category: "suv",
    year: "2021–2024",
    passengers: 5,
    luggage: 3,
    pricePerHour: 20000,
    priceHalfDay: 120000,
    pricePerDay: 200000,
    shortDesc: "Легендарная надёжность и комфорт для любых маршрутов по Казахстану.",
    description: "Toyota Land Cruiser 300 — легенда внедорожников с непревзойдённой репутацией надёжности. Комфортный и мощный, он одинаково уверенно чувствует себя в городе и на бездорожье. Идеален для туров по Казахстану, загородных поездок и корпоративных трансферов.",
    features: [
      "Полный привод 4WD",
      "Кожаные сиденья с подогревом",
      "Двухзонный климат-контроль",
      "JBL аудиосистема",
      "Беспроводная зарядка",
      "Камеры 360°",
      "Адаптивная подвеска",
      "Wi-Fi",
    ],
    image: "/images/fleet/toyota-land-cruiser/main.jpg",
    gallery: [
      "/images/fleet/toyota-land-cruiser/1.jpg",
      "/images/fleet/toyota-land-cruiser/2.jpg",
      "/images/fleet/toyota-land-cruiser/3.jpg",
    ],
    color: "#1a1a1a",
    occasions: ["Туры по Казахстану", "Загородные поездки", "Корпоративные трансферы", "Аэропорт", "Горные маршруты"],
    specs: {
      engine: "3.3L V6 TT Diesel / 3.5L V6 Twin-Turbo",
      power: "227–415 л.с.",
      transmission: "10-ступенчатый автомат",
      interior: "Кожа NULUXE, дерево, алюминий",
    },
  },
  {
    id: "lexus-lx",
    slug: "lexus-lx",
    name: "Lexus LX",
    fullName: "Lexus LX 600 Ultra Luxury",
    category: "suv",
    year: "2022–2024",
    passengers: 4,
    luggage: 3,
    pricePerHour: 40000,
    priceHalfDay: 230000,
    pricePerDay: 400000,
    shortDesc: "Японская роскошь без компромиссов. VIP-кресла с массажем в формате SUV.",
    description: "Lexus LX 600 Ultra Luxury — самый роскошный SUV в мире. В версии Ultra Luxury второй ряд оснащён двумя отдельными VIP-креслами с массажем, подогревом, вентиляцией, шампанским холодильником и экранами. Это лучший способ путешествовать с японским совершенством.",
    features: [
      "VIP-кресла 2-го ряда с массажем",
      "Холодильник и мини-бар",
      "Экраны 11.6\" на заднем ряду",
      "Mark Levinson 25 динамиков",
      "Загрузка программ TechPlay",
      "Шумоизоляция F-QUIET",
      "Полный привод с системой KDSS",
      "Беспроводная зарядка x4",
    ],
    image: "/images/fleet/lexus-lx/main.jpg",
    gallery: [
      "/images/fleet/lexus-lx/1.jpg",
      "/images/fleet/lexus-lx/2.jpg",
      "/images/fleet/lexus-lx/3.jpg",
    ],
    color: "#0f0f1a",
    popular: true,
    occasions: ["Послы", "VIP-клиенты", "Деловые встречи", "Свадьбы", "Аэропорт VIP"],
    specs: {
      engine: "3.5L V6 Twin-Turbo",
      power: "415 л.с.",
      transmission: "10-ступенчатый автомат",
      interior: "Кожа полуанилин, дерево ореха",
    },
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return fleet.find((v) => v.slug === slug);
}

export function getRelatedVehicles(slug: string, count = 3): Vehicle[] {
  const current = getVehicleBySlug(slug);
  if (!current) return fleet.slice(0, count);
  return fleet.filter((v) => v.slug !== slug && v.category === current.category).slice(0, count).length >= count
    ? fleet.filter((v) => v.slug !== slug && v.category === current.category).slice(0, count)
    : fleet.filter((v) => v.slug !== slug).slice(0, count);
}
