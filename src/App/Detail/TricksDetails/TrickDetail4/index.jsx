import { Container } from "react-bootstrap";
import "./TricksDetails.scss";
import Navigation from "../../../Navbar";
import HeadingNavigation from "../../../HeadingNavigation";
function TricksDetails4() {
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
      <div className="trickdetail-container">
        <Container>
          <HeadingNavigation
            namelink={`tuyendung`}
            namebase={`Thực tập sinh`}
            namedirect={`Cách gây ấn tượng từ vòng gửi mail ứng tuyển`}
          />
          <h1 className="trickdetail-heading">Những lưu ý cho Newbies</h1>
          <p className="trickdetail-author"> Phạm Thanh Mai</p>
          <div className="trickdetail-des">
            <p>
              CV&nbsp;l&agrave; viết tắt của &quot;Curriculum Vitae&quot;,
              l&agrave; bản t&oacute;m tắt những th&ocirc;ng tin về tr&igrave;nh
              độ học vấn, kinh nghiệm l&agrave;m&nbsp;việc, c&aacute;c kỹ năng
              li&ecirc;n quan tới c&ocirc;ng&nbsp;việc&nbsp;m&agrave; ứng
              vi&ecirc;n muốn ứng tuyển, để lại ấn tượng ban đầu cho nh&agrave;
              tuyển dụng về ứng vi&ecirc;n m&agrave; họ đang x&eacute;t duyệt.
            </p>
            <p>
              Đối với nhiều bạn sinh vi&ecirc;n lần đầu viết CV sẽ gặp
              kh&ocirc;ng &iacute;t bỡ ngỡ, phải l&agrave;m sao viết cho
              đ&uacute;ng, chuẩn, thể hiện được điểm mạnh v&agrave; lợi thế
              c&aacute; nh&acirc;n đối với doanh nghiệp m&agrave; m&igrave;nh
              ứng tuyển.
            </p>
            <p>
              Bạn đừng lo nh&eacute;, h&ocirc;m nay Mẹo hay của Lumi sẽ
              gi&uacute;p bạn gỡ rối phần v&agrave;o, một c&aacute;ch cơ bản,
              cực dễ hiểu để viết CV.
            </p>
            <p>N&agrave;o h&atilde;y bắt đầu nha!</p>
            <h1>I. Hình Thức</h1>
            <ol>
              <li>
                <p>Chọn font chữ r&otilde; r&agrave;ng, dễ đọc.</p>
              </li>
            </ol>
            <p>
              Chọn một trong c&aacute;c kiểu chữ CV ti&ecirc;u chuẩn: Arial,
              Tahoma, Times New Roman.
            </p>
            <p>
              Sử dụng cỡ chữ 11 đến 12 &nbsp;v&agrave; khoảng c&aacute;ch đơn.
              Đối với t&ecirc;n v&agrave; ti&ecirc;u đề phần của bạn, h&atilde;y
              chọn cỡ chữ 14 đến 16 pt
            </p>
            <p>
              M&agrave;u chữ c&oacute; độ tương phản cao với m&agrave;u
              background
            </p>
            <p>Lưu &yacute;: Lu&ocirc;n đ&uacute;ng ch&iacute;nh tả.</p>
            <ol start="2">
              <li>
                <p>M&agrave;u sắc, họa tiết</p>
              </li>
            </ol>
            <p>
              H&agrave;i h&ograve;a, ph&ugrave; hợp với từng t&iacute;nh chất
              c&ocirc;ng việc tự chọn. Đừng nhồi nh&eacute;t CV của bạn bằng
              qu&aacute; nhiều chi tiết, hoặc đồ họa ph&ocirc; trương. Lưu
              &yacute; răng, c&agrave;ng đơn giản, c&agrave;ng đẹp.
            </p>
            <p>
              N&ecirc;n tạo những khoảng trắng - sẽ khiến CV nh&igrave;n
              tho&aacute;ng v&agrave; kh&ocirc;ng bị bức bối v&igrave;
              qu&aacute; nhiều chi tiết hay chữ.
            </p>
            <p>
              Hầu hết CV được in ra sẽ tr&ecirc;n mực đen giấy trắng, qu&aacute;
              nhiều đồ họa c&oacute; thể khiến nh&agrave; tuyển dụng kh&oacute;
              đọc.
            </p>
            <ol start="3">
              <li>
                <p>Bố cục</p>
              </li>
            </ol>
            <p>Đặt lề khoảng 1,27-2cm.&nbsp;</p>
            <p>
              Đảm bảo rằng c&aacute;c ti&ecirc;u đề CV của bạn đồng nhất -
              l&agrave;m cho ch&uacute;ng lớn hơn v&agrave; in đậm.
            </p>
            <p>
              C&aacute;c d&ograve;ng đều được căn lề tr&aacute;i, d&ugrave;ng
              Single Spacing v&agrave; đồng đều cho tất cả c&aacute;c
              d&ograve;ng trong văn bản. C&aacute;c list c&ocirc;ng việc
              v&agrave; skills n&ecirc;n tr&igrave;nh b&agrave;y r&otilde;
              r&agrave;ng, v&agrave; c&oacute; đ&aacute;nh dấu d&ograve;ng để
              tạo điểm nhấn.
            </p>
            <p>
              Ngo&agrave;i ra khi gửi mail cho nh&agrave; tuyển dụng, bạn
              n&ecirc;n để định dạng l&agrave; PDF, v&agrave; chỉ n&ecirc;n
              g&oacute;i gọn trong 1 trang tr&igrave;nh b&agrave;y.
            </p>
            <p>
              <br />
            </p>
            <h1>II. NỘI DUNG</h1>
            <ol>
              <li>
                <p>Ảnh ch&acirc;n dung v&agrave; phần t&ecirc;n</p>
              </li>
            </ol>
            <p>
              Bức ảnh thể hiện sự ấn tượng ban đầu về h&igrave;nh ảnh bản
              th&acirc;n, v&igrave; thế bạn h&atilde;y chọn bức ảnh tr&ocirc;ng
              chuy&ecirc;n nghiệp, chất lượng cao, nhưng cũng kh&ocirc;ng
              qu&aacute; cứng nhắc như ảnh chụp giấy tờ t&ugrave;y th&acirc;n.
            </p>
            <p>
              Phần t&ecirc;n l&agrave; phần nổi bật nhất, vị tr&iacute;
              tr&ecirc;n c&ugrave;ng của CV, n&ecirc;n giữ t&ecirc;n chỉ trong 1
              d&ograve;ng.
            </p>
            <ol start="2">
              <li>
                <p>Th&ocirc;ng tin li&ecirc;n lạc:</p>
              </li>
            </ol>
            <p>Bạn n&ecirc;n lưu &yacute; những điểm sau:</p>
            <ul>
              <li>
                <p>Tr&igrave;nh b&agrave;y nổi bật, dễ t&igrave;m</p>
              </li>
              <li>
                <p>
                  Đầy đủ, ch&iacute;nh x&aacute;c: th&ocirc;ng tin li&ecirc;n
                  lạc, bao gồm: địa chỉ, số điện thoại, email.
                </p>
              </li>
              <li>
                <p>
                  N&ecirc;n bổ sung link hồ sơ c&aacute; nh&acirc;n để
                  nh&agrave; tuyển dụng dễ d&agrave;ng t&igrave;m kiếm
                  th&ecirc;m th&ocirc;ng tin về bạn: fb/ linkedin, portfolio,
                  web c&aacute; nh&acirc;n (mạng x&atilde; hội l&agrave; 1 ưu
                  điểm nếu bạn biết tận dụng l&agrave;m thương hiệu c&aacute;
                  nh&acirc;n)
                </p>
              </li>
            </ul>
            <p>Những điều cần tr&aacute;nh:</p>
            <ul>
              <li>
                <p>
                  Đ&iacute;nh k&egrave;m địa chỉ fb/ig c&aacute; nh&acirc;n nếu
                  n&oacute; kh&ocirc;ng thể hiện cho c&ocirc;ng việc bạn đang
                  ứng tuyển.
                </p>
              </li>
              <li>
                <p>
                  &nbsp;Link đ&iacute;nh k&egrave;m qu&aacute; d&agrave;i,
                  v&agrave; kh&ocirc;ng được t&ugrave;y chỉnh URL
                </p>
              </li>
            </ul>
            <ol start="3">
              <li>
                <p>
                  &nbsp; Mục ti&ecirc;u nghề nghiệp/ M&ocirc; tả bản th&acirc;n
                </p>
              </li>
            </ol>
            <p>Những lưu &yacute; để CV của bạn ấn tượng hơn:</p>
            <ul>
              <li>
                <p>Viết ngắn gọn, dưới 100 từ, 1-2 c&acirc;u</p>
              </li>
              <li>
                <p>
                  Mục ti&ecirc;u/ m&ocirc; tả bản th&acirc;n trả lời cho
                  c&acirc;u hỏi: V&igrave; sao bạn ph&ugrave; hợp? Mục
                  ti&ecirc;u sự nghiệp của bạn l&agrave; g&igrave;? Bạn
                  c&oacute; thể l&agrave;m g&igrave; để đ&oacute;ng g&oacute;p
                  cho c&ocirc;ng việc? V&iacute; dụ: Trở th&agrave;nh kỹ sư lập
                  tr&igrave;nh nh&uacute;ng IOT trong mảng Smart home.
                </p>
              </li>
              <li>
                <p>T&oacute;m tắt những điểm mạnh, nổi bật của bạn.</p>
              </li>
            </ul>
            <p>Những điều cần tr&aacute;nh:</p>
            <ul>
              <li>
                <p>
                  Nội dung thiếu trọng t&acirc;m, kh&ocirc;ng thể hiện được điểm
                  ph&ugrave; hợp của bạn với c&ocirc;ng việc v&agrave; doanh
                  nghiệp.
                </p>
              </li>
              <li>
                <p>
                  Nội dung chung chung, kh&ocirc;ng thể hiện được điểm
                  kh&aacute;c biệt của bạn, v&iacute; dụ: học hỏi m&ocirc;i
                  trường chuy&ecirc;n nghiệp.
                </p>
              </li>
              <li>
                <p>Lấy nội dung CV của người kh&aacute;c đưa v&agrave;o.</p>
              </li>
            </ul>
            <ol start="4">
              <li>
                <p>Kinh nghiệm l&agrave;m việc</p>
              </li>
            </ol>
            <p>
              [T&ecirc;n vị tr&iacute; c&ocirc;ng việc 1]&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;[Thời gian l&agrave;m việc]
            </p>
            <p>&nbsp; &nbsp; [T&ecirc;n c&ocirc;ng ty] &nbsp; [Địa điểm]</p>
            <p>
              &nbsp; &nbsp; [M&ocirc; tả tr&aacute;ch nhiệm, th&agrave;nh
              t&iacute;ch]
            </p>
            <p>Điều bạn n&ecirc;n l&agrave;m:</p>
            <ul>
              <li>
                <p>Sắp xếp theo thứ tự thời gian, từ gần nhất đến xa nhất.</p>
              </li>
              <li>
                <p>
                  N&ecirc;u r&otilde; t&ecirc;n c&ocirc;ng ty, thời gian bắt đầu
                  - kết th&uacute;c c&ocirc;ng việc.
                </p>
              </li>
              <li>
                <p>
                  Trả lời được những c&acirc;u hỏi: C&ocirc;ng việc bạn
                  đ&atilde; l&agrave;m l&agrave; g&igrave;? Bạn đ&atilde;
                  l&agrave;m thế n&agrave;o? Gi&aacute; trị bạn tạo ra cho
                  c&ocirc;ng việc l&agrave; g&igrave;?&nbsp;
                </p>
              </li>
              <li>
                <p>
                  Tận dụng những con số khi m&ocirc; tả tr&aacute;ch nhiệm
                  v&agrave; th&agrave;nh t&iacute;ch.
                </p>
              </li>
              <li>
                <p>
                  Tận dụng những từ kh&oacute;a li&ecirc;n quan đến c&ocirc;ng
                  việc ứng tuyển.
                </p>
              </li>
            </ul>
            <p>Bạn cần tr&aacute;nh:</p>
            <ul>
              <li>
                <p>Viết d&agrave;i d&ograve;ng như một đoạn văn</p>
              </li>
              <li>
                <p>Đề cập kinh nghiệm kh&ocirc;ng li&ecirc;n quan.</p>
              </li>
              <li>
                <p>
                  Chung chung, kh&ocirc;ng đưa ra được cụ thể nội dung
                  c&ocirc;ng việc.
                </p>
              </li>
              <li>
                <p>
                  Kinh nghiệm li&ecirc;n quan nhưng đ&atilde; qu&aacute;
                  l&acirc;u kh&ocirc;ng l&agrave;m.
                </p>
              </li>
            </ul>
            <ol start="5">
              <li>
                <p>Học vấn/ Bằng cấp, chứng chỉ</p>
              </li>
            </ol>
            <ul>
              <li>
                <p>
                  Học vấn/ bằng cấp: Theo thứ tự bằng cao ở tr&ecirc;n, thấp ở
                  dưới.
                </p>
              </li>
              <li>
                <p>Chứng chỉ: Theo thứ tự thời gian tr&ecirc;n bằng.</p>
              </li>
            </ul>
            <p>Những điều n&ecirc;n l&agrave;m:</p>
            <ul>
              <li>
                <p>
                  N&ecirc;u điểm số m&ocirc;n chuy&ecirc;n ng&agrave;nh
                  li&ecirc;n quan, nếu l&agrave; điểm giỏi/ nổi trội.
                </p>
              </li>
              <li>
                <p>
                  Học bổng, đề &aacute;n, nghi&ecirc;n cứu khoa học hoặc những
                  kh&oacute;a học li&ecirc;n quan đến vị tr&iacute; ứng tuyển.
                </p>
              </li>
              <li>
                <p>Chứng chỉ ngoại ngữ, kỹ năng, kh&oacute;a học&hellip;</p>
              </li>
            </ul>
            <p>Kh&ocirc;ng n&ecirc;n:</p>
            <ul>
              <li>
                <p>
                  Ghi qu&aacute; tr&igrave;nh học tập từ c&aacute;c cấp phổ
                  th&ocirc;ng.
                </p>
              </li>
            </ul>
            <ol start="6">
              <li>
                <p>Kỹ năng:</p>
              </li>
            </ol>
            <p>N&ecirc;n:</p>
            <ul>
              <li>
                <p>
                  Ph&acirc;n biệt kỹ năng chuy&ecirc;n m&ocirc;n v&agrave; kỹ
                  năng mềm
                </p>
              </li>
              <li>
                <p>
                  Đặt những kỹ năng quan trọng v&agrave; li&ecirc;n quan đến
                  c&ocirc;ng việc nhất l&ecirc;n trước.
                </p>
              </li>
            </ul>
            <p>Kh&ocirc;ng n&ecirc;n:</p>
            <ul>
              <li>
                <p>
                  D&ugrave;ng c&aacute;c thang đo kỹ năng một c&aacute;ch chung
                  chung, kh&ocirc;ng r&otilde; r&agrave;ng.
                </p>
              </li>
              <li>
                <p>
                  N&ecirc;u những kỹ năng m&agrave; bạn kh&ocirc;ng c&oacute;.
                </p>
              </li>
              <li>
                <p>
                  D&ugrave;ng từ ngữ mơ hồ, kh&ocirc;ng r&otilde; r&agrave;ng.
                </p>
              </li>
            </ul>
            <ol start="7">
              <li>
                <p>
                  C&aacute;c mục kh&aacute;c (Sở th&iacute;ch, sở trường,
                  c&aacute;c hoạt động XH)
                </p>
              </li>
            </ol>
            <p>N&ecirc;n:</p>
            <ul>
              <li>
                <p>
                  Thể hiện t&iacute;nh c&aacute;ch, sở th&iacute;ch nổi bật
                  v&agrave; t&agrave;i lẻ, ph&ugrave; hợp với c&ocirc;ng việc
                </p>
              </li>
              <li>
                <p>
                  Mi&ecirc;u tả ngắn gọn để l&agrave;m r&otilde; hơn sở
                  th&iacute;ch v&agrave; đam m&ecirc; c&aacute; nh&acirc;n
                </p>
              </li>
              <li>
                <p>Th&ecirc;m nguồn tham vấn (References)</p>
              </li>
            </ul>
            <p>Kh&ocirc;ng n&ecirc;n:</p>
            <ul>
              <li>
                <p>
                  Đưa ra những th&ocirc;ng tin chung chung, g&acirc;y
                  lo&atilde;ng CV, tốn diện t&iacute;ch.
                </p>
              </li>
              <li>
                <p>
                  Sở th&iacute;ch tr&aacute;i ngược với đặc th&ugrave; doanh
                  nghiệp, c&ocirc;ng việc m&agrave; bạn đang ứng tuyển.
                </p>
              </li>
            </ul>
            <p>
              <br />
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
export default TricksDetails4;
