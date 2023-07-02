import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import linkedin from '../assets/img/linkedinpng.png';
import githubIcon from '../assets/img/githubpng.png';
import stackover from '../assets/img/stackover.png';
import Image from 'next/image';
import logo from '../assets/img/logo.svg';

export default function Navigation() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand='md'
      className={scrolled ? 'scrolled' : ''}
    >
      <Container>
        <Navbar.Brand href='/'>
          <Image
            src={logo}
            alt='Logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Tech Stack
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a
                href='https://www.linkedin.com/in/lanka-rathnayaka/'
                target='_blank'
              >
                <Image
                  src={linkedin}
                  alt=''
                />
              </a>
              <a
                href='https://github.com/Lahirutech'
                target='_blank'
              >
                <Image
                  src={githubIcon}
                  alt=''
                />
              </a>
              <a
                href='https://stackoverflow.com/users/7848518/lahiru-lanka-rathnayaka'
                target='_blank'
              >
                <Image
                  src={stackover}
                  alt=''
                />
              </a>
            </div>
            <a
              href='/generalcv.pdf'
              target='_blank'
            >
              <button className='vvd'>
                <span>Download My CV</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
