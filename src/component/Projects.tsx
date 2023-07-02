import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import gpt3 from '../assets/img/gpt3-landing.png';
import babyname from '../assets/img/babyname.png';
import hotel from '../assets/img/hotel-offers.png';
import googleSignin from '../assets/img/google-signin.png';
import fullstack from '../assets/img/fullstack.png';

import mediumProfile from '../assets/img/mediumProfile.png';
import youtubeProfile from '../assets/img/youtubeProfile.png';

import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import Link from 'next/link';
export default function Projects() {
  const projects = [
    {
      title: 'Nextjs Fullstack',
      description:
        'Fullstack application with Google Authentication and CRUD operations',
      imgUrl: fullstack,
      link: 'https://fullstack-blog-sigma.vercel.app/',
    },
    {
      title: 'Startup Landing Page',
      description: 'Landing page designed using Meterial-Ui and Nextjs',
      imgUrl: gpt3,
      link: 'https://gpt3landing.vercel.app/',
    },
    {
      title: 'Baby Names Using AI',
      description: 'Integrated Chat-GPT api to generate names for babies.',
      imgUrl: babyname,
      link: 'https://gpt-integration.vercel.app/baby',
    },
    {
      title: 'Hotel Offers UI',
      description:
        'Designed a ui in Material UI and Nextjs to a website that posts Hotel Offers',
      imgUrl: hotel,
      link: 'https://hotel-offers.vercel.app/',
    },
    {
      title: 'Authentication System',
      description:
        'Tried Next-Auth authentication to integrate third party auth providers such as Google,Facebook, ect',
      imgUrl: googleSignin,
      link: 'https://next-auth-gray.vercel.app/login',
    },
  ];
  return (
    <section
      className='project'
      id='projects'
    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have been developing Full Stack side projects to get in
                    touch with new technologies. And also I am adding youtube
                    content and writing on medium. I always love to share the
                    things I learn
                  </p>
                  <Tab.Container
                    id='projects-tabs'
                    defaultActiveKey='first'
                  >
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Fullstack Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Articles</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Youtube Content</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <p>
                          Writing is something I have been enjoying a lot. I am
                          contributing to some of popular medium publications
                          such as Level Up Coding,Jsavascript in Plain English,
                          Geek Culture ect.
                        </p>
                        <Link
                          target='_blank'
                          href='https://medium.com/@freelancingcult'
                        >
                          <div className='medium-project proj-imgbx'>
                            <Image
                              src={mediumProfile}
                              alt=''
                            ></Image>
                            <div className='proj-txtx'>
                              {' '}
                              <h4>Visit My medium Profile</h4>
                            </div>
                          </div>
                        </Link>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>
                          I create videos to youtube whenever I got a chance. I
                          love to share the knwoledge I learn with the Fullstack
                          developer community.{' '}
                        </p>
                        <Link
                          target='_blank'
                          href={'https://www.youtube.com/@thefullstackproject'}
                        >
                          <div className='youtube-project proj-imgbx'>
                            {' '}
                            <Image
                              src={youtubeProfile}
                              alt=''
                            ></Image>
                            <div className='proj-txtx'>
                              {' '}
                              <h4 color='white'>Visit My Yotube Channel</h4>
                            </div>
                          </div>
                        </Link>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Image
        className='background-image-right'
        src={colorSharp2}
        alt=''
      />
    </section>
  );
}
