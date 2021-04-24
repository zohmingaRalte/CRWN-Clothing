import Directory from "../../components/directory/directory.jsx";
import "./homepage.scss";

const HomePage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
