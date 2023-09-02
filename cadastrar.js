//executa o código quando o HTML for carregado
document.addEventListener('DOMContentLoaded', function() {
    //guarda a data inserida
var datanascimento = document.getElementById('datanascimento');

datanascimento.addEventListener('change', function() { //ouvinte de evento quando há alteração
    var datanasc = new Date(this.value); // converte para objeto utilizável a data do input
    var hoje = new Date(); //data atual
    var idade = hoje.getFullYear() - datanasc.getFullYear(); //data atual menos data de nascimento inserida igual a idade

    if (hoje.getMonth() < datanasc.getMonth() || (hoje.getMonth() === datanasc.getMonth() && hoje.getDate() < datanasc.getDate())) {
    idade--;
    } // se o mês atual é menor que o mês de nascimento ou é igual ao mês de nascimento e dia atual é menor que o dia de nascimento
    if (idade < 16) {
    alert('Cadastro não permitido!');
    this.value = ''; // campo de data de nascimento vazio
    }
});
});

