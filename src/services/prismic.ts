import Prismic from "@prismicio/client";
import Client from "../utils/prismic";

const getAllProjects = async () => {
  const response = await Client.query(
    Prismic.Predicates.at("document.type", "project")
  );
  if (response) {
    const results = response.results.sort((a, b) => {
      // @ts-ignore
      return new Date(b.data.time).getTime() - new Date(a.data.time).getTime();
    });

    return results;
    }
    
    return [];
};

export { getAllProjects };