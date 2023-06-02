const skillsDiv = document.getElementById("skills-container");
const gallery = document.getElementById("gallery");

function render() {
  skillsDiv.innerHTML = "";
  db.skills.forEach((skill) => {
    skillsDiv.innerHTML += `<button class="btn-common">${skill.name}</button>`;
  });

  const projects = getCurrentProjects();
  const firstProject = projects[0];
  if (!firstProject) {
    return;
  }

  gallery.innerHTML = `
      <div class="img-one d-flex-p-b">
          <a class="btona">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <div class="section-project">
            <h3>${firstProject.name}</h3>
            <button class="btn-common">HTML</button>
            <button class="btn-common">CSS</button>
            <button class="btn-common">JAVASCRIPT</button>
          </div>
      </div>
      <div class="half-width" id="projects-container"></div>
  `;

  const projectsDiv = document.getElementById("projects-container");
  const secondZone = projects.slice(1, 3);
  secondZone.forEach((project) => {
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

document.addEventListener("DOMContentLoaded", () => {
  var typed = new Typed("#dev-text", {
    strings: ["Developer.", "Creator.", "Designer."],
    typeSpeed: 50,
    loop: true
  });
});
