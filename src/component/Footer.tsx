import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/logo.svg';
import linkedin from '../assets/img/linkedinpng.png';
import githubIcon from '../assets/img/githubpng.png';
import stackover from '../assets/img/stackover.png';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          {/* <MailchimpForm /> */}
          <Col
            size={12}
            sm={6}
          >
            <Image
              className='footer-img'
              src={logo}
              alt='Logo'
            />
          </Col>
          <Col
            size={12}
            sm={6}
            className='text-center text-sm-end'
          >
            <div className='social-icon'>
              <a href='#'>
                <Image
                  src={linkedin}
                  alt='Icon'
                />
              </a>
              <a href='#'>
                <Image
                  src={githubIcon}
                  alt='Icon'
                />
              </a>
              <a href='#'>
                <Image
                  src={stackover}
                  alt='Icon'
                />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
