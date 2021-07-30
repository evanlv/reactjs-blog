import "./Form.css";

const Form = () => {
  return (
    <>
      <h1 className="title-form">Add an article</h1>
      <form className="container-form">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="enter your name" />

        <label htmlFor="article">Your article</label>
        <textarea id="article" placeholder="Your article" />

        <button>Send it</button>
      </form>
    </>
  );
};

export default Form;
