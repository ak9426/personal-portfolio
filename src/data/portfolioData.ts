export interface EducationItem {
  id: string;
  degree: string;
  shortName: string;
  institution: string;
  board: string;
  passingYear: string;
  group: string;
  gpa: number;
  maxGpa: number;
  highlights: string[];
  certificateId: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  course: string;
  completionDate: string;
  duration?: string;
  grade?: string;
  description: string;
  skillsAcquired: string[];
  previewImage: string;
  certificateId: string;
}

export interface IeltsScore {
  module: string;
  score: number;
  maxScore: number;
  description: string;
}

export interface SkillItem {
  name: string;
  category: 'technical' | 'personal';
  description: string;
}

export interface CertificateDoc {
  id: string;
  title: string;
  category: 'Academic' | 'Professional Training' | 'Language Proficiency';
  issuer: string;
  year: string;
  dateOrSession: string;
  status: string;
  image: string;
  summary: string;
  credentials: { label: string; value: string }[];
  privacyNotice: string;
}

export const portfolioData = {
  personalInfo: {
    fullName: 'Md. Jamiur Rahman Khan Akash',
    preferredName: 'Akash',
    title: 'Science Graduate · Web Design & Mobile Phone Engineering',
    tagline: 'Learning. Building. Growing.',
    location: 'Gazipur, Bangladesh',
    email: 'khanakash9426@gmail.com',
    phone: '+8801333311079',
    heroGreeting: "Hello, I'm Akash.",
    heroBio:
      'An enthusiastic lifelong learner with a background in science, web design, and mobile phone hardware and software technology.',
    aboutBio:
      "I'm Md. Jamiur Rahman Khan Akash, based in Gazipur, Bangladesh. I have an academic background in science and have developed additional skills through training in web design and mobile phone engineering. I believe in continuous learning, practical problem-solving, and developing skills that create real-world value.",
    profileImage: '/assets/aistudio/IMG_20260904_134736_68f0b3a9.jpg',
  },

  education: [
    {
      id: 'hsc-2016',
      degree: 'Higher Secondary Certificate (HSC)',
      shortName: 'HSC',
      institution: 'Dhaka Megacity College',
      board: 'Dhaka Education Board',
      passingYear: '2016',
      group: 'Science',
      gpa: 3.75,
      maxGpa: 5.0,
      highlights: [
        'Curriculum focused on Physics, Chemistry, Mathematics, and Biology',
        'Scientific inquiry and analytical methodologies',
        'Laboratory experimentation and quantitative problem-solving',
      ],
      certificateId: 'cert-hsc',
    },
    {
      id: 'ssc-2014',
      degree: 'Secondary School Certificate (SSC)',
      shortName: 'SSC',
      institution: 'Gawair Adarsha High School',
      board: 'Dhaka Education Board',
      passingYear: '2014',
      group: 'Science',
      gpa: 4.75,
      maxGpa: 5.0,
      highlights: [
        'Comprehensive secondary foundation in General Science & Advanced Mathematics',
        'Excellent academic achievement (GPA 4.75 / 5.00)',
        'Active engagement in foundational computer literacy and physical sciences',
      ],
      certificateId: 'cert-ssc',
    },
  ] as EducationItem[],

  certifications: [
    {
      id: 'cert-mpe',
      title: 'Mobile Phone Engineering (Hardware & Software)',
      institution: 'Modern Technical Training Institute',
      course: 'Mobile Phone Engineering (Hardware & Software)',
      completionDate: 'March 15, 2025',
      duration: '6 Months',
      grade: 'Grade A (Excellent)',
      description:
        'Intensive 6-month hands-on technical curriculum mastering mobile device hardware troubleshooting, PCB diagnostics, micro-soldering concepts, component replacement, and software flashing/firmware recovery.',
      skillsAcquired: [
        'Hardware Diagnostics & Multimeter Testing',
        'SMD & Component Level Repair',
        'Mobile OS & Firmware Flashing',
        'System Troubleshooting & Recovery',
      ],
      previewImage: '/assets/aistudio/Mobile_Phone_Engineering__Hardware___Software_3a844212.png',
      certificateId: 'cert-mpe-full',
    },
    {
      id: 'cert-web',
      title: 'Web Design',
      institution: '10 Minute School',
      course: 'Web Design',
      completionDate: 'February 27, 2022',
      description:
        'Structured professional course focused on modern web design fundamentals, semantic HTML structure, responsive layouts with CSS, UI/UX aesthetics, and cross-browser interface development.',
      skillsAcquired: [
        'Semantic HTML & Modern CSS Layouts',
        'Responsive Mobile-First Design',
        'Typography & Color Harmony',
        'Interface Structure & Usability',
      ],
      previewImage: '/assets/aistudio/Complete-Guide-to-Web-Development-and-Design_355f498b.jpg',
      certificateId: 'cert-web-full',
    },
  ] as CertificationItem[],

  ielts: {
    testName: 'IELTS General Training',
    testDate: 'September 20, 2022',
    overallBand: 6.5,
    cefrLevel: 'B2 (Independent User)',
    description:
      'Demonstrated professional competency across all four English language skills under the globally accredited IELTS General Training framework, attaining an overall Band 6.5 (CEFR B2 Independent User level) with high proficiency in Listening (7.5).',
    scores: [
      {
        module: 'Listening',
        score: 7.5,
        maxScore: 9.0,
        description: 'Understands complex spoken discourse, academic lectures, and natural conversational dialogue with high accuracy.',
      },
      {
        module: 'Reading',
        score: 5.5,
        maxScore: 9.0,
        description: 'Understands main ideas, factual notices, general correspondence, and structured descriptive texts.',
      },
      {
        module: 'Writing',
        score: 6.5,
        maxScore: 9.0,
        description: 'Produces organized, coherent formal letters, reports, and clear structured essays with appropriate vocabulary.',
      },
      {
        module: 'Speaking',
        score: 6.5,
        maxScore: 9.0,
        description: 'Communicates smoothly, expressing viewpoints clearly with spontaneous fluency and good grammatical control.',
      },
    ] as IeltsScore[],
    certificateId: 'cert-ielts',
  },

  skills: [
    {
      name: 'Web Design',
      category: 'technical',
      description: 'Responsive layouts, clean modern UI aesthetics, semantic structure, and responsive mobile-first presentation.',
    },
    {
      name: 'Mobile Phone Hardware & Software',
      category: 'technical',
      description: 'Component diagnostics, hardware inspection, multimeter testing, and component repair alongside firmware flashing, OS recovery, and bootloop troubleshooting.',
    },
    {
      name: 'Problem Solving',
      category: 'personal',
      description: 'Methodical scientific mindset applied to diagnosing device failures, fixing layout bugs, and solving technical challenges.',
    },
    {
      name: 'Communication',
      category: 'personal',
      description: 'Clear, polite articulation of technical issues and user needs; verified IELTS Band 6.5 professional English proficiency.',
    },
  ] as SkillItem[],

  certificatesGallery: [
    {
      id: 'cert-mpe-full',
      title: 'Mobile Phone Engineering (Hardware & Software)',
      category: 'Professional Training',
      issuer: 'Modern Technical Training Institute',
      year: '2025',
      dateOrSession: 'Completed: March 15, 2025 · 6 Months Duration',
      status: 'Verified · Grade: A (Excellent)',
      image: '/src/assets/images/cert_mobile_engineering_preview_1794231319476.jpg',
      summary:
        'Awarded upon successful completion of the 6-month specialized vocational training in mobile device electronics, circuit tracing, hardware diagnostics, and firmware flashing.',
      credentials: [
        { label: 'Institution', value: 'Modern Technical Training Institute' },
        { label: 'Course', value: 'Mobile Phone Engineering (Hardware & Software)' },
        { label: 'Duration', value: '6 Months' },
        { label: 'Date of Completion', value: 'March 15, 2025' },
        { label: 'Grade Awarded', value: 'A (Excellent)' },
      ],
      privacyNotice: 'Identification numbers and registration serials are masked for privacy compliance.',
    },
    {
      id: 'cert-web-full',
      title: 'Web Design Course Certificate',
      category: 'Professional Training',
      issuer: '10 Minute School',
      year: '2022',
      dateOrSession: 'Completed: February 27, 2022',
      status: 'Verified Certificate of Completion',
      image: '/src/assets/images/cert_web_design_preview_1794231316518.jpg',
      summary:
        'Official certificate verifying course mastery in Web Design principles, HTML/CSS structure, responsive interface layouts, and web usability standards.',
      credentials: [
        { label: 'Platform / School', value: '10 Minute School' },
        { label: 'Curriculum', value: 'Web Design' },
        { label: 'Completion Date', value: 'February 27, 2022' },
        { label: 'Credential Format', value: 'Digital Verified Certificate' },
      ],
      privacyNotice: 'Course token and candidate serial code are intentionally hidden.',
    },
    {
      id: 'cert-ielts',
      title: 'IELTS General Training Test Report Form',
      category: 'Language Proficiency',
      issuer: 'IELTS Test Partners (British Council / IDP / Cambridge)',
      year: '2022',
      dateOrSession: 'Test Date: September 20, 2022',
      status: 'Overall Band: 6.5 · CEFR B2',
      image: '/src/assets/images/cert_academic_board_preview_1794231318911.jpg',
      summary:
        'Official IELTS General Training score report demonstrating overall English competence (Listening: 7.5, Speaking: 6.5, Writing: 6.5, Reading: 5.5).',
      credentials: [
        { label: 'Test Scheme', value: 'IELTS General Training' },
        { label: 'Test Date', value: 'September 20, 2022' },
        { label: 'Overall Band Score', value: '6.5' },
        { label: 'CEFR Level', value: 'B2 (Independent User)' },
        { label: 'Listening Band', value: '7.5' },
        { label: 'Reading Band', value: '5.5' },
        { label: 'Writing Band', value: '6.5' },
        { label: 'Speaking Band', value: '6.5' },
      ],
      privacyNotice:
        'Candidate Number, TRF Number, and document photograph are strictly excluded to safeguard personal privacy.',
    },
    {
      id: 'cert-hsc',
      title: 'Higher Secondary Certificate (HSC)',
      category: 'Academic',
      issuer: 'Board of Intermediate and Secondary Education, Dhaka',
      year: '2016',
      dateOrSession: 'Exam Year: 2016 · Science Group',
      status: 'GPA: 3.75 / 5.00',
      image: '/src/assets/images/cert_academic_board_preview_1794231318911.jpg',
      summary:
        'Academic diploma awarded by Dhaka Education Board following completion of 2-year higher secondary education in Science at Dhaka Megacity College.',
      credentials: [
        { label: 'Institution', value: 'Dhaka Megacity College' },
        { label: 'Education Board', value: 'Dhaka Education Board' },
        { label: 'Discipline', value: 'Science' },
        { label: 'Passing Year', value: '2016' },
        { label: 'Result', value: 'GPA 3.75 out of 5.00' },
      ],
      privacyNotice: 'Roll number and Board Registration number are masked to ensure identity security.',
    },
    {
      id: 'cert-ssc',
      title: 'Secondary School Certificate (SSC)',
      category: 'Academic',
      issuer: 'Board of Intermediate and Secondary Education, Dhaka',
      year: '2014',
      dateOrSession: 'Exam Year: 2014 · Science Group',
      status: 'GPA: 4.75 / 5.00 (High Distinction)',
      image: '/src/assets/images/cert_academic_board_preview_1794231318911.jpg',
      summary:
        'Academic diploma awarded by Dhaka Education Board following completion of secondary schooling in Science at Gawair Adarsha High School.',
      credentials: [
        { label: 'Institution', value: 'Gawair Adarsha High School' },
        { label: 'Education Board', value: 'Dhaka Education Board' },
        { label: 'Discipline', value: 'Science' },
        { label: 'Passing Year', value: '2014' },
        { label: 'Result', value: 'GPA 4.75 out of 5.00' },
      ],
      privacyNotice: 'Roll number and Board Registration number are protected.',
    },
  ] as CertificateDoc[],
};
