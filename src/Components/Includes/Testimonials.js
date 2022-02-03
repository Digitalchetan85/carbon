import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import image from "../../Images/mob-logo.png";

const Testimonials = () => {
  const comments = [
    {
      id: 1,
      imageurl: image,
      name: "Person Name",
      company: "Company Name",
      testimonial:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      imageurl: image,
      name: "Person Name",
      company: "Company Name",
      testimonial:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <div className="py-3 py-md-5 bg-light" id="testimonials">
      <Container>
        <Row className="justify-content-center">
          <h3 className="text-center text-primary py-2">Testimonials</h3>
          <Col md={10}>
            <Carousel className="bg-white shadow px-5">
              {comments.map((item) => (
                <Carousel.Item key={item.id}>
                  <div className="text-center">
                    <div className="text-center py-3">
                      <Image
                        src={item.imageurl}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </div>
                    <p className="text-center">{item.testimonial}</p>
                    <figure class="text-center">
                      <blockquote class="blockquote">
                        <p className="text-center">{item.name}</p>
                      </blockquote>
                      <figcaption class="blockquote-footer">
                        {item.company}
                      </figcaption>
                    </figure>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
