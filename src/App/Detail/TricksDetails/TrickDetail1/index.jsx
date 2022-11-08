import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./TricksDetails.scss";
import Navigation from "../../../Navbar";
import HeadingNavigation from "../../../HeadingNavigation";
import Footer from "../../../Footer/FooterCarousel";
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
          namelink={`thuctapsinh`}
          namebase={`Thực tập sinh`}
          namedirect={`Cách tạo 1 CV ấn tượng khi đi xin việc`}
        />

        <Container>
          <h1 className="trickdetail-heading">
            Cách tạo 1 CV ấn tượng khi đi xin việc
          </h1>
          <div className="trickdetail-des">
            <p className="trickdetail-author"> Phạm Thanh Mai</p>
            <p className="Description">
              CV là viết tắt của "Curriculum Vitae", là bản tóm tắt những thông
              tin về trình độ học vấn, kinh nghiệm làm việc, các kỹ năng liên
              quan tới công việc mà ứng viên muốn ứng tuyển, để lại ấn tượng ban
              đầu cho nhà tuyển dụng về ứng viên mà họ đang xét duyệt.
              <br /> Đối với nhiều bạn sinh viên lần đầu viết CV sẽ gặp không ít
              bỡ ngỡ, phải làm sao viết cho đúng, chuẩn, thể hiện được điểm mạnh
              và lợi thế cá nhân đối với doanh nghiệp mà mình ứng tuyển.
              <br /> Bạn đừng lo nhé, hôm nay Mẹo hay của Lumi sẽ giúp bạn gỡ
              rối phần vào, một cách cơ bản, cực dễ hiểu để viết CV.
              <br />
              Nào hãy bắt đầu nha!
            </p>
            <p className="Description">
              <h1>I. HÌNH THỨC</h1>
            </p>
            <p className="Description">
              <h2>1. Chọn font chữ rõ ràng, dễ đọc.</h2>
              Chọn một trong các kiểu chữ CV tiêu chuẩn: Arial, Tahoma, Times
              New Roman. Sử dụng cỡ chữ 11 đến 12 và khoảng cách đơn. Đối với
              tên và tiêu đề phần của bạn, hãy chọn cỡ chữ 14 đến 16 pt
              <br /> Màu chữ có độ tương phản cao với màu background
              <br /> Lưu ý: Luôn đúng chính tả.
            </p>
            <p className="Description">
              <h2>2. Màu sắc, họa tiết.</h2>
              Chọn một trong các kiểu chữ CV tiêu chuẩn: Arial, Tahoma, Times
              New Roman. Sử dụng cỡ chữ 11 đến 12 và khoảng cách đơn. Đối với
              tên và tiêu đề phần của bạn, hãy chọn cỡ chữ 14 đến 16 pt
              <br /> Màu chữ có độ tương phản cao với màu background
              <br /> Lưu ý: Luôn đúng chính tả.
            </p>
            <p className="Description">
              <h2>1. Chọn font chữ rõ ràng, dễ đọc.</h2>
              Hài hòa, phù hợp với từng tính chất công việc tự chọn. Đừng nhồi
              nhét CV của bạn bằng quá nhiều chi tiết, hoặc đồ họa phô trương.
              Lưu ý răng, càng đơn giản, càng đẹp.
              <br /> Nên tạo những khoảng trắng - sẽ khiến CV nhìn thoáng và
              không bị bức bối vì quá nhiều chi tiết hay chữ.
              <br /> Hầu hết CV được in ra sẽ trên mực đen giấy trắng, quá nhiều
              đồ họa có thể khiến nhà tuyển dụng khó đọc.
            </p>
            <p className="Description">
              <h2>3. Bố cục.</h2>
              Đặt lề khoảng 1,27-2cm.
              <br /> Đảm bảo rằng các tiêu đề CV của bạn đồng nhất - làm cho
              chúng lớn hơn và in đậm.
              <br /> Các dòng đều được căn lề trái, dùng Single Spacing và đồng
              đều cho tất cả các dòng trong văn bản. Các list công việc và
              skills nên trình bày rõ ràng, và có đánh dấu dòng để tạo điểm
              nhấn.
              <br /> Ngoài ra khi gửi mail cho nhà tuyển dụng, bạn nên để định
              dạng là PDF, và chỉ nên gói gọn trong 1 trang trình bày.
            </p>
            <p className="Description">
              <h1>II. NỘI DUNG</h1>
            </p>
            <p className="Description">
              <h2>1. Ảnh chân dung và phần tên .</h2>
              Bức ảnh thể hiện sự ấn tượng ban đầu về hình ảnh bản thân, vì thế
              bạn hãy chọn bức ảnh trông chuyên nghiệp, chất lượng cao, nhưng
              cũng không quá cứng nhắc như ảnh chụp giấy tờ tùy thân.
              <br /> Phần tên là phần nổi bật nhất, vị trí trên cùng của CV, nên
              giữ tên chỉ trong 1 dòng.
            </p>
            <p className="Description">
              <h2>1. Ảnh chân dung và phần tên .</h2>
              Bạn nên lưu ý những điểm sau:
              <br /> Trình bày nổi bật, dễ tìm
              <br /> Đầy đủ, chính xác: thông tin liên lạc, bao gồm: địa chỉ, số
              điện thoại, email. Nên bổ sung link hồ sơ cá nhân để nhà tuyển
              dụng dễ dàng tìm kiếm thêm thông tin về bạn: fb/ linkedin,
              portfolio, web cá nhân (mạng xã hội là 1 ưu điểm nếu bạn biết tận
              dụng làm thương hiệu cá nhân)
              <br /> Những điều cần tránh: Đính kèm địa chỉ fb/ig cá nhân nếu nó
              không thể hiện cho công việc bạn đang ứng tuyển. <br />
              Link đính kèm quá dài, và không được tùy chỉnh URL
            </p>
            <p className="Description">
              <h2>3. Mục tiêu nghề nghiệp/ Mô tả bản thân.</h2>
              Những lưu ý để CV của bạn ấn tượng hơn: Viết ngắn gọn, dưới 100
              từ, 1-2 câu <br />
              Mục tiêu/ mô tả bản thân trả lời cho câu hỏi: Vì sao bạn phù hợp?
              <br />
              Mục tiêu sự nghiệp của bạn là gì? Bạn có thể làm gì để đóng góp
              cho công việc? Ví dụ: Trở thành kỹ sư lập trình nhúng IOT trong
              mảng Smart home.
              <br /> Tóm tắt những điểm mạnh, nổi bật của bạn. Những điều cần
              tránh: Nội dung thiếu trọng tâm, không thể hiện được điểm phù hợp
              của bạn với công việc và doanh nghiệp.
              <br /> Nội dung chung chung, không thể hiện được điểm khác biệt
              của bạn, ví dụ: học hỏi môi trường chuyên nghiệp.
              <br /> Lấy nội dung CV của người khác đưa vào.
            </p>
            <p className="Description">
              <h2>4. Kinh nghiệm làm việc :</h2>
              [Tên vị trí công việc 1] [Thời gian làm việc] [Tên công ty] [Địa
              điểm] [Mô tả trách nhiệm, thành tích]
              <br /> Điều bạn nên làm: Sắp xếp theo thứ tự thời gian, từ gần
              nhất đến xa nhất.
              <br /> Nêu rõ tên công ty, thời gian bắt đầu - kết thúc công việc.
              <br />
              Trả lời được những câu hỏi: Công việc bạn đã làm là gì? Bạn đã làm
              thế nào? Giá trị bạn tạo ra cho công việc là gì?
              <br /> Tận dụng những con số khi mô tả trách nhiệm và thành tích.
              <br />
              Tận dụng những từ khóa liên quan đến công việc ứng tuyển. <br />
              Bạn cần tránh: <br />
              Viết dài dòng như một đoạn văn Đề cập kinh nghiệm không liên quan.
              Chung chung, không đưa ra được cụ thể nội dung công việc. <br />
              Kinh nghiệm liên quan nhưng đã quá lâu không làm.
            </p>
            <p className="Description">
              <h2>5. Học vấn/ Bằng cấp, chứng chỉ:</h2>
              Học vấn/ bằng cấp: Theo thứ tự bằng cao ở trên, thấp ở dưới.
              <br /> Chứng chỉ: Theo thứ tự thời gian trên bằng. <br /> Những
              điều nên làm: <br />
              Nêu điểm số môn chuyên ngành liên quan, nếu là điểm giỏi/ nổi
              trội. <br />
              Học bổng, đề án, nghiên cứu khoa học hoặc những khóa học liên quan
              đến vị trí ứng tuyển. <br /> Chứng chỉ ngoại ngữ, kỹ năng, khóa
              học… Không nên: Ghi quá trình học tập từ các cấp phổ thông.
            </p>
            <p className="Description">
              <h2>6. Kỹ năng:</h2>
              Nên: <br />
              Phân biệt kỹ năng chuyên môn và kỹ năng mềm <br />
              Đặt những kỹ năng quan trọng và liên quan đến công việc nhất lên
              trước. <br />
              Không nên: <br />
              Dùng các thang đo kỹ năng một cách chung chung, không rõ ràng. Nêu
              những kỹ năng mà bạn không có. <br />
              Dùng từ ngữ mơ hồ, không rõ ràng.
            </p>
            <p className="Description">
              <h2>7. Các mục khác (Sở thích, sở trường, các hoạt động XH) :</h2>
              Nên: <br />
              Thể hiện tính cách, sở thích nổi bật và tài lẻ, phù hợp với công
              việc <br />
              Miêu tả ngắn gọn để làm rõ hơn sở thích và đam mê cá nhân <br />
              Thêm nguồn tham vấn (References) <br />
              Không nên: <br />
              Đưa ra những thông tin chung chung, gây loãng CV, tốn diện tích.
              <br />
              Sở thích trái ngược với đặc thù doanh nghiệp, công việc mà bạn
              đang ứng tuyển.
            </p>
            <p className="Description"></p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
export default BlogPage1;
