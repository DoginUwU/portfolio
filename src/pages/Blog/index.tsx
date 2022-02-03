import React from 'react';
import { Icon } from "@iconify/react";
import ParallaxMousemove from "react-parallax-mousemove";

import { Start, Container, Banner, Documents, Background } from "./styles";
import ScrollDown from '../../components/ScrollDown';

const Blog: React.FC = () => {
  return (
    <>
      <Start>
        <ParallaxMousemove.Layer
          config={{
            xFactor: 0.1,
            yFactor: 0,
            springSettings: {
              stiffness: 50,
              damping: 10,
            },
          }}
        >
          <img
            src="/images/blog/background.png"
            alt="background"
          />
        </ParallaxMousemove.Layer>
        <ParallaxMousemove.Layer
          config={{
            xFactor: 0.2,
            yFactor: 0.2,
            springSettings: {
              stiffness: 50,
              damping: 10,
            },
          }}
        >
          <img
            src="/images/blog/megumin.png"
            alt="megumin"
          />
        </ParallaxMousemove.Layer>
        <ParallaxMousemove.Layer
          config={{
            xFactor: 0.05,
            yFactor: 0.05,
            springSettings: {
              stiffness: 50,
              damping: 10,
            },
          }}
        >
          <h1>Blog do luiz</h1>
        </ParallaxMousemove.Layer>
        <ScrollDown />
      </Start>
      <Container>
        <Background />
        <Banner>
          <div>
            <h1>Aprenda mais sobre programação</h1>
            <p>
              Sempre irei tentar publicar tudo que eu aprender ao decorrer da
              minha jornada. Sinta-se em casa para se aprofundar nos estudos
              comigo.
            </p>
          </div>
          <Icon icon="bi:newspaper" />
        </Banner>
        <Documents>
          {/* <Document>
            <img
              src="https://cdn.discordapp.com/attachments/880778290170834944/937885798651551774/FKRLJ4bUcAAqOKC.jpg"
              alt="document"
            />
            <div>
              <h1>As descobertas do React Lazy</h1>
              <p>React, Javascript</p>
            </div>
          </Document> */}
          <h1>Em construção... ⛔</h1>
        </Documents>
      </Container>
    </>
  );
}

export default Blog;