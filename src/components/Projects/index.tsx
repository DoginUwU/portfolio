import { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { Document } from "@prismicio/client/types/documents";
import Client from "../../utils/prismic";
import Button from "../Button";
import Title from "../Title";

import { Circle, Container, ProjectItem, ProjectsContainer } from "./styles";
import { RichText } from "prismic-reactjs";
import toast from "react-hot-toast";

const Projects = () => {
  const [projects, setProjects] = useState<Document[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "project")
      );
      if (response) {
        const results = response.results.sort((a, b) => {
          // @ts-ignore
          return new Date(b.data.time).getTime() - new Date(a.data.time).getTime();
        });
        setProjects(results);
      }
    };
    fetchData();
  }, []);

  const handleOpenProjects = () => {
    toast.error("Em progresso...", {
      icon: "⛔",
    });
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
