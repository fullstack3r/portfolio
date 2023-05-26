const skillsDiv = document.getElementById("skills-container");
const projectsDiv = document.getElementById("projects-container");
console.log(db);

function render() {
  console.log('Redender!!')
  skillsDiv.innerHTML = "";
  db.skills.forEach((skill) => {
    skillsDiv.innerHTML += `<button class="btn-common">${skill.name}</button>`;
  });

  projectsDiv.innerHTML = "";
  db.projects.forEach((project) => {
    projectsDiv.innerHTML += `
      <div class="full-height d-flex-p-b">
        <a class="btona">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <div class="section-project">
          <h3>${project.name}</h3>
          <button class="btn-common">HTML</button>
          <button class="btn-common">CSS</button>
          <button class="btn-common">JAVASCRIPT</button>
        </div>
      </div>
    `; 
  });
}

document.addEventListener('DOMContentLoaded', () => {
  render();
});
