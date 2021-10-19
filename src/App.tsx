import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes/router";
import { useBedroom } from "./stores";
import { SuspenseContainer } from "./styles/appStyles";
import "./styles/globalStyles.css";

function App() {
  const { loading } = useBedroom();

  return (
    <Suspense fallback={<SuspenseContainer>Aguarde...</SuspenseContainer>}>
      <Header />
      <Routes />
      <Toaster />
      {!loading && <Footer />}
    </Suspense>
  );
}

export default App;
