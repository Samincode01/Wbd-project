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
  outcomeLabel: string;
  date: string;
  featured: boolean;
  image: string;
  location: string;
}

export const events: EventItem[] = [
  {
    id: 'fibonacci-bangladesh',
    title: 'Fibonacci Bangladesh — Robotics & STEM Competition',
    partner: 'International University of Bangladesh (IUB)',
    focusArea: 'innovation',
    description: 'A flagship robotics and STEM competition bringing together students from across the country to design, build, and compete. Participants tackled engineering challenges, showcased innovative prototypes, and competed for a chance to represent Bangladesh internationally.',
    outcome: 'A participating student advanced to compete in Italy, and the organizing team is traveling to Italy for the next phase.',
    outcomeLabel: 'Student advanced to compete in Italy',
    date: '2024',
    featured: true,
    image: 'https://images.pexels.com/photos/9242834/pexels-photo-9242834.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
    description: 'Spotting the right opportunity, community, or need — understanding where impact is most needed and where our network can deliver.',
  },
  {
    number: '02',
    title: 'Connect',
    description: 'Bringing together universities, NGOs, and partners — building the coalition that makes ambitious events possible.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Designing and structuring the event or program — from concept to logistics, curriculum, and execution plan.',
  },
  {
    number: '04',
    title: 'Collaborate',
    description: 'Executing together with all stakeholders — ensuring every partner plays their role and every voice is heard.',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Running the event and creating real impact — measuring outcomes, celebrating success, and learning for next time.',
  },
];

export interface EcosystemStage {
  letter: string;
  title: string;
  description: string;
}

export const ecosystemStages: EcosystemStage[] = [
  {
    letter: 'I',
    title: 'Initiative',
    description: 'The idea or program spark — identifying what needs to happen and why it matters.',
  },
  {
    letter: 'P',
    title: 'People',
    description: 'Students, volunteers, and communities engaged — the human energy that powers everything.',
  },
  {
    letter: 'P',
    title: 'Partnership',
    description: 'Universities, NGOs, and organizations that join in — multiplying reach and resources.',
  },
  {
    letter: 'O',
    title: 'Opportunity',
    description: 'The doors this opens for participants — new skills, networks, and horizons.',
  },
  {
    letter: 'E',
    title: 'Expand',
    description: 'Scaling proven initiatives to more institutions and regions — turning local success into national impact.',
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







