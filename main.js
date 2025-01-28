/* let -> variável mutável
   const -> variável imutável
*/

'use scrict' /* Para ajudar a reconhecer os erros */

const botaoTrocarCor = document.getElementById('trocar-cor')

function trocarCor () {
    const cor = document.getElementById('cor').value 
    document.documentElement.style.setProperty('--cor-fundo', cor)
}

/*Para detectar um movimneto (ex: o clicar no botão)*/
botaoTrocarCor.addEventListener('click', trocarCor)


