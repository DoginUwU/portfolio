import { usePrismicDocumentByUID } from '@prismicio/react';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Container, HeaderContainer, Card } from "./styles";

const Project: React.FC = () => {
  const { uid } = useParams<any>();
  const [document] = usePrismicDocumentByUID("project", uid);
  if (!document) return null;
  
  const { data }: any = document;

  return (
    <Container>
      <HeaderContainer>
        <img src={data["main-image"].url} alt="project" />
        <Card>
          <h1>{RichText.asText(data.title)}</h1>
          <p>{RichText.asText(data.short_description)}</p>
          <a href={data.link} target="_blank" rel="noreferrer">
            <Button disabled={!data.link}>Visitar</Button>
          </a>
        </Card>
      </HeaderContainer>
      {/* <Card>
        <p>{RichText.asText(data.description)}</p>
        <Carousel
          autoPlay
          centerMode
          dynamicHeight
          emulateTouch
          showStatus={false}
          showArrows={true}
          showThumbs={false}
        >
          {data.body[0]?.items.map((item: any) => {
            return (
              <div>
                <img
                  src={item.image.url}
                  alt="project"
                  className="carousel_image"
                />
              </div>
            );
          })}
        </Carousel>
      </Card> */}
    </Container>
  );
}

export default Project;