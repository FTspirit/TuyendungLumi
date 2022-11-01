import HeadingSection from "../HeadingSection";
import Container from "react-bootstrap/Container";

import "./TrainingProcessDetail.scss";
function TrainingProcessDetail() {
  const styledColor = {
    color: "#333",
  };
  return (
    <>
      <div>
        <HeadingSection
          description={`Chi tiết lộ trình đào tạo`}
          style={styledColor}
        />
        <Container className="TrainingProcessDetail">
          <div>
            <h1>Onboard:</h1>
            <p>
              Chúc mừng bạn trở thành thành viên của đại gia đình Lumi. Ngày đầu
              tiên đi làm, bộ phận nhân sự sẽ chuẩn bị các thủ tục chào mừng
              nhân sự mới:
            </p>
            <ul>
              <li>Giới thiệu nhân sự mới với công ty.</li>
              <li>
                Thực hiện các thủ tục: hợp đồng lao động, tạo tài khoản email,
                tài khoản học tập, tài khoản My Lumi để thực hiện theo dõi chấm
                công, sự kiện, đăng ký vé xe…
              </li>
            </ul>
            <p>Về phía nhân sự mới:</p>
            <ul>
              <li>Chuẩn bị hồ sơ lao động </li>
            </ul>
          </div>
          <div>
            <h1>Đào tạo sản phẩm:</h1>
            <p>
              Bạn sẽ được giới thiệu kho tài liệu học tập của Lumi. Tại đây bạn
              có thể tìm hiểu về công ty, các nội quy, nguyên tắc làm việc. Về
              lịch sử hình thành, Tầm nhìn - Sứ mệnh - Giá trị cốt lõi của Lumi,
              và cơ cấu tổ chức.
            </p>
          </div>
          <div>
            <h1>Đào tạo kỹ năng làm việc cơ bản:</h1>
            <p>
              Đối với các bạn Thực tập sinh, Fresher chưa có nhiều kinh nghiệm
              làm việc, hoặc các bạn chưa có hệ thống kỹ năng, thì đừng quá lo
              lắng, bộ phận nhân sự sẽ cùng đồng hành và hướng dẫn các bạn về
              các kỹ năng làm việc cơ bản, nhưng rất cần thiết trong công việc,
              bao gồm:
            </p>
            <ul>
              <li>Kỹ năng viết mail, trình bày văn bản.</li>
              <li>Kỹ năng báo cáo.</li>
              <li>Kỹ năng phân tích vấn đề.</li>
              <li>Kỹ năng đặt mục tiêu theo nguyên tắc S.M.A.R.T</li>
              <li>.....</li>
            </ul>
            <p>
              Khi được học và hiểu các kỹ năng này, bạn đã có thể tự tin bước
              đầu hòa nhập được với công việc rồi đó nhé.
            </p>
          </div>
          <div>
            <h1>Đào tạo sản phẩm:</h1>
            <p>
              Lumi - giải pháp nhà thông minh với 100% trí tuệ Việt. Toàn bộ các
              sản phẩm của Lumi được thiết kế, lập trình, sản xuất bởi chính
              Lumi, bạn sẽ được tìm hiểu về các sản phẩm, giải pháp nhà thông
              minh với nền tảng IOT, điều khác biệt Lumi với các sản phẩm Smart
              home khác, và lý do vì sao Lumi trở thành Leader trong lĩnh vực
              Smart home Việt Nam.
            </p>
          </div>
          <div>
            <h1>Đào tạo chuyên môn:</h1>
            <p>
              Các mentor và leader sẽ trang bị cho các bạn các tài liệu Lumi đã
              xây dựng dành cho các vị trí phù hợp với trình độ từng người. Điều
              bạn cần làm là hãy chuẩn bị cho mình một sức khỏe và tinh thần
              hăng say, máu chiến để chinh phục những kiến thức vô cùng thú vị
              phía trước.
            </p>
          </div>
          <div>
            <h1>Đào tạo tư duy, kỹ năng mềm:</h1>
            <p>
              Song song với chuyên môn, tư duy kỹ năng mềm là yếu tố rất quan
              trọng trong phát triển năng lực của mỗi nhân viên. Do đó, Lumi tạo
              nên một môi trường học tập và rèn luyện về tư duy, kỹ năng mềm,
              liên tục tài liệu hóa các khóa học để mỗi cá nhân có thể trau dồi
              các kỹ năng cần thiết. Đồng hành cùng các nhân sự sẽ có team HR,
              mentor và Leader, hỗ trợ và đảm bảo nhân sự có thể vừa học vừa
              hành hiệu quả. Ngoài ra, các bạn sẽ được tham gia các buổi thảo
              luận cùng với các nhân sự khác, để chia sẻ, học hỏi quan điểm từ
              những góc nhìn khác nhau, Lumi tin rằng bạn sẽ thu nhận được rất
              nhiều điều thú vị từ những buổi thảo luận như thế này đó.
            </p>
          </div>
          <div>
            <h1>Review tuần:</h1>
            <p>
              Review tuần là điều quan trọng trong mỗi dấu mốc làm việc của các
              cá nhân, tại đây HR, Mentor, Leader sẽ cùng ngồi với bạn để nhìn
              lại một tuần làm việc, đưa ra những đóng góp nên trau dồi ở điểm
              nào, phát huy ở đâu, và mục tiêu cho tuần tiếp theo là gì, vì vậy
              bạn hãy đón chờ những buổi review rất ý nghĩa này nhé.
            </p>
          </div>
          <div>
            <h1>Review tháng:</h1>
            <p>
              Cùng như Review tuần, nhưng review tháng sẽ đi kèm với đánh giá
              hiệu quả công việc một dự án mà bạn được giao, kỹ năng làm việc
              bạn đạt được. Từ đó có những kế hoạch tiếp theo phù hợp với bạn.
              Tại đây, những bạn đánh giá đạt được cả về chuyên môn và kỹ năng
              làm việc, Lumi sẽ một trong các hợp đồng phù hợp với các bạn: Part
              time, thử việc, chính thức. Hãy cố gắng để đạt được những cột mốc
              quan trọng của mình nhé!
            </p>
          </div>
          <div>
            <h1>
              Tiếp tục học tập phát triển bản thân để có bước phát triển mới:
            </h1>
            <p>
              Lumi tin rằng với sự hăng say học tập của bạn, sẽ không chỉ dừng
              lại ở nhân viên chính thức đúng không. Lumi luôn tạo điều kiện để
              bạn phát huy thật nhiều khả năng của mình, Leader, PM, hay các thử
              thách trong tương lai là những vị trí đang chờ đón bạn chinh phục
              đó. Hãy luôn nỗ lực không ngừng nhé!
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default TrainingProcessDetail;
