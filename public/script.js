Array.from(document.getElementsByTagName("button")).forEach((e) => {
  e.addEventListener("click", projectToggle);
});

function projectToggle(e) {
  let project = e.target;
  off(project);
  document.getElementById("info-heading").classList.add("show");
  let projectElement = document.getElementsByClassName(project.id)[0];
  if (projectElement !== undefined) {
    projectElement.classList.add("show");
    document.getElementById(project.id).classList.add("active");
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
