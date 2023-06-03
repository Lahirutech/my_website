'use client'; // This is a client component 👈🏽

import Image from 'next/image';
import styles from './page.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navigation from '@/component/Navigation';
import { Banner } from '@/component/Banner';
import Skills from '@/component/Skills';
import Projects from '@/component/Projects';
import Footer from '@/component/Footer';

export default function Home() {
  return (
    <div className='app'>
      <Navigation />
      <Banner />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
