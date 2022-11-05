import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../Blog2/Blog2.scss";
import Navigation from "../../App/Navbar";
import HeadingNavigation from "../../App/HeadingNavigation";
import blogcover from "../../Asset/image/blogcover1.png";
import Footer from "../../App/Footer/FooterCarousel";
function Blog1() {
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
          namedirect={`Hoạt động Review Sách`}
        />
        <h1 className="trickdetail-heading">Hoạt động Review Sách</h1>

        <Container>
          <div className="trickdetail-des">
            <p className="trickdetail-author"> Phạm Thanh Mai</p>
            <p className="Description">
              Đến hẹn lại lên, buổi Book Review vừa qua đã mang tới những cuốn
              sách tâm đắc nhất mà các thành viên của team đã đọc trong tháng
              07. Từ những trang sách, qua mỗi góc nhìn, các thành viên team
              marketing đã dẫn dắt mọi người đi qua những câu chuyện khác nhau,
              rồi âm thầm gieo vào tâm hồn mỗi người một mầm cây từ lúc nào
              không hay. Hi vọng, qua từng phần review sách và từ những hạt mầm
              nhỏ bé, mỗi cá nhân đã học hỏi được ít nhiều kiến thức bổ ích cũng
              như biết cách vận dụng, chăm sóc đúng cách để đạt hiệu quả trong
              công việc và cuộc sống. Chúc cho tất cả chúng ta, những ngày tiếp
              theo luôn vui vẻ và tìm được cho mình lý tưởng sống tốt đẹp để dám
              đương đầu với mọi thử thách phía trước. Giống như mầm cây nhỏ chui
              ra từ tối tăm để vươn cao đón ánh nắng mặt trời.
            </p>
            <div className="des-img">
              <img
                src="https://lh3.googleusercontent.com/n-tTEwOLsrALPDTPTWmscF9bsHivnNiHbShu10131Vqnba-iszSWESZjHm1JUZOET3MK9idSVTGaRqiTDv8ql5DSuD9M4HkU3LPabQ2KPcVr4SBCvLZV9-ocvf4nHbqmAT4DEp6qZxKeO1aIO2qCfWKOcSN-IgPfSlegOG0ZqmzNF3cVK8h_SA3haH17ng"
                width="661"
                height="496"
              />

              <img
                src="https://lh6.googleusercontent.com/eFofge5TdwtEJ6xyAFRoSOuyVLFMFxk7JU8UXM0tholoJGmrcXu8-P_efyiWKopDnGBjiuekvmCKdsj1qrFFxVaNP6koWXFGfNkmvaptBqald76jjHshDjzG0SzwzAGmTLtzbfqJir_GOqTxG2BSWnkMSDWNVugH2LU7el_c-4hJ1seSAWDsRCfHyJVk2w"
                width="526"
                height="760"
              />
              <img
                src="https://lh3.googleusercontent.com/7XWT8ly0EUtNpXvQybFpEUPtCpF5DZ4BWl5vngDJjAnuDd3lvO98cMX1OkUJbni2QuD3HSU2hwu6_jnlp8MywA8TWJgZOoli8kgddyz-WEWsOYwuKT4Kav8JvRyHlsFxbRd-0rHDDCQ5W89MKOQUTyA767iVTBU4B3fQrJee6OKMxwGVXIdYsFCqDoKR5A"
                width="602"
                height="451"
              />
              <img
                src="https://lh5.googleusercontent.com/alHlli5UbhIf0miDb5IOB4jv3N9UAe9SrsjIy1wdh9kvoN0mA4aOHnN6TT1agchFmcDxhuUAGICH6ZzfckDmop_nBQFnOtpZmdBWNJzo0LB-F4_bH_iLtpOnT1mZ-n-RB5G5Opz77fHHSUHiiBwyeG2m_2JDqBYi8OtHbwTJJQ8acKBi6E59HT3WijYQkA"
                width="602"
                height="536"
              />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
export default Blog1;
