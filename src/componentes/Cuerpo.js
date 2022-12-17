import React from "react";
import Card from "react-bootstrap/Card";
import Foto from "../assets/yo.jpg";

function Cuerpo() {
  return (
    <div
      className="container"
      style={{ marginTop: "3rem", marginBottom: "3rem" }}
    >
      <Card
        className="card mb-3"
        style={{
          maxWidth: "100%",
          backgroundColor: "#235454",
          borderRadius: "55px 55px 55px 55px",
          overflow: "hidden",
          
          
        }}
      >
        <div className="row g-0">
          <div className="col-md-9">
            <Card.Body>
              <Card.Title
                className="text-light"
                style={{ fontFamily: "monospace ", fontSize: "4rem",fontWeight: 'lighter' }}
              >
                Nordín Ghazi
              </Card.Title>
              <Card.Text
                className="text-light"
                style={{ marginTop: 50,fontSize:'20px', fontFamily:"cursive" }}
              >
                ES: Hola, mi nombre es Nordín y esto es un ejemplo para mostrar
                una tarjeta sencilla hecha con CSS y BOOTSTRAP, espero que les
                guste :) <br/><hr/> EN: Hello, my name is Nordín and this is an example to
                show a simple card made with CSS and BOOTSTRAP, I hope you like
                it :)
              </Card.Text>
            </Card.Body>
          </div>
          <div className="col-md-3">
            <Card.Img
              src={Foto}
              className="img-fluid rounded-start"
              style={{ height: "100%" }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Cuerpo;
