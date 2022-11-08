import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../BlogPage1/BlogPage1.scss";
import Navigation from "../../App/Navbar";
import HeadingNavigation from "../../App/HeadingNavigation";
import Footer from "../../App/Footer/FooterCarousel";
function BlogPage2() {
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
          namedirect={`Khoảng trống kiến thức giữa sinh viên IT và Lâp trình viên`}
        />

        <Container>
          <h1 className="trickdetail-heading">
            Hiệu ứng Dunning Kruger và sự ảo tưởng sức mạnh mà lập trình viên
            nên tránh
          </h1>
          <div className="trickdetail-des">
            <p className="trickdetail-author"> Phạm Thanh Mai</p>
            <p className="Description">
              Do ngành IT đang dần thành một ngành hot ở Việt Nam (việc nhẹ
              lương cao, nhu cầu tuyển dụng nhiều), nhiều bạn sinh viên đổ xô
              vào chọn học các ngành công nghệ thông tin.
              <br />
              Tuy nhiên, các bạn sinh viên mới ra trường lại dễ gặp phải tình
              trạng thất nghiệp, hoặc khó kiếm việc làm. Nguyên nhân là do đâu??
              Chẳng phải trường Đại Học nào cũng bảo “Vào trường tao học xong ra
              trường làm IT là lương ngàn đô” đấy sao?
              <br /> Nguyên nhân cơ bản nhất là kiến thức được dạy trong trường
              không bao giờ đủ. Có một khoảng trống lớn về kiến thức giữa sinh
              viên IT mới ra trường và một lập trình viên “thực thụ”.
            </p>
            <p className="Description">
              Trong bài viết này, chúng ta sẽ tìm hiểu và tìm cách lấp đầy
              khoảng trống này nhé. Những thứ các bạn sinh viên thiếu bao gồm:
              <ul>
                <li>Kĩ năng cứng</li>
                <li>Kĩ năng xin việc</li>
                <li>Kĩ năng mềm</li>
              </ul>
            </p>
            <p className="Description">
              <h1>Kĩ năng cứng</h1>
            </p>
            <p className="Description">
              Những kĩ năng cứng này không có gì quá cao siêu như thuật toán,
              AI, data mining, IoT, … mà chỉ là những thứ đơn giản như sau:
            </p>
            <p className="Description">
              <ul>
                <li>
                  Source Control: Thay vì viết code theo kiểu “thân ai nấy lo”,
                  các công ty sử dụng Source Control để quản lý toàn bộ source.
                  Hai source control phổ biến nhất là Git và SVN (Một số công ty
                  dùng TFS của Microsoft). Các bạn có thể tự tìm hiểu về Git,
                  SVN rất dễ dàng bằng cách google git tutorial.
                </li>
                <li>
                  Quy trình làm việc: Hiện nay, đa phần các công ty áp dụng qui
                  trình Scrum, dựa trên các nguyên lý Agile. Thay vì đợi vào
                  công ty mới học, các bạn có thể lên Scrum Training để tự học
                  thông qua các video rất bổ ích. (Hoặc trong sách Code Dạo Ký
                  Sự cũng có 2 bài viết rất cụ thể về Scrum và Agile).
                </li>
                <li>
                  Cách đọc và viết code: Khi đi làm, phần lớn công việc của bạn
                  sẽ là bảo trì dự án, viết thêm chức năng nên kĩ năng đọc code
                  là hết sức quan trọng. Ngoài ra, ta bắt buộc phải viết code rõ
                  ràng, dễ đọc dễ hiểu dễ bảo trì. Những điều này không thể học
                  được ngày một ngày hai, mà phải trải qua quá trình rèn luyện.
                  (Các bạn có thể tìm đọc thử Clean Code để tìm hiểu thế nào là
                  code sạch).
                </li>
                <li>
                  Framework: Trường đại học chỉ dạy cho bạn những kiến thức cơ
                  bản. Nhưng bản thân các công ty lại yêu cầu sinh viên phải có
                  kiến thức, kinh nghiệm về framework. Do đó, đừng chỉ mải mê
                  học ngôn ngữ mà hãy chọn framework nào hay ho để học nhé.
                </li>
                <li>
                  Tiếng Anh: Yếu ngoại ngữ sẽ làm bạn vụt mất rất nhiều cơ hội,
                  vì tiếng Anh khá quan trọng trong ngành IT. Bạn cần tiếng Anh
                  để đọc hiểu tài liệu, tự học, giao tiếp trao đổi với khách
                  hàng. Mức lương cho các lập trình viên giỏi tiếng Anh dĩ nhiên
                  cũng sẽ nhỉnh hơn nhé.
                </li>
              </ul>
            </p>
            <p className="Description">
              <h1>Kĩ năng xin việc</h1>
            </p>
            <p className="Description">
              Có kĩ năng tốt nhưng thiếu kĩ năng xin việc thì dĩ nhiên là bạn
              cũng sẽ… thất nghiệp. Các kĩ năng xin việc cơ bản cũng khá đơn
              giản:
            </p>
            <p className="Description">
              <ul>
                <li>
                  Tìm hiểu thị trường: Mình đã nhiều lần nghe câu hỏi “Học ngôn
                  ngữ lập trình gì bây giờ? Muốn biết câu hỏi này, bạn cần đọc
                  các mẫu thống kê của itviec, vietnamwork để biết ngôn ngữ/công
                  nghệ gì đang hot nhất (Gợi ý nhé, JavaScript giờ đang hot lắm
                  đấy)
                </li>
                <li>
                  Định giá bản thân: Muốn biết mức lương mà mình xứng đáng được
                  nhận là bao nhiêu, đầu tiên các bạn cần xác định những kiến
                  thức mình biết và số năm kinh nghiệm. Sau đó, lên những trang
                  như itviec, vietnamwork để tham khảo mức lương trung bình cho
                  vị trí đó là bao nhiêu nhé.
                </li>
                <li>
                  Viết CV và Trả lời phỏng vấn: CV là thứ giúp nhà tuyển dụng
                  biết về bạn, giúp bạn vào vòng phỏng vấn. Để biết cách viết CV
                  cho chuẩn, cách chuẩn bị và trả lời phỏng vấn, hãy xem lại
                  series Muôn nẻo đường tìm việc trên blog nhé.
                </li>
              </ul>
            </p>
            <p className="Description">
              Hi vọng qua bài viết này, các bạn sinh viên có thể nhận ra được
              những lỗ hổng kiến thức của mình, đồng thời tự tìm hiểu và lấp đầy
              những khoảng trống này nhé.
            </p>
            <div className="des-img">
              <img
                src="https://lh3.googleusercontent.com/4DZsxW9_L-mxrgm9n3kdT1k8zKQKrwituknv2UelaxmWgIwyDeQozPetmUcKoaEwa97Yn0Y2C1o9n3EaVUvJe8oj0t3np1yVFBIXVuSKX8OQRSCqQ8zdk3Mm1FGvVwojUN5zZx79SMA38VNv7gNLGd0jeBbO9edJ7EKVVeSV7KshXRpeTgidbfji_Sun6A"
                width="602"
                height="387"
              />
            </div>
            <p className="Description">
              <h1>Lời cảm ơn:</h1>
            </p>
            <p className="Description">
              Một số bài viết trong mục Blog được sưu tầm trên Google và các
              website, đôi khi những nguồn đó không được trích dẫn tên tác giả.
              Vì vậy Lumi sẽ để Bút danh là Sưu tầm. Trong trường hợp đó, hoặc
              sai tên tác giả, chúng tôi vô cùng xin lỗi vì sự cố này. Tác giả
              các bài viết vui lòng liên hệ với chúng tôi để Lumi bổ sung tên
              các bạn vào. Chúng tôi hoàn toàn tôn trọng các bạn. Lumi cảm ơn
              những giá trị các bạn đã chia sẻ vì cộng đồng.
            </p>
            <p className="Description"></p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
export default BlogPage2;
