import Prismic from "@prismicio/client";

const apiEndpoint = "https://gotardo.prismic.io/api/v2";
const accessToken = "";

const Client = Prismic.client(apiEndpoint, { accessToken });

export default Client;
