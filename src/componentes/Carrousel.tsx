import React, { useState } from "react";
import styled from "styled-components";

const CarouselImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  overflow: hidden;
  opacity: 0.5;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselContainer = styled.div`
  position:relative;
  display: block;
  align-content: center;
  flex-direction: row;
  margin-top: 15px;
`;
const CarouselButton = styled.button`
  color: white;
  background-color: #1d3434;
  padding: 8px;
  margin: 5px;
`;

export default function Carrousel(props) {
  const images = ["gato1.jpg", "gato2.jpg", "gato3.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };
  const next = () => {
    selectNewImage(selectedIndex, images, true);
  };

  return (
    <>
      
        <h1 className="text-title"> Carousel hecho con SOLO ReactJs</h1>
        <CarouselImg
          style={{ height: "auto", maxWidth: '65%' }}
          src={require(`../assets/${selectedImage}`)}
          alt="Gato"
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />
        <CarouselContainer>
          <CarouselButton className="borde" onClick={previous}>
            {"<"}
          </CarouselButton>
          <CarouselButton className="borde" onClick={next}>
            {">"}
          </CarouselButton>
        </CarouselContainer>
        
    </>
  );
}
