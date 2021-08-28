Array.from(document.getElementsByTagName("button")).forEach((e) => {
  e.addEventListener("click", projectToggle);
});

function projectToggle(e) {
  let project = e.target;
  let projectElement = document.getElementsByClassName(project.id)[0];
  let toggleElement = document.getElementById(project.id);
  if (
    projectElement.classList.contains("show") ||
    toggleElement.classList.contains("active")
  ) {
    off(project);
    return;
  }

  off(project);
  if (projectElement !== undefined) {
    projectElement.classList.add("show");
    toggleElement.classList.add("active");
  }
}

function off(project) {
  Array.from(document.getElementsByClassName("p")).forEach((e) => {
    e.classList.remove("show");
  });
  Array.from(document.getElementsByTagName("button")).forEach((e) => {
    e.classList.remove("active");
  });
}
