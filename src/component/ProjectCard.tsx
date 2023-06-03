import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Col } from 'react-bootstrap';

export default function ProjectCard({
  title,
  description,
  imgUrl,
}: {
  title: string;
  description: string;
  imgUrl: StaticImageData;
}) {
  return (
    <Col
      size={12}
      sm={6}
      md={4}
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
    </Col>
  );
}
