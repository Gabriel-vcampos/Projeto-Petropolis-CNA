// Loop infinito suave duplicando o conteúdo
  const track = document.getElementById("carousel-track");
  const template = document.getElementById("carousel-items");
  for (let i = 0; i < 2; i++) {
    track.appendChild(template.content.cloneNode(true));
  }