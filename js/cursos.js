document.getElementById("filtroArea").addEventListener("change", function () {
  const areaSelecionada = this.value;
  const cursos = document.querySelectorAll(".curso");

  cursos.forEach(curso => {
    if (areaSelecionada === "todos" || curso.classList.contains(areaSelecionada)) {
      curso.style.display = "block";
    } else {
      curso.style.display = "none";
    }
  });
});

