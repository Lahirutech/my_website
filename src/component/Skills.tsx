import React from 'react';
import jslogo from '../assets/img/js-logo.svg';
import reactlogo from '../assets/img/react-logo.svg';
import tslogo from '../assets/img/Typescript_logo_2020.svg.png';
import nodelogo from '../assets/img/nodelogo.png';
import mongologo from '../assets/img/mongologo.svg';
import awslogo from '../assets/img/awslogo.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';
import Image from 'next/image';

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section
      className='skill'
      id='skills'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>
                I am dedicated to staying updated with the latest advancements
                in the field and continually learning to enhance my tech stack.
                <br></br>These are the technologies I have worked with and
                gained valuable experience in.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                ssr={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                className='owl-carousel owl-theme skill-slider'
              >
                <div className='item'>
                  <Image
                    src={jslogo}
                    alt='Image'
                  />
                  <h5>JavaScript</h5>
                </div>
                <div className='item'>
                  <Image
                    src={tslogo}
                    alt='Image'
                  />
                  <h5>TypeScript</h5>
                </div>
                <div className='item'>
                  <Image
                    src={reactlogo}
                    alt='Image'
                  />
                  <h5>React.js</h5>
                </div>
                <div className='item'>
                  <Image
                    src={nodelogo}
                    alt='Image'
                  />
                  <h5>Node.js</h5>
                </div>
                <div className='item'>
                  <Image
                    src={mongologo}
                    alt='Image'
                  />
                  <h5>Mongo Db</h5>
                </div>
                <div className='item'>
                  <Image
                    src={awslogo}
                    alt='Image'
                  />
                  <h5>AWS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Image
        className='background-image-left'
        src={colorSharp}
        alt='Image'
      />
    </section>
  );
}
