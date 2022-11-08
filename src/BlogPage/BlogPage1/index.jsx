import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./BlogPage1.scss";
import Navigation from "../../App/Navbar";
import HeadingNavigation from "../../App/HeadingNavigation";
import Footer from "../../App/Footer/FooterCarousel";
function BlogPage1() {
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
          namelink={`blog`}
          namebase={`Blog`}
          namedirect={`Hiệu ứng Dunning Kruger và sự ảo tưởng sức mạnh mà lập trình viên nên tránh`}
        />

        <Container>
          <h1 className="trickdetail-heading">
            Hiệu ứng Dunning Kruger và sự ảo tưởng sức mạnh mà lập trình viên
            nên tránh
          </h1>
          <div className="trickdetail-des">
            <p className="trickdetail-author"> Phạm Thanh Mai</p>
            <p className="Description">
              Hiệu ứng Dunning & Kruger (Dunning & Kruger Effect) là một trong
              những khái niệm mang tính nền tảng của Product Design (bao trùm
              luôn cả UX và UI Design).
              <br /> Tuy nhiên trước khi viết về những ảnh hưởng của hiệu ứng
              Dunning-Kruger lên UX Design, trong bài này tôi sẽ giới thiệu
              chung về hiệu ứng Dunning & Kruger và những “ứng dụng” của nó
              trong cuộc sống.
              <br />
              Khái niệm này được được đặt theo tên của 2 giáo sư chuyên về
              psychology người Mỹ là David Dunning và Justin Kruger.
            </p>
            <div className="des-img">
              <img
                src="https://lh6.googleusercontent.com/K6qWzXecxD8if_ArRu4yY5FbaYBpsgayP3rQgfcg2K-Sp0AC2iYbYzvYm46ePN6SZ0g0-aG8uvRjH7yxoYXZsuq8-9DXZYCtCgt47ll9KJpbfx4BnUH5gVj3SBAaUrERfnIuZx43JmYL28Eo1WfNcUohQ2ycjnIPjCnr6OVssgzufOA15a677cBp06gT8Q"
                width="602"
                height="339"
              />
            </div>
            <p className="Description">
              Hiệu ứng Dunning & Kruger mô tả về mối tương quan giữa sự hiểu
              biết của một người về một lĩnh vực và mức độ tự tin của họ trong
              lĩnh vực đó.
            </p>
            <p className="Description">
              Cụ thể, Dunning & Kruger mô tả quá trình này diễn ra như sau:
            </p>
            <p className="Description">
              <ul>
                <li>
                  Khi chưa biết gì về lĩnh vực nào đó thì mức độ tự tin của một
                  người sẽ bằng 0 → điều này dễ hiểu và không có gì để bàn.
                </li>
                <li>
                  Vấn đề bắt đầu thú vị khi những người bắt đầu biết sơ sài về
                  một lĩnh vực nào đó thì thường có xu hướng lầm tưởng là mình
                  đã rất giỏi trong lĩnh vực ấy. Họ rất tự tin về những phát
                  biểu của mình, hay thậm chí đi chỉ dạy người khác. Giai đoạn
                  này gọi là
                  <span style={{ fontWeight: `700` }}>Peak of Mt. Stupid</span>–
                  Đỉnh cao của ngu ngốc.
                </li>
                <li>
                  Khi bắt đầu đào sâu nghiên cứu, sự tự tin này ngay lập tức rớt
                  xuống gần như bằng không. Giai đoạn này gọi là{" "}
                  <span style={{ fontWeight: `700` }}> Valley of Despair </span>
                  – Thung lũng của sự thất vọng.
                </li>
                <li>
                  Nếu họ vẫn tiếp tục tìm hiểu, mỗi ngày sự hiểu biết của họ sẽ
                  mỗi tăng – song song đó sự tự tin của họ dần tăng dần trở lại.
                  Giai đoạn này gọi là{" "}
                  <span style={{ fontWeight: `700` }}>
                    Slope of Enlightment
                  </span>
                  – Con dốc của sự khai sáng.
                </li>
                <li>
                  Việc tăng dần này sẽ tiếp tục cho đến khi người đó trở thành
                  một chuyên gia, khi mà họ đã hiểu tường tận từ trong ra ngoài
                  lĩnh vực đó. Lúc này sự tự tin cũng sẽ tăng đến một mức độ ổn
                  định. Giai đoạn này gọi là
                  <span style={{ fontWeight: `700` }}>
                    Plateau of Sustainability
                  </span>
                  – Cao nguyên của sự bền vững. (Tuy nhiên, dù mức độ tự tin ở
                  giai đoạn này có cao thì cũng hiếm khi nào cao bằng Peak of
                  Mt. Stupid).
                </li>
              </ul>
            </p>
            <p className="Description">
              <h2>#Vài ví dụ về hiệu ứng Dunning & Kruger</h2>
            </p>
            <p className="Description">
              Hiệu ứng Dunning & Kruger xảy ra gần như khắp nơi. Chúng ta ít
              nhiều ai cũng từng đi qua những giai đoạn này.
            </p>
            <p className="Description">
              Trong đó có một lĩnh vực mà hiệu ứng Dunning & Kruger rất thường
              xảy ra, đó chính là… khởi nghiệp.
            </p>
            <p className="Description">
              Nhiều bạn trẻ nghe những câu chuyện thành công + đọc thêm vài
              quyển sách về quản trị và đầu tư. Lúc này các bạn ấy chỉ vừa bắt
              đầu tìm hiểu về quản trị và điều hành, rất nhiều nhiệt huyết nhưng
              lại không ý thức được mình đang ở ngay giai đoạn Peak of Mt.
              Stupid. Nếu không tỉnh táo + có người can = thì thường dẫn đến kết
              quả là… khởi nghiệp.
            </p>
            <p className="Description">
              Điều này lý giải vì sao tỉ lệ thất bại trong những trường hợp này
              rất cao. Và cũng lý giải vì sao có rất nhiều người dẫu dày dạn
              kinh nghiệm vẫn rất e dè với chuyện tự đứng ra khởi nghiệp.
            </p>
            <p className="Description">
              Một ví dụ khác là lái xe. Theo thống kê thì với những người mới
              lái xe, nếu lỡ có xảy ra tai nạn thì cũng chỉ là những va quẹt
              nhỏ, không quá nguy hiểm.
            </p>
            <p className="Description">
              Giai đoạn nguy hiểm nhất chính là khoảng thời gian đã lái được từ
              2 – 3 năm, những người này được gọi là các cocky driver. Đây là
              giai đoạn họ nghĩ rằng mình đã là những tay lái lụa và thường hay
              thích “biểu diễn” những kỹ năng lái xe của mình — tuy nhiên họ lại
              chưa đủ kinh nghiệm để có được những phản xạ mà chỉ những người
              lái xe lâu năm mới có.
            </p>
            <p className="Description">
              Những tai nạn xảy ra trong giai đoạn này thường là tai nạn lớn,
              xảy ra ở tốc độ cao.
            </p>
            <p className="Description">
              Trong lĩnh vực đầu tư có câu nói rất hay là:
              <span style={{ fontStyle: `italic` }}>
                “When your taxi driver is telling you to buy stock, you know
                it’s time to sell” – Tạm dịch: “Khi người tài xế taxi khuyên bạn
                nên đầu tư vào chứng khoán, bạn biết đó là thời điểm nên bán”
              </span>
              .
            </p>
            <p className="Description">
              Hoặc như trào lưu cryptocurrency năm ngoái cũng có một câu tương
              tự:
              <span style={{ fontStyle: `italic` }}>
                “When the housewives become a crypto expert, it’s time to run” –
                Tạm dịch: “Khi các bà nội trợ cũng bắt đầu trở thành chuyên gia
                về crypto, bạn biết đó là lúc nên tháo chạy”.
              </span>
            </p>
            <p className="Description">
              (Lưu ý là các ví dụ trên không có ý xúc phạm những người lái taxi
              hay những bà nội trợ, người ta chỉ mượn hình ảnh đó để chỉ những
              người đang trong Peak of Mr. Stupid).
            </p>
            <p className="Description">
              Khi biết về hiệu ứng Dunning & Kruger, ta sẽ tự nghiệm ra được rất
              nhiều ví dụ thú vị khác từ cuộc sống hàng ngày.
            </p>
            <p className="Description">
              <h2>Những lợi ích khi hiểu về Dunning & Kruger Effect</h2>
            </p>
            <p className="Description">
              Hiểu về hiệu ứng này sẽ giúp được cho chúng ta ý thức được bức
              tranh toàn cảnh trong quá trình phát triển chuyên môn. Nhờ đó giúp
              ta ý thức được rằng:
            </p>
            <p className="Description">
              <ul>
                <li>
                  Khi mới tìm hiểu về một lĩnh vực nào đó, chúng ta biết mình
                  đang đi qua đỉnh “Peak of Mt. Stupid”. Nhờ đó chúng ta tự biết
                  rằng giai đoạn này tốt nhất là nên im lặng và tiếp tục trau
                  dồi kiến thức.
                </li>
                <li>
                  Chúng ta cũng biết rằng không nên nghe theo lời những đứa đang
                  ở đỉnh cao Mt. Stupid này (như trong ví dụ về đầu tư bên
                  trên).
                </li>
                <li>
                  Trong công việc, nhờ hiệu ứng Dunning & Kruger chúng ta biết
                  rằng những kẻ nói nhiều nhất, lớn họng nhất trong công ty
                  không phải lúc nào cũng đúng (thường là ngược lại).
                </li>
                <li>
                  Và nhờ hiệu ứng Dunning & Kruger, ta biết rằng để trở nên tự
                  tin (mà không ngu xuẩn), ta phải là một specialist – chọn cho
                  mình những lĩnh vực yêu thích và đi đến tận cùng của lĩnh vực
                  đó. Không nên là generalist – như cái tivi kênh nào cũng bắt
                  nhưng không có kênh nào nét.
                </li>
              </ul>
            </p>
            <p className="Description">
              <h2>Khi nào ta nên mở miệng trở lại?</h2>
            </p>
            <p className="Description">
              Như vừa viết bên trên:
              <span style={{ fontWeight: `700` }}>
                khi mới biết về một lĩnh vực gì đó thì tốt nhất là nên im lặng
                và âm thầm tiếp tục trau dồi.
              </span>
            </p>
            <p className="Description">
              Vậy câu hỏi sẽ là: “Đến một lúc chúng ta đã tích lũy được khá
              nhiều kinh nghiệm, làm sao để biết rằng những gì chúng ta biết đã
              đủ giá trị để có thể chia sẻ ra cho xung quanh? Vì ai cũng biết,
              chia sẻ chính là cách nhanh nhất để nâng cao kiến thức”.
            </p>
            <p className="Description">
              Hiểu về hiệu ứng Dunning & Kruger rồi thì trả lời câu hỏi này rất
              đơn giản: Khi nào còn chưa rớt xuống cái thung lũng kia (Valley of
              Despair) nghĩa là chúng ta vẫn còn đang ở trên đỉnh Mt. Stupid,
              hãy tiếp tục im lặng. Khi nào rớt xuống rồi tự khắc ta sẽ biết –
              và qua thời gian cũng sẽ tự có câu trả lời là có nên mở miệng ra
              hay chưa.
            </p>
            <p className="Description">
              Nhìn xung quanh các quán cà phê, quán nhậu ở Việt Nam. Ta dễ dàng
              thấy được rất nhiều “chuyên gia” đang ngồi trên đỉnh Mt. Stupid và
              bàn tán về đủ mọi chủ đề: từ chiến lược quân sự ở Afghanistan, đến
              chiến tranh thương mại Mỹ Trung, đến sách lược đầu tư chứng
              khoán,…
            </p>
            <p className="Description">
              Đừng trở thành một trong số đó! Và nếu có lỡ rơi vô khung cảnh như
              vậy thì cách hay nhất là: trừ khi chúng ta là cố vấn quân sự của
              Lầu Năm Góc, tiến sĩ kinh tế vĩ mô hoặc chuyên gia phân tích của
              JPMorgan,… còn không thì tốt nhất nên im lặng.
            </p>
            <p className="Description">
              Mà thật ra nếu có đang giữ các vị trí trên mà lỡ ngồi trong bàn
              nhậu như vậy thì tốt nhất cũng nên im lặng 🙂
            </p>
            <p className="Description">
              Lời cảm ơn: Một số bài viết trong mục Blog được sưu tầm trên
              Google và các website, đôi khi những nguồn đó không được trích dẫn
              tên tác giả. Vì vậy Lumi sẽ để Bút danh là Sưu tầm. Trong trường
              hợp đó, hoặc sai tên tác giả, chúng tôi vô cùng xin lỗi vì sự cố
              này. Tác giả các bài viết vui lòng liên hệ với chúng tôi để Lumi
              bổ sung tên các bạn vào. Chúng tôi hoàn toàn tôn trọng các bạn.
              Lumi cảm ơn những giá trị các bạn đã chia sẻ vì cộng đồng.(theo:
              Toidicodedao)
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
export default BlogPage1;
