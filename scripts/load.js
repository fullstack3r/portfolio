const backendUrl = "http://127.0.0.1:5500";

var projectIndex = 0;
function getCurrentProjects() {
  return db.projects.slice(projectIndex, projectIndex + 3);
}

function nextProject() {
  projectIndex++;
  if (projectIndex > db.projects.length - 3) {
    projectIndex = 0;
  }
  render();
}

async function load() {
  const url = `${backendUrl}/assets/db.json`;

  try {
    const response = await fetch(url);
    const midb = await response.json();
    db = midb;
  } catch (e) {
    console.log("ERROR!");
  }

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  load();
  render();
  setInterval(nextProject, 2000);
});
