document.getElementById("botaoEnviar").addEventListener("click", validaFormulario )

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" &&
  document.getElementById("telefone").value != ""){
      alert("Pronto! Você receberá as novidades por email!")
  }else{
      alert("Por favor, insira seu nome, email e telefone.")
  }
}