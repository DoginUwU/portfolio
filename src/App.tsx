import { Suspense } from "react";
import { PrismicProvider } from "@prismicio/react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes/router";
import { SuspenseContainer } from "./styles/appStyles";
import "./styles/globalStyles.css";
import Client from "./utils/prismic";

function App() {
  return (
    <Suspense fallback={<SuspenseContainer>Aguarde...</SuspenseContainer>}>
      <PrismicProvider client={Client}>
        <Header />
        <Routes />
        <Toaster />
        <Footer />
      </PrismicProvider>
    </Suspense>
  );
}

export default App;
