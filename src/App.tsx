import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes/router";
import { SuspenseContainer } from "./styles/appStyles";
import "./styles/globalStyles.css";

function App() {
  return (
    <Suspense fallback={<SuspenseContainer>Aguarde...</SuspenseContainer>}>
      <Header />
      <Routes />
      <Toaster />
      <Footer />
    </Suspense>
  );
}

export default App;
