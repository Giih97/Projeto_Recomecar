import React from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import TabelaDeParceiros from "../../Components/ProcurarAjuda/TabelaDeParceiros";
import ModalLogin from "../../Components/ProcurarAjuda/Login";

const ProcurarAjuda = () => {
  const [parceiros, setParceiros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch(
        "http://localhost/ProjetoSquad05/php/api/parceiro.php"
      );
      const dados = await resposta.json();
      setParceiros(dados);
    }
    fetchData();
  }, []);


  return (
    <Container>
      <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Parceiro</th>
            <th>Endereço</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
         {parceiros && parceiros.map(item => (
              <TabelaDeParceiros 
                key={item.id_parceiros}
                id={item.id_parceiros}
                nome={item.nome}
                cidade ={item.cidade}
                telefone = {item.telefone}/>
            ))}
            </tbody>
          </Table>
      </div>         
      <ModalLogin/>
    </Container>
  );
};

export default ProcurarAjuda;
