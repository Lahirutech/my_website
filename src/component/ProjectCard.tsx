import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Col } from 'react-bootstrap';

export default function ProjectCard({
  title,
  description,
  imgUrl,
  link,
}: {
  title: string;
  description: string;
  imgUrl: StaticImageData;
  link: string;
}) {
  return (
    <Col
      size={12}
      sm={6}
      md={4}
    >
      <a
        href={link}
        target='_blank'
      >
        <div className='proj-imgbx'>
          <Image
            alt=''
            src={imgUrl}
          />
          <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
}
