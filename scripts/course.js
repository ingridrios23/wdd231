const courses = [
  { id: 1, name: 'WDD131 - Web Fundamentals', completed: true, credits: 3 },
  { id: 2, name: 'WDD231 - Advanced Web Development', completed: false, credits: 4 },
  { id: 3, name: 'CSE110 - Introduction to Programming', completed: true, credits: 3 },
];

function displayCourses(filter = 'all') {
  const container = document.getElementById('course-cards');
  container.innerHTML = '';

  let filteredCourses = courses;
  if (filter === 'WDD') {
    filteredCourses = courses.filter(c => c.name.startsWith('WDD'));
  } else if (filter === 'CSE') {
    filteredCourses = courses.filter(c => c.name.startsWith('CSE'));
  }

  filteredCourses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card' + (course.completed ? ' completed' : '');
    card.innerHTML = `
      <h3>${course.name}</h3>
      <p>Credits: ${course.credits}</p>
      <p>Status: ${course.completed ? 'Completed' : 'Pending'}</p>
    `;
    container.appendChild(card);
  });

  const totalCredits = filteredCourses.reduce((sum, c) => sum + c.credits, 0);
  const creditInfo = document.createElement('p');
  creditInfo.textContent = `Total Credits: ${totalCredits}`;
  container.appendChild(creditInfo);
}

displayCourses();
