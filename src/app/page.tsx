'use client'; // This is a client component 👈🏽

import Image from 'next/image';
import styles from './page.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navigation from '@/component/Navigation';
import { Banner } from '@/component/Banner';
import Skills from '@/component/Skills';

export default function Home() {
  return (
    <div className='App'>
      <Navigation />
      <Banner />
      <Skills />
    </div>
  );
}
