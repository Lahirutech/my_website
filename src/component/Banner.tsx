import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Image from 'next/image';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    'A Fullstack Developer',
    'A Tech Youtuber',
    'A Content Writer',
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className='banner'
      id='home'
    >
      <Container>
        <Row className='aligh-items-center'>
          <Col
            xs={12}
            md={6}
            xl={7}
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Lanka,`}{' '}
                    <span
                      className='txt-rotate'
                      data-rotate='[ "Web Developer", "Node.js Developer", "Content Creator" ]'
                    >
                      <span className='wrap'>{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am a fullstack developer over 3 years of experiene. I have
                    been working with multiple tech stacks mainly based on
                    Javascript. Here I have the links for some of my projects,
                    youtube videos and articles. Please make sure to contact me
                    for any enquiries
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col
            xs={12}
            md={6}
            xl={5}
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <Image
                    src={headerImg}
                    alt='Header Img'
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
