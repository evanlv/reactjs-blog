import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";

const Form = () => {
  const [article, setArticle] = useState({ title: "", body: "" });

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADDARTICLE",
      payload: article,
    });
    setArticle({
      title: "",
      body: "",
    });
  };

  const handleInputs = (e) => {
    if (e.target.classList.contains("input-title")) {
      const newObjState = { ...article, title: e.target.value };
      setArticle(newObjState);
    } else if (e.target.classList.contains("input-body")) {
      const newObjState = { ...article, body: e.target.value };
      setArticle(newObjState);
    }
  };

  return (
    <>
      <h1 className="title-form">Add an article</h1>
      <form className="container-form" onSubmit={handleForm}>
        <label htmlFor="title">Title</label>
        <input
          className="input-title"
          type="text"
          id="title"
          placeholder="enter your name"
          value={article.title}
          onChange={handleInputs}
        />

        <label htmlFor="article">Your article</label>
        <textarea
          className="input-body"
          id="article"
          placeholder="Your article"
          value={article.body}
          onChange={handleInputs}
        />

        <button>Send it</button>
      </form>
    </>
  );
};

export default Form;
