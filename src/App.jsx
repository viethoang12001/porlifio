import Experties from "./component/Experties/Experties";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Works from "./component/Works/Works";
import Portfolio from "./component/Portfolio/Portfolio";
import css from "./styles/app.module.scss";
import People from "./component/People/People";
import Footer from "./component/Footer/Footer";
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Works />
      <Portfolio />
      <People />
      <Footer /> 
    </div>
  );
};

export default App;
