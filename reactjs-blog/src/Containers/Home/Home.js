import "./Home.css";
import Card from "../../Components/Card/Card";

const Home = () => {
  return (
    <>
      <h1 className="home-title"> Tous les articles</h1>
      <div className="container-cards">
        <Card>
          <h2>Hello World</h2>
        </Card>
      </div>
    </>
  );
};

export default Home;
