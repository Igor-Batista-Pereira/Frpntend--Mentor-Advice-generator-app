const idConselho = document.getElementById('id-conselho');
const Conselho = document.getElementById('conselho');
const botao = document.getElementById('gerar-conselho');

botao.addEventListener('click',getAdvice)

async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const json = await response.json()
    console.log(json)
    idConselho.innerHTML = "Advice #" + json.slip.id
    conselho.innerHTML = json.slip.advice
}

getAdvice ()