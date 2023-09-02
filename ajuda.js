//executa o código quando o HTML for carregado
document.addEventListener('DOMContentLoaded', function() {

    //pega o botão pelo nome da classe e guarda na variável
    var dropdown_pergunta = document.getElementsByClassName('duvidasfreq-btn');
    //itera em cada elemento e atribui um ouvinte de evento de clique
    for (var i = 0; i < dropdown_pergunta.length; i++) {
      dropdown_pergunta[i].addEventListener('click', function() { //função executa sempre que ocorrer o click em um botão
        this.classList.toggle('active'); //ao click do botão ativa ou desativa a estilização
        var content = this.nextElementSibling; //conteúdo ao clicar no botão
        if (content.style.display === 'block') { //verifica se o conteúdo está visível ou oculto
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    }
});