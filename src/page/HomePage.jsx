import StartingPageContent from "../component/StartingPage/StartingPageContent";
import Navmain from "../component/Nav/Navmain";
const HomePage = () => {
  return (
    <>
      <div className="map">
        <StartingPageContent />
      </div>
      <Navmain />
    </>
  );
};

export default HomePage;
