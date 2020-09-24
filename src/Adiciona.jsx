import React from "react";
import axios from "axios";

function incluir() {

  console.log("Adicionar cliente")

  const url = "https://localhost:5001/clientes"

  
  let cliente = {  nome: 'Nome do cliente' }
  

  axios.post(url, cliente)
  .then(response => {
      alert(response)
  })
  .catch(function(error) {
      alert(error)
  })



  
}
export default function Adiciona() {
  return (
    <div>
      <h1>Teste axios</h1>

      <button onClick={incluir}>Add um cliente</button>
    </div>
  );
  }
