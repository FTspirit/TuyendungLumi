import Navigation from "../../App/Navbar";
import RecruitCarousel from "../../Layout/RecruitCarousel";
function Recruit() {
  const bgcolor = {
    transperant: {
      backgroundColor: "transparent",
    },
    color: {
      backgroundColor: "#fff",
    },
  };
  return (
    <>
      <Navigation style={bgcolor.transperant} />
      <RecruitCarousel />
    </>
  );
}
export default Recruit;
