import Topbar from "./components/topbar/topbar";
import Header from "./components/pages/header";
import Buy from "./components/pages/buy";
import Faq from "./components/pages/faq";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import { StyledApp } from "./components/styles/appStyle";

function App() {
  return (
    <StyledApp>
      <Topbar />
      <Header />
      <Buy />
      <About />
      <Faq />
      <Contact />
    </StyledApp>
  );
}

export default App;
