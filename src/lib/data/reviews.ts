export interface Review {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
  date: string;
  service: string;
  avatar?: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Алишер Н.",
    role: "Генеральный директор",
    company: "Kazakhstan Logistics Group",
    text: "Пользуемся услугами Bek Auto уже 3 года для встречи наших иностранных партнёров. Всегда пунктуально, профессионально, водители вежливы и хорошо знают город. Mercedes S-Class произвёл отличное впечатление на наших гостей из Германии. Рекомендую!",
    rating: 5,
    date: "2024-11-15",
    service: "Бизнес-трансфер",
  },
  {
    id: "2",
    name: "Sarah K.",
    role: "Country Director",
    company: "UNDP Kazakhstan",
    text: "Excellent service for our delegation visits. Professional drivers with good English, clean luxury vehicles. We use Bek Auto for all our VIP airport transfers. Very reliable and discreet. Highly recommended for diplomatic and official events.",
    rating: 5,
    date: "2024-10-20",
    service: "VIP-трансфер",
  },
  {
    id: "3",
    name: "Динара С.",
    role: "Организатор свадеб",
    company: "Wedding Studio Almaty",
    text: "Сотрудничаю с Bek Auto для всех моих свадеб уже 4 года. Майбах для молодожёнов всегда восхищает гостей. Водитель Азат — настоящий профессионал, помог невесте с платьем, организовал всё идеально. Единственная компания которой я доверяю.",
    rating: 5,
    date: "2024-09-08",
    service: "Свадебное авто",
  },
  {
    id: "4",
    name: "Максим Р.",
    role: "Вице-президент",
    company: "Kaspi Bank",
    text: "Арендуем Mercedes V-Class для наших ежеквартальных корпоративных встреч. Всегда чистый автомобиль, водитель в форме, корректные документы для бухгалтерии. Bek Auto — надёжный партнёр для корпоративного транспорта.",
    rating: 5,
    date: "2024-12-03",
    service: "Корпоративный трансфер",
  },
  {
    id: "5",
    name: "Takeshi M.",
    role: "Managing Director",
    company: "Sumitomo Corporation KZ",
    text: "We have been using Bek Auto for 2 years for all our executive transfers in Almaty. The Lexus LX is comfortable and prestigious. Drivers are punctual, know the city well, and maintain strict confidentiality. Outstanding service.",
    rating: 5,
    date: "2024-11-28",
    service: "VIP-трансфер",
  },
  {
    id: "6",
    name: "Гульнара А.",
    role: "Event Manager",
    company: "ProEvent Kazakhstan",
    text: "Организовывала конференцию на 200 человек, Bek Auto предоставили флот из 8 автомобилей. Координатор был на связи 24/7, ни одного сбоя за 3 дня мероприятия. Профессиональный подход, все спикеры были довольны. Обязательно буду работать ещё!",
    rating: 5,
    date: "2024-08-15",
    service: "Транспорт для мероприятий",
  },
  {
    id: "7",
    name: "Арман К.",
    role: "Частный клиент",
    text: "Заказывал Cadillac Escalade для поездки на деловую встречу. Машина идеальная — чистая, огромная, производит впечатление. Водитель ждал 40 минут пока я заканчивал переговоры — без лишних слов. Именно такой сервис и нужен деловому человеку.",
    rating: 5,
    date: "2024-10-05",
    service: "Почасовая аренда",
  },
  {
    id: "8",
    name: "Elena V.",
    role: "Travel Manager",
    company: "InterContinental Almaty",
    text: "We partner with Bek Auto for all our hotel guests requiring airport transfers and city tours. Consistent quality, professional drivers, and they always have vehicles available. Our guests regularly compliment the service. Perfect partner for a 5-star hotel.",
    rating: 5,
    date: "2024-09-20",
    service: "Трансфер из аэропорта",
  },
];
