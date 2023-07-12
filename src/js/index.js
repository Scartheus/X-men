document.addEventListener('DOMContentLoaded', function() {
    const personagens = document.querySelectorAll('.personagem');
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const nomePersonagem = document.getElementById('nome-personagem');
    const descricaoPersonagem = document.getElementById('descricao-personagem');
  
    personagens.forEach(function(personagem) {
      personagem.addEventListener('mouseenter', function() {
        const idPersonagem = personagem.getAttribute('id');
        const nome = personagem.getAttribute('data-name');
        const descricao = personagem.getAttribute('data-description');
        const imagemSrc = `./src/imagens/imagens/card-${idPersonagem}.png`;
  
        imagemPersonagemGrande.src = imagemSrc;
        nomePersonagem.innerText = nome;
        descricaoPersonagem.innerText = descricao;
  
        personagens.forEach(function(personagem) {
          personagem.classList.remove('selecionado');
        });
  
        personagem.classList.add('selecionado');
      });
    });
  });
  