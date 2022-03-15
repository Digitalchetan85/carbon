import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../Images/gallery/image-1.png";
import Image2 from "../../Images/gallery/image-2.png";
import Image3 from "../../Images/gallery/image-3.png";
import Image4 from "../../Images/gallery/image-4.png";
import Image5 from "../../Images/gallery/image-5.png";
import Image6 from "../../Images/gallery/image-6.png";
import Image7 from "../../Images/gallery/image-7.png";
import Image8 from "../../Images/gallery/image-8.png";
import Image9 from "../../Images/gallery/image-9.png";
import Image10 from "../../Images/gallery/image-10.png";
import Image11 from "../../Images/gallery/image-11.png";
import Image12 from "../../Images/gallery/image-12.png";
import Image13 from "../../Images/gallery/image-13.png";
import Image14 from "../../Images/gallery/image-14.png";
import Image15 from "../../Images/gallery/image-15.png";

const Gallery = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "" },
    { id: 2, imgName: Image2, alt: "" },
    { id: 3, imgName: Image3, alt: "" },
    { id: 4, imgName: Image4, alt: "" },
    { id: 5, imgName: Image5, alt: "" },
    { id: 6, imgName: Image6, alt: "" },
    { id: 7, imgName: Image7, alt: "" },
    { id: 8, imgName: Image8, alt: "" },
    { id: 9, imgName: Image9, alt: "" },
    { id: 10, imgName: Image10, alt: "" },
    { id: 11, imgName: Image11, alt: "" },
    { id: 12, imgName: Image12, alt: "" },
    { id: 13, imgName: Image13, alt: "" },
    { id: 14, imgName: Image14, alt: "" },
    { id: 15, imgName: Image15, alt: "" },
  ];

  return (
    <Container className="py-3 py-md-5">
      <SimpleReactLightbox>
        <SRLWrapper>
          <Row className="g-3 justify-content-center">
            {images.map((item) => (
              <Col md={4} xs={6} sm={6} key={item.id}>
                <div className="m-1 text-center border border-dark p-1 rounded">
                  <a href={item.imgName}>
                    <Image
                      src={item.imgName}
                      alt={item.alt}
                      className="img-fluid"
                    />
                  </a>
                </div>
                <h6 className="text-center"> {item.tag} </h6>
              </Col>
            ))}
          </Row>
        </SRLWrapper>
      </SimpleReactLightbox>
    </Container>
  );
};

export default Gallery;
