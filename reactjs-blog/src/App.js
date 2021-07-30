import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import AddArticle from "./Containers/AddArticle/AddArticle";
import Contact from "./Containers/Contact/Contact";
import Article from "./Containers/Article/Article";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-article" exact component={AddArticle} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/article" exact component={Article} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
