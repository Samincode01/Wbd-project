export interface FocusArea {
  id: string;
  title: string;
  icon: string;
  image: string;
  description: string;
  longDescription: string;
  color: string;
}

export const focusAreas: FocusArea[] = [
  {
    id: 'education',
    title: 'Education',
    icon: 'GraduationCap',
    image: 'https://images.pexels.com/photos/37898351/pexels-photo-37898351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Empowering students with knowledge, skills, and access to learning.',
    longDescription: 'We partner with universities and educational institutions to create programs that bridge gaps in access, quality, and opportunity. From STEM workshops to scholarship drives, our education initiatives reach thousands of students across the country.',
    color: '#e11d48',
  },
  {
    id: 'leadership',
    title: 'Leadership & Skills',
    icon: 'Users',
    image: 'https://images.pexels.com/photos/5324985/pexels-photo-5324985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Building the next generation of changemakers and leaders.',
    longDescription: 'Through mentorship programs, bootcamps, and leadership forums, we equip young people with the soft skills, strategic thinking, and confidence to lead teams and drive change in their communities.',
    color: '#e11d48',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    icon: 'Lightbulb',
    image: 'https://images.pexels.com/photos/8438943/pexels-photo-8438943.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Fostering creativity, technology, and breakthrough thinking.',
    longDescription: 'Robotics competitions, hackathons, and innovation challenges form the core of our innovation focus. We create platforms where students can experiment, build, and showcase solutions to real-world problems.',
    color: '#e11d48',
  },
  {
    id: 'economic',
    title: 'Economic Development',
    icon: 'TrendingUp',
    image: 'https://images.pexels.com/photos/7413908/pexels-photo-7413908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Driving entrepreneurship and economic opportunity.',
    longDescription: 'We support startup ecosystems, entrepreneurial training, and career development programs that connect young talent with economic opportunity — building pathways from skills to sustainable livelihoods.',
    color: '#e11d48',
  },
  {
    id: 'climate',
    title: 'Climate & Social Action',
    icon: 'Leaf',
    image: 'https://images.pexels.com/photos/28662952/pexels-photo-28662952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Mobilizing communities for environmental and social good.',
    longDescription: 'From tree-planting drives to community clean-ups and awareness campaigns, we organize initiatives that address climate change and social challenges at the grassroots level.',
    color: '#e11d48',
  },
  {
    id: 'sports',
    title: 'Sports & Esports',
    icon: 'Trophy',
    image: 'https://images.pexels.com/photos/9071736/pexels-photo-9071736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Channeling passion into teamwork, discipline, and excellence.',
    longDescription: 'Tournaments, training camps, and esports leagues give young athletes and gamers platforms to compete, grow, and represent Bangladesh on national and international stages.',
    color: '#e11d48',
  },
  {
    id: 'culture',
    title: 'Culture',
    icon: 'Palette',
    image: 'https://images.pexels.com/photos/36019668/pexels-photo-36019668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Celebrating and preserving the rich heritage of Bangladesh.',
    longDescription: 'Cultural festivals, art exhibitions, and heritage programs that celebrate the diversity, creativity, and traditions of Bangladesh — connecting generations through shared cultural identity.',
    color: '#e11d48',
  },
];

export interface EventItem {
  id: string;
  title: string;
  partner: string;
  focusArea: string;
  description: string;
  outcome: string;
  guests: string;
  date: string;
  featured: boolean;
  image: string;
  location: string;
}

export const events: EventItem[] = [
  {
    id: 'fibonacci-bangladesh',
    title: 'Fibonacci International Olympiad - Bangladesh National Round 2026',
    partner: '4/27, West Bhashantek, Dhaka Cantonment, Dhaka,Bangladesh',
    focusArea: 'innovation',
    description: 'Bangladesh National Round brought together nearly 1,000 students to compete in Mathematics, Science, Robotics, and STEM innovation at UIU. The event featured diverse competitions, including robotics and entrepreneurship, with outstanding participants gaining opportunities for international participation in Rome, Italy.',
    outcome: 'Why Bangladesh contributed to the event’s professional coordination and execution, promoting youth innovation and STEM education.',
    guests: 'Chief Guest: Md. Nurul Haque, MP, State Minister for Expatriates’ Welfare and Overseas Employment.',
    date: '4 September 2026',
    featured: true,
    image: '/IMG_3453.JPG.jpeg',
    location: 'Dhaka, Bangladesh',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Identify',
    description: 'We identify important challenges, opportunities, and areas where young people can create meaningful change. Our focus begins with understanding what Bangladesh needs today and what the next generation will need tomorrow.',
  },
  {
    number: '02',
    title: 'Connect',
    description: 'We connect students, universities, industry leaders, experts, institutions, communities, and partners around shared goals. By bringing the right people together, we create stronger opportunities for collaboration and collective impact.',
  },
  {
    number: '03',
    title: 'Create',
    description: 'We transform ideas into real initiatives — from competitions and educational programs to innovation platforms, campaigns, events, and community projects. Every initiative is designed to encourage participation, learning, and action.',
  },
  {
    number: '04',
    title: 'Impact',
    description: 'Our work does not end with an event or program. We aim to create measurable, sustainable impact by empowering participants, strengthening communities, and building opportunities that can continue to grow over time.',
  },
];

export interface EcosystemStage {
  letter: string;
  title: string;
  description: string;
}

export const ecosystemStages: EcosystemStage[] = [
  {
    letter: 'Y',
    title: 'Youth & Students',
    description: 'The next generation of thinkers, leaders, innovators, athletes, creators, and changemakers at the heart of every initiative.',
  },
  {
    letter: 'E',
    title: 'Educational Institutions',
    description: ' Schools, colleges, universities, and academic communities that provide knowledge, talent, research, and platforms for growth.',
  },
  {
    letter: 'I',
    title: 'Industry & Corporate Partners',
    description: 'Organizations that bring expertise, resources, mentorship, opportunities, and real-world industry connections.',
  },
  {
    letter: 'O',
    title: 'Opportunity',
    description: 'The doors this opens for participants — new skills, networks, and horizons.',
  },
  {
    letter: 'E',
    title: 'Experts & Mentors',
    description: 'Professionals, academics, innovators, and sector leaders who guide young people with knowledge, experience, and perspective.',
  },
   {
    letter: 'C',
    title: 'Communities & Social Organizations',
    description: 'Local communities, NGOs, and social organizations that help turn initiatives into inclusive and meaningful social impact.',
  },
  {
    letter: 'G',
    title: 'Government & Strategic Partners',
    description: 'Public institutions and strategic collaborators who can help successful ideas, programs, and initiatives reach a broader national scale.',
  },
];

export interface Partner {
  name: string;
  type: string;
}

export const partners: Partner[] = [
  { name: 'IUB', type: 'University' },
  { name: 'BUET', type: 'University' },
  { name: 'DU', type: 'University' },
  { name: 'BRAC', type: 'University' },
  { name: 'NSU', type: 'University' },
  { name: 'AIUB', type: 'University' },
  { name: 'EWU', type: 'University' },
  { name: 'UIU', type: 'University' },
  { name: 'BRAC NGO', type: 'NGO' },
  { name: 'JAAGO Foundation', type: 'NGO' },
  { name: 'BYLC', type: 'NGO' },
  { name: 'BIDA', type: 'Organization' },
];







