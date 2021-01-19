import React from 'react'
import editar from './imagens/editar.png';
import excluir from './imagens/excluir.png';


function TabelaDeParceiros(props) {
  return (
      <tr>
        <td>{props.nome}</td>
        <td>{props.cidade}</td>
        <td>{props.telefone}</td>
      </tr>
  );
};

export default TabelaDeParceiros
