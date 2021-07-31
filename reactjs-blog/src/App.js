import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./Containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Containers/Contact/Contact";
import Article from "./Containers/Article/Article";
import AddArticle from "./Containers/AddArticle/AddArticle";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-article" exact component={AddArticle} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/articles/:slug" exact component={Article} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
