import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'

const Contatos = () => {

    const enviaMensagem = async (evento) => {
        const url = "https://unfadable-air.000webhostapp.com/api/faleconosco.php";
        const dados = new FormData(evento.target);
        await fetch(url, {
            method: "POST",
            body: dados
        });
    }
    return (
      <Container>
        <div className="my-4">
          <h2>Contato</h2>
          <Form onSubmit={enviaMensagem} className="my-4">
            <Form.Group controlId="nome">
              <Form.Label>Nome: </Form.Label>
              <Form.Control name="nome" type="text" placeholder="Digite seu nome" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email: </Form.Label>
              <Form.Control name="email" type="email" placeholder="nome@email.com.br" />
            </Form.Group>
            <Form.Group controlId="mensagem">
              <Form.Label>Mensagem: </Form.Label>
              <Form.Control name="mensagem" as="textarea" rows={3} placeholder="Críticas/sugestões/dúvidas de como ser um parceiro?" />
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
          </Form>
        </div>
      </Container>
    );
};

export default Contatos;