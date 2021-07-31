import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import { getArticles } from "../../redux/articles/articleReducer";
import Card from "../../Components/Card/Card";

const Home = () => {
  const { articles } = useSelector((state) => ({
    ...state.articleReducer,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(getArticles());
    }
  }, [articles.length, dispatch]);

  return (
    <>
      <h1 className="home-title"> All articles</h1>
      <div className="container-cards">
        {articles.map((item) => {
          return (
            <Card key={uuid()}>
              <h2>{item.title}</h2>
              <Link
                to={{
                  pathname: `articles/${item.title
                    .replace(/\s+/g, "-")
                    .trim()}`,
                  state: {
                    title: item.title,
                    body: item.body,
                  },
                }}
              >
                Read article
              </Link>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Home;
