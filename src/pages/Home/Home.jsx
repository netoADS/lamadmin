import { Sidebar } from "../../components/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">Container</div>
    </div>
  );
};

export default Home;
