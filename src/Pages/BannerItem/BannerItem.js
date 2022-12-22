import React from 'react';
import { Carousel } from 'react-bootstrap';

const BannerItem = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
        style={{
            height: "550px",
        }}
          className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200114192751/How-to-Learn-Programming.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Deep Coder Knowledge</h3>
          <p>Learn programming with full focus. And keep rock</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{
            height: "550px",
        }}
          className="d-block w-100"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--3GsfqBjR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/twi6ikgl7bjwt6i4b57n.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Deep Coder Knowledge</h3>
          <p>Learn programming with full focus. And keep rock</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{
            height: "550px",
        }}
          className="d-block w-100"
          src="https://rms.koenig-solutions.com/Sync_data/CCE_Logo//2451-KOENIG(44)(1).pngL.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Deep Coder Knowledge</h3>
          <p>
          Learn programming with full focus. And keep rock
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default BannerItem;