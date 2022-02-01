import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Document } from "@prismicio/client/types/documents";
import Button from "../Button";
import Title from "../Title";

import { Circle, Container, ProjectItem, ProjectsContainer } from "./styles";
import { RichText } from "prismic-reactjs";
import { getAllProjects } from "../../services/prismic";

const Projects = () => {
  const history = useHistory();
  const [projects, setProjects] = useState<Document[]>([]);

   const getProjects = async () => {
    setProjects(await getAllProjects());
  }

  useEffect(() => {
    getProjects();
  }, []);

  const handleOpenProjects = () => {
    history.push("/projects");
  };

  return (
    <Container id="projects">
      <Title>Projetos</Title>
      <ProjectsContainer>
        {projects.slice(0, 5).map((project) => {
          const { data } = project;

          return (
            <ProjectItem key={project.uid}>
              <img src={data["main-image"].url} alt="project" />
              <div>
                <h3>{RichText.asText(data.title)}</h3>
              </div>
            </ProjectItem>
          );
        })}
      </ProjectsContainer>
      <Button onClick={handleOpenProjects}>Ver todos</Button>
      <Circle />
    </Container>
  );
};

export default Projects;
