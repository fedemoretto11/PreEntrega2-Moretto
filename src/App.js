import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Routes/NavBar";
import Main from "./components/Routes/Main";
import Footer from "./components/Routes/Footer";
import ContextComponent from "./components/Context/ContextComponent";



function App() {


  return (
    <BrowserRouter>
      <ContextComponent>
        <NavBar />
        <Main />
        <Footer />
      </ContextComponent>
    </BrowserRouter>
  );
}

export default App;