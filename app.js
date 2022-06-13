const respostaElement = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#pergunta')
const questButton = document.querySelector('#questButton')
const respostas = [
  'Certeza!',
  'Não tenho certeza.',
  'Não conte com isso.',
  'É decididamente assim.',
  'Sem duvidas.',
  'Pergunte novamente mas tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melho não te dizer agora.',
  'a meu ver, sim.',
  'Minhas fontes dizem que não.',
  'provavelmente.',
  'Não é possivel prever agora.',
  'Perspectiva boa.',
  'sim.',
  'as perspectivas não são tão boas.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.',
  'Não sou obrigado a responder isso.',
  'Isso só depende de você.',
  'Diria que sim mas acho que não.'
]

//Fazer pergunta ao clicar
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Por favor digite uma pergunta')
    return
  }

  questButton.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]

  respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]
  respostaElement.style.opacity = 1

  //sumir resposta
  setTimeout(function () {
    respostaElement.style.opacity = 0
    questButton.removeAttribute('disabled')
  }, 3000)
}
