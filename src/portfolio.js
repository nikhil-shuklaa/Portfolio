const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://nikhil-shuklaa.github.io/Portfolio/',
  title: 'NS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nikhil Shukla',
  role: 'Full-Stack && Cloud Engineer',
  description:
    'I am an IT enthusiast , Full-stack Developer, Cloud Engineer and Entrepreneur from India. I have an enormous passion for programming and I am a huge believer in the power of technology to reach new heights.',
  resume: 'https://drive.google.com/file/d/1W0QXOSyKNVL42_qfDQdKVxndcsa1m0mE/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/nikhil-shuklaa',
    github: 'https://github.com/nikhil-shuklaa',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'QnAi-Ask2PDFs',
    description:
      'The QnAi Chat App is a Python application designed for conversing with multiple PDF documents. Using natural language, you can ask questions about the PDFs, and the app will generate relevant responses based on the document content. Login credentials: ID - "Nikhil", Password - "iamadmin"',
    stack: ['Python', 'Streamlit', 'OpenAI', 'Git-GitHub', 'LLM', 'LangChain'],
    sourceCode: 'https://github.com/nikhil-shuklaa/QnAi-Ask2PDFs',
    livePreview: 'https://qnai-ask2pdf.streamlit.app',
  },
  {
    name: 'LAMBDA',
    description:
      'Realtime Database Face Detection Attendance System-LAMBDA is a real-time attendance system that uses face detection technology to track attendance in a database. The system works by capturing live video of individuals and comparing them to images in a pre-existing encoded database to determine if they are authorized or not. if they are, their attendance will be marked.',
    stack: ['Python', 'OpenCV', 'Firebase', 'Figma'],
    sourceCode: 'https://github.com/nikhil-shuklaa/RealtimeDatabaseFaceDetectionAttendanceSystem-LAMBDA',
    livePreview: 'https://github.com/nikhil-shuklaa/RealtimeDatabaseFaceDetectionAttendanceSystem-LAMBDA',
  },
  {
    name: 'Websites',
    description:
      'I have 3 years of experience as a WordPress developer, specializing in custom theme and plugin development, ensuring optimal performance and responsive design. In previous roles, I have designed and developed custom WordPress themes, created and customized plugins, and performed regular site maintenance, delivering fully functional websites for NGOs, businesses, and companies.',
    stack: ['Wordpress', 'SEO', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    sourceCode: '',
    livePreview: 'https://drive.google.com/file/d/1W0QXOSyKNVL42_qfDQdKVxndcsa1m0mE/view?usp=sharing',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind',
  'JAVA',
  'Python',
  'Git',
  'CI/CD',
  'Google Cloud',
  'AWS',
  'Azure',
  'Firebase',
  'MongoDB',
  'wordpress',
  'SEO',
  'Photoshop',
  'Figma'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nikhilshukla.dev@gmail.com',
}

export { header, about, projects, skills, contact }
