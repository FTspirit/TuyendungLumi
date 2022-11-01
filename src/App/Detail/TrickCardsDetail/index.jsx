import HeadingSection from "../../Component/HeadingSection";
import Post from "../../Post";
import Footer from "../../Footer/FooterCarousel";
import Navigation from "../../Navbar";

import "./TrickCardDetail.scss";
function TrickCardsDetail() {
  const colorheading = {
    color: "#333",
  };
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
      <div>
        <Navigation style={bgcolor.color} />
        <div className="TrickCardsDetail">
          <HeadingSection description={`Mẹo hay`} style={colorheading} />
          <Post />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default TrickCardsDetail;
