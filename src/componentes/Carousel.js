import React from "react";
import Gato1 from "../assets/gato1.jpg";
import Gato2 from "../assets/gato2.jpg";
import Gato3 from "../assets/gato3.jpg";
import Rural1 from "../assets/rural1.jpg";
import Rural2 from "../assets/rural2.jpg";
import Rural3 from "../assets/rural3.jpg";

function Carousel() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-6 mb-4 " >
         <div className="borde">
          <div
            id="carouselExampleIndicators"
            className="carousel slide "
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Gato3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Gato2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Gato1} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev borde"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next borde"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4" >
          <div className="borde">
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Rural1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="h2" style={{color:'black' ,backgroundColor:'rgba(220, 255, 248, 0.8)'}} >Primer Slide</h5>
                  <p style={{color:'black' ,backgroundColor:'rgba(220, 255, 248, 0.8)'}}>
                    Carousel con texto con Bootstrap.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Rural2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="h2" style={{color:'black' ,backgroundColor:'rgba(220, 255, 248, 0.8)'}}>Segundo Slide</h5>
                  <p style={{color:'black' ,backgroundColor:'rgba(220, 255, 248, 0.8)'}}>
                  Carousel con texto con Bootstrap.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Rural3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="h2" style={{color:'black' ,backgroundColor:'rgba(220, 255, 248, 0.8)'}}>Tercer Slide </h5>
                  <p style={{color:'black' ,backgroundColor:'rgba(220, 255, 248, 0.8)'}}>
                  Carousel con texto con Bootstrap.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
