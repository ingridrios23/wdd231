const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce students to programming...',
    technology: ['Python'],
    completed: true 
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web...',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'CSE 111 students become more organized...',
    technology: ['Python'],
    completed: false
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce the notion of classes and objects...',
    technology: ['C#'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course builds on prior experience...',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 231,
    completed: false,
  }
];

const courseList = document.getElementById('course-list');
const totalCredits = document.getElementById('creditTotal');

function displayCourses(filteredCourses) {
  courseList.innerHTML = '';

  filteredCourses.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    if (course.completed) card.classList.add('completed');

    card.innerHTML = `
  <h3 class="course-code">${course.subject} ${course.number}</h3>
  <p><strong>Status:</strong> ${course.completed ? '✅' : 'in process'}</p>
`;


    courseList.appendChild(card);
  });

  const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  totalCredits.textContent = `Total Credits: ${total}`;
}


document.getElementById('all').addEventListener('click', () => {
  displayCourses(courses);
});

document.getElementById('wdd').addEventListener('click', () => {
  const filtered = courses.filter(course => course.subject === 'WDD');
  displayCourses(filtered);
});

document.getElementById('cse').addEventListener('click', () => {
  const filtered = courses.filter(course => course.subject === 'CSE');
  displayCourses(filtered);
});


displayCourses(courses);
