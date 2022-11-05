import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Blog2.scss";
import Navigation from "../../App/Navbar";
import HeadingNavigation from "../../App/HeadingNavigation";
import blogcover from "../../Asset/image/blogcover1.png";
import Footer from "../../App/Footer/FooterCarousel";
function Blog2() {
  const bgcolor = {
    transperant: {
      backgroundColor: "transparent",
    },
    color: {
      backgroundColor: "#fff",
    },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation style={bgcolor.color} />

      <div className="trickdetail-container">
        <HeadingNavigation
          namelink={`doisong`}
          namebase={`Đời sống LUMIER`}
          namedirect={`Hành trình ra khơi - Lumi Hạ Long 2022`}
        />
        <h1 className="trickdetail-heading">
          Hành trình ra khơi - Lumi Hạ Long 2022
        </h1>

        <Container>
          <div className="trickdetail-des">
            <p className="trickdetail-author"> Phạm Thanh Mai</p>
            <p className="Description">
              Sự kiện kỷ niệm mừng thành lập 10 năm Lumi Việt Nam. <br />
              Hành trình tham gia với hơn 200 thành viên bao gồm CBNV Lumi và
              các NPP trên 62 tỉnh thành trên cả nước. Với điểm đến Hạ Long, là
              món quà tuyệt diệu của thiên nhiên mang lại, đây là địa danh vô
              cùng ý nghĩa nhân dịp kỷ niệm 10 năm thành lập của Lumi.
              <br /> Không chỉ là hành trình thay lời cảm ơn sâu sắc, mà còn là
              minh chứng cho sự gắn bó, thể hiện tinh thần một nhà của Lumi và
              cộng đồng nhà thông minh Lumi.
              <br /> Hành trình mang lại rất nhiều cung bậc cảm xúc, với không
              khí trong lành của biển cả, trải nghiệm đêm nghỉ dưỡng tuyệt vời
              trên du thuyền sang trọng tại Vịnh Hạ Long, chèo kayak, giao lưu
              văn nghệ, game mini, câu mực, nhảy tàu bơi biển.. cho tới không
              khí bùng nổ với tiệc Gala Dinner đặc biệt cùng một đêm sôi động
              không ngủ tại Thành phố Hạ Long. Cùng với đó là những trận cầu
              đỉnh cao, một ĐẶC SẢN không thể thiếu khắp 3 miền của cộng đồng
              Lumi. Hành trình khép lại với nhiều ký ức đẹp và điều tuyệt vời
              hơn nữa là cảm nhận được tình cảm của các thành viên Nhà Thông
              Minh Lumi dành cho nhau.
              <br /> Xin chúc toàn thể các anh chị em CBNV Lumi, các quý anh chị
              NPP Lumi và các gia đình Việt Nam một ngày lễ vui tươi, mạnh khỏe,
              an toàn và ý nghĩa. <br />
              LUMI VIỆT NAM XIN TRÂN TRỌNG CẢM ƠN!
            </p>
            <div className="des-img">
              <img
                src="https://lh6.googleusercontent.com/dIfYzbT6bn3kexMF6jOWjanZh_lUDaYniB5z9fbl_YZ5ZGi5Oibub5F88gd_8aX88npD8Ewm8xa72lExiIZWo3QScyC4ecwUEUYWfpKgvep4XuoRkX_ePkPHOw0MGkFRVWD7g9WsOqZ7wmfD6d5kBhbqLSX_MqGmRQXkfJ5SYFq7ArS7WfVBnv_OLRC5OA"
                width="602"
                height="239"
              />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
export default Blog2;
