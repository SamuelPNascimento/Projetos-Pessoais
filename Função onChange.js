function onChange() {
  //DatNas é uma variável utilizada para guardar o ano de nascimento fornecida pelo usuário.
  const idade = new Date(document.getElementById('DatNas').value);
  const date = new Date();
  let years = Math.round(date.GetFullYear() - idade.getFullYear());
  document.querySelector('IdaAlu').value = years
  //IdaAlu é campo que será utilizado para ser preeenchido quando o usuário fornecer o ano de nascimento.
} 

  
