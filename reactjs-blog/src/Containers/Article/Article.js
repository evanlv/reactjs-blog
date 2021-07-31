import { useLocation } from "react-router-dom";

import "./Article.css";

const Article = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="article-content">
      <h2>Your article: {location.state.title}</h2>
      <p>{location.state.body}</p>
    </div>
  );
};

export default Article;
