import React, { useEffect, useState } from 'react';
import { Document } from "@prismicio/client/types/documents";
import { getAllProjects } from '../../services/prismic';

import { Container, Banner, Computer, Projects, Project } from "./styles";
import { useHistory } from 'react-router-dom';

const Portfolio: React.FC = () => {
    const history = useHistory();
    const [projects, setProjects] = useState<Document[]>([]);

    const getProjects = async () => {
      setProjects(await getAllProjects());
    };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProjects();
  }, []);

    // const handleProject = (id?: string) => {
    //     history.push(`/project/${id}`);
    // }

    return (
      <Container>
        <Banner>
          <h1>My projects at moment</h1>
          <Computer>
            <div className="header">
              <div className="circle red" />
              <div className="circle yellow" />
              <div className="circle green" />
            </div>
            <div className="screen">
              <h4>&#60;Projects /&#62;</h4>
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div className="screen-content" key={index} />
                ))}
            </div>
          </Computer>
        </Banner>
        <Projects>
                {projects.map((project) => {
                    const { data, uid } = project;
                  return (
                    <a href={data.link} target="_blank" rel="noreferrer">
                      <Project key={uid}>
                        <img src={data["main-image"].url} alt="Project name" />
                        <div className="card" />
                      </Project>
                    </a>
                  );
                })}
            </Projects>
      </Container>
    );
}

export default Portfolio;