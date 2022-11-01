import Navigation from "../../App/Navbar";
import LUMIERCarousel from "../../Layout/LUMIERCarousel";
function LumiLife() {
  const bgcolor = {
    transperant: {
      backgroundColor: "transparent",
    },
    color: {
      backgroundColor: "#efefef",
    },
  };
  return (
    <>
      <Navigation style={bgcolor.color} />
      <LUMIERCarousel />
    </>
  );
}
export default LumiLife;
