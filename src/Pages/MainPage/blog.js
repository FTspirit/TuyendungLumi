import Navigation from "../../App/Navbar";
import BlogCarousel from "../../Layout/BlogCarousel";
function Blog() {
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
      <BlogCarousel />
    </>
  );
}
export default Blog;
