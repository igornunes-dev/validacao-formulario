const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('form')
const textForm = document.querySelector('#textForm')
const textEmail = document.querySelector('#erroEmail')
const textPassword = document.querySelector('#erroPassword')
const textSymbol = document.querySelector('#erroSymbols')

form.addEventListener('submit', (e) => {
  if(email.value == '' && password.value == ''){
    textForm.innerHTML = 'Preencha todos os campos!'
  }
  else if(validaEmail(email.value) === true && validaPassword(password.value) === true) {
    console.log(email.value)
    console.log(password.value)

    textForm.textContent = ''
    textEmail.textContent = ''
    textPassword.textContent = ''
  }
  e.preventDefault()
})

//O evento de keyup faz com que o usuário não precise apertar no button para que as validaçoes aconteça 
email.addEventListener('keyup', () => {
  if(validaEmail(email.value) == false){
    textEmail.textContent = "O formato do email deve ser Ex: contato@gmail.com"
  }else {
    textEmail.textContent = ''
  }
})

password.addEventListener('keyup', () => {
  if(validaPassword(password.value) == false) {
    textPassword.textContent = 'Sua senha deve conter pelo menos 6 caracteres'
    textSymbol.textContent = 'Sua senha deve conter pelo menos 1 caracter especial'
  }
  else {
    textPassword.textContent = ''
    textSymbol.textContent = ''
  }
})

function validaEmail(email){
  //Regex que valida o email
  const emailValidado = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailValidado.test(email)
}

function validaPassword(password){
  const senhaValidada = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
  return senhaValidada.test(password)
}

function validaCaracterEspecial(password){
  const caracterEspecial = /^[@#\$%\^\&*\)\(+=._-]{6,}$/g;
  return caracterEspecial.test(password)
}