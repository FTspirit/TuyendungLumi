import Navigation from "../../App/Navbar";
import RecruitDetail from "../../App/Detail/RecruitDetail";
import Footer from "../../App/Footer/FooterCarousel";

function RecruitDetailPage({ data }) {
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
      <RecruitDetail props={data} />
      <Footer />
    </>
  );
}
export default RecruitDetailPage;
