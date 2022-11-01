import Navigation from "../../App/Navbar";
import LearningWithLumiDetail from "../../App/Detail/LearningWithLumi";
export default function TricksDetailPage() {
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
      <Navigation style={bgcolor.color} />
      <LearningWithLumiDetail />
    </>
  );
}
