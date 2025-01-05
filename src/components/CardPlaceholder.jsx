import React from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

const CardPlaceholder = (props) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const placeholders = [1, 2, 3, 4];

  return (
    <div>
      <Slider {...settings} className="carousel">
        {placeholders.map((placeholder) => (
          <Card key={placeholder} style={{ width: "290px" }}>
            <Card.Body>
              <Placeholder animation="glow">
                <Placeholder xs={12} style={{ height: "340px" }} />
              </Placeholder>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default CardPlaceholder;
