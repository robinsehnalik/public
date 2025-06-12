
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  dataAiHint: string;
};

export type FundEvent = {
  id: string;
  title: string;
  description: string;
  goal: number;
  current: number;
  imageUrl: string;
  dataAiHint: string;
};

export type NewsArticle = {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  imageUrl: string;
  link: string;
  dataAiHint: string;
};

export type ImpactStory = {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Olena Petrova',
    role: 'Founder & Director',
    bio: 'Olena is dedicated to providing humanitarian aid and support to Ukraine. With a background in international relations, she leads our efforts on the ground.',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'woman portrait',
  },
  {
    id: '2',
    name: 'Andriy Kovalenko',
    role: 'Logistics Coordinator',
    bio: 'Andriy ensures that aid reaches those who need it most, managing complex supply chains and coordinating with local partners.',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'man portrait',
  },
  {
    id: '3',
    name: 'Sofia Ivanova',
    role: 'Community Outreach',
    bio: 'Sofia connects with communities across Ukraine, understanding their needs and sharing stories of resilience and hope.',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'woman smiling',
  },
];

export const fundEvents: FundEvent[] = [
  {
    id: '1',
    title: 'Winter Kits for Families',
    description: 'Providing warm clothing, blankets, and heating supplies to families displaced by conflict during the harsh winter months.',
    goal: 50000,
    current: 35000,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'winter supplies',
  },
  {
    id: '2',
    title: 'Medical Supplies for Hospitals',
    description: 'Equipping hospitals in frontline regions with essential medical supplies, medicines, and equipment.',
    goal: 75000,
    current: 60000,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'medical supplies',
  },
  {
    id: '3',
    title: 'Educational Support for Children',
    description: 'Helping children continue their education by providing learning materials, temporary classrooms, and psychosocial support.',
    goal: 30000,
    current: 10000,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'children studying',
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'International Aid Convoy Reaches Eastern Ukraine',
    summary: 'A significant convoy of humanitarian aid, including food and medical supplies, has successfully reached towns in Eastern Ukraine.',
    source: 'Ukrainian Governmental Portal',
    date: '2024-07-15',
    imageUrl: 'https://placehold.co/600x400.png',
    link: '#',
    dataAiHint: 'aid convoy',
  },
  {
    id: '2',
    title: 'Reconstruction Efforts Begin in Liberated Areas',
    summary: 'Efforts to rebuild critical infrastructure are underway in recently liberated territories, focusing on restoring power and water.',
    source: 'Ministry of Infrastructure',
    date: '2024-07-12',
    imageUrl: 'https://placehold.co/600x400.png',
    link: '#',
    dataAiHint: 'reconstruction site',
  },
  {
    id: '3',
    title: 'Support for Internally Displaced Persons Ramps Up',
    summary: 'New centers and programs are being established to provide shelter, food, and psychological support for internally displaced persons.',
    source: 'State Emergency Service',
    date: '2024-07-10',
    imageUrl: 'https://placehold.co/600x400.png',
    link: '#',
    dataAiHint: 'refugee camp',
  },
];

export const impactStories: ImpactStory[] = [
  {
    id: '1',
    title: 'A New Start in Lviv',
    location: 'Lviv Oblast',
    description: 'Thanks to your donations, we helped the Horbenko family, displaced from Kharkiv, find temporary housing and essentials in Lviv. They are now slowly rebuilding their lives.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'family smiling',
  },
  {
    id: '2',
    title: 'Warmth in Winter',
    location: 'Chernihiv Oblast',
    description: 'Our winterization kits provided critical warmth to over 500 families in remote villages near Chernihiv, helping them survive freezing temperatures.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'winter village',
  },
  {
    id: '3',
    title: 'Keeping Hope Alive for Children',
    location: 'Mykolaiv Oblast',
    description: 'We established a temporary learning center for children in Mykolaiv, providing a safe space for education and play amidst ongoing challenges.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'children playing',
  },
];
