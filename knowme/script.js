// Load About
fetch('poem.json')
  .then(res => res.json())
  .then(about => {
    document.getElementById('poem').innerHTML = `
      <h1>${poem.name}</h1>
      <p>${poem.bio}</p>
    `;
  });

// Load Projects
fetch('poem.json')
  .then(res => res.json())
  .then(projects => {
    const projectContainer = document.getElementById('projects');
    projects.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project';
      card.innerHTML = `
        <h2>${p.title}</h2>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank">View</a>
      `;
      projectContainer.appendChild(card);
    });
  });

// Load Skills
fetch('content/skills.json')
  .then(res => res.json())
  .then(skills => {
    const skillsList = document.getElementById('skills');
    skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  });
