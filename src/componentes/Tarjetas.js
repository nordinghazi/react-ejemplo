import React from "react";
import Frontend from "../assets/frontend.jpg";
import Js from "../assets/js.jpg";
import Java from "../assets/java.jpg";
import Html from "../assets/html.jpg";
import { Card } from "react-bootstrap";

function Tarjetas() {
  return (
    <div className="container">
      <div className="row row-cols-1">
        <div className="col-lg-3 ">
          <Card
            className="card border-dark tarjeta"
            style={{ width: "18em", margin: "auto", marginBottom: "2em" }}
          >
            <Card.Img
              src={Js}
              style={{ minHeight: "15em" }}
              className="card-img-top"
              alt="..."
            />
            <Card.Body>
              <Card.Title
                style={{
                  color: "#160F15",
                  fontFamily: "cursive",
                  fontSize: "2em",
                  fontWeight: "bold",
                }}
              >
                Primera tarjeta
              </Card.Title>
              <Card.Text style={{ color: "#330F2D", fontFamily: "cursive" }}>
                Esta tarjeta esta hecha con Bootstrap por <h3>Nordín</h3>.
              </Card.Text>
              <hr />
              <p>An item</p>
              <hr />
              <p>An item</p>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 ">
          <Card
            className="card border-dark tarjeta"
            style={{
              width: "18em",
              margin: "auto",
              marginBottom: "2em",
            }}
          >
            <Card.Img
              src={Java}
              style={{ minHeight: "15em" }}
              className="card-img-top"
              alt="..."
            />
            <Card.Body>
              <Card.Title
                style={{
                  color: "#160F15",
                  fontFamily: "cursive",
                  fontSize: "2em",
                  fontWeight: "bold",
                }}
              >
                Segunda tarjeta
              </Card.Title>
              <Card.Text style={{ color: "#330F2D", fontFamily: "cursive" }}>
                Esta tarjeta esta hecha con Bootstrap por <h3>Nordín</h3>.
              </Card.Text>
              <hr />
              <p>An item</p>
              <hr />
              <p>An item</p>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 ">
          <Card
            className="card border-dark tarjeta "
            style={{
              width: "18em",
              margin: "auto",
              marginBottom: "2em",
            }}
          >
            <Card.Img
              src={Frontend}
              style={{ minHeight: "15em" }}
              className="card-img-top"
              alt="..."
            />
            <Card.Body>
              <Card.Title
                style={{
                  color: "#160F15",
                  fontFamily: "cursive",
                  fontSize: "2em",
                  fontWeight: "bold",
                }}
              >
                Tercera tarjeta
              </Card.Title>
              <Card.Text style={{ color: "#330F2D", fontFamily: "cursive" }}>
                Esta tarjeta esta hecha con Bootstrap por <h3>Nordín</h3>.
              </Card.Text>
              <hr />
              <p>An item</p>
              <hr />
              <p>An item</p>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-3 ">
          <Card
            className="card border-dark tarjeta"
            style={{
              width: "18em",
              margin: "auto",
              marginBottom: "2em",
            }}
          >
            <Card.Img
              src={Html}
              style={{ minHeight: "15em" }}
              className="card-img-top"
              alt="..."
            />
            <Card.Body>
              <Card.Title
                style={{
                  color: "#160F15",
                  fontFamily: "cursive",
                  fontSize: "2em",
                  fontWeight: "bold",
                }}
              >
                Cuarta tarjeta
              </Card.Title>
              <Card.Text style={{ color: "#330F2D", fontFamily: "cursive" }}>
                Esta tarjeta esta hecha con Bootstrap por <h3>Nordín</h3>.
              </Card.Text>
              <hr />
              <p>An item</p>
              <hr />
              <p>An item</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Tarjetas;
