import { Container } from "react-bootstrap";
import "./TricksDetails.scss";
import Navigation from "../../../Navbar";
import HeadingNavigation from "../../../HeadingNavigation";
import blogcover from "../../../../Asset/image/blogcover2.png";
function TricksDetails2() {
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
      <div className="blog-image-cover">
        <Navigation style={bgcolor.color} />
        <HeadingNavigation
          namelink={`tuyendung`}
          namebase={`Thực tập sinh`}
          namedirect={`Cách gây ấn tượng từ vòng gửi mail ứng tuyển`}
        />
      </div>
      <div className="trickdetail-container">
        <Container>
          <h1 className="trickdetail-heading">
            Cách gây ấn tượng từ vòng gửi mail ứng tuyển
          </h1>

          <div className="trickdetail-des">
            <p className="trickdetail-author"> Phạm Thanh Mai</p>
            <p>
              Lumi đ&atilde; chia sẻ với c&aacute;c bạn những bước cơ bản để tạo
              một CV g&acirc;y ấn tượng với nh&agrave; tuyển dụng ở b&agrave;i
              viết trước, bạn c&oacute; thể xT&ocirc;i lại b&agrave;i viết ở
              đ&acirc;y nh&eacute;.
            </p>
            <p>
              Một trong những bước nhất quan trọng để ghi điểm với nh&agrave;
              tuyển dụng đ&oacute; ch&iacute;nh l&agrave; gửi mail xin việc, qua
              th&ocirc;ng tin trong mail, nh&agrave; tuyển dụng sẽ c&oacute;
              những g&oacute;c nh&igrave;n để hiểu bạn hơn, từ đ&oacute; sẽ tăng
              cơ hội tr&uacute;ng tuyển của bạn.
            </p>
            <p>
              Tuy nhi&ecirc;n kh&ocirc;ng&nbsp;kh&ocirc;ng phải ai cũng biết
              c&aacute;ch c&oacute; được những Email xin việc ho&agrave;n hảo,
              ghi điểm tuyệt đối trước nh&agrave; tuyển dụng cả. H&atilde;y theo
              d&otilde;i b&agrave;i viết dưới đ&acirc;y để gi&uacute;p bạn giải
              đ&aacute;p những thắc mắc v&agrave; lưu &yacute; khi viết Email
              xin việc nh&eacute;.
            </p>
            <p>C&aacute;ch viết Email xin việc</p>
            <p>
              H&atilde;y d&agrave;nh thời gian xem x&eacute;t m&ocirc; tả
              c&ocirc;ng việc, m&ocirc;i trường v&agrave; ng&agrave;nh nghề
              c&ocirc;ng ty, x&aacute;c định kinh nghiệm, kỹ năng bạn c&oacute;
              ph&ugrave; hợp với vị tr&iacute; ứng tuyển kh&ocirc;ng. Những chi
              tiết n&agrave;y sẽ thể hiện trong nội dung thư xin việc của bạn để
              truyền tải tới nh&agrave; tuyển dụng.
            </p>
            <ol>
              <li>
                <p>
                  <strong>Viết ti&ecirc;u đề r&otilde; r&agrave;ng.</strong>
                </p>
              </li>
            </ol>
            <p>
              N&ecirc;n đảm bảo ti&ecirc;u ch&iacute; ngắn gọn, c&oacute; chứa
              t&ecirc;n v&agrave; vị tr&iacute; ứng tuyển, đừng viết qu&aacute;
              d&agrave;i d&ograve;ng. Ti&ecirc;u đề với cấu tr&uacute;c phổ
              biến:&nbsp;Họ v&agrave; t&ecirc;n - Vị tr&iacute; ứng tuyển -
              T&ecirc;n c&ocirc;ng ty
            </p>
            <p>V&iacute; dụ:</p>
            <p>
              Nguyễn Văn Anh - Thực tập sinh lập tr&igrave;nh Backend - Lumi
              Việt Nam
            </p>
            <p>
              Những lỗi cơ bản nhưng thường ở một số bạn khi đi xin việc
              l&agrave; ti&ecirc;u đề kh&ocirc;ng r&otilde; r&agrave;ng,
              v&iacute; dụ như:
            </p>
            <ul>
              <li>
                <p>Ứng tuyển lập tr&igrave;nh App</p>
              </li>
              <li>
                <p>T&ocirc;i xin thực tập ạ!</p>
              </li>
              <li>
                <p>L&ecirc; Văn B ứng tuyển</p>
              </li>
            </ul>
            <p>
              Ờ ti&ecirc;u đề n&agrave;y, nh&agrave; tuyển dụng sẽ đ&aacute;nh
              gi&aacute; c&aacute;ch viết Email kh&ocirc;ng chuy&ecirc;n nghiệp,
              v&agrave; đ&ocirc;i khi ti&ecirc;u đề kh&ocirc;ng nổi bật sẽ khiến
              cho mail của bạn bị bỏ lỡ trước h&agrave;ng chục CV ấn tượng
              kh&aacute;c.
            </p>
            <ol start="2">
              <li>
                <p>
                  <strong>Nội dung xin việc</strong>
                </p>
              </li>
            </ol>
            <p>2.1 Mở đầu Email</p>
            <p>
              H&atilde;y mở đầu nội dung Email xin việc bằng cụm từ
              &ldquo;K&iacute;nh gửi&rdquo; để thể hiện sự t&ocirc;n trọng người
              nhận Email. Bạn kh&ocirc;ng n&ecirc;n d&ugrave;ng
              &ldquo;Gửi&rdquo; hay &ldquo;Th&acirc;n &aacute;i gửi&rdquo;
              v&igrave; điều n&agrave;y c&oacute; vẻ sẽ hơi thiếu t&ocirc;n
              trọng v&agrave; giảm đi t&iacute;nh lịch sự.&nbsp;
            </p>
            <p>V&iacute; dụ:</p>
            <ul>
              <li>
                <p>
                  K&iacute;nh gửi Ph&ograve;ng Nh&acirc;n sự - C&ocirc;ng ty CP
                  Lumi Việt Nam,
                </p>
              </li>
              <li>
                <p>
                  K&iacute;nh gửi anh Phạm Quang Luyện - Gi&aacute;m đốc
                  Ph&ograve;ng R&amp;D,
                </p>
              </li>
            </ul>
            <p>Kh&ocirc;ng n&ecirc;n:</p>
            <ul>
              <li>
                <p>T&ocirc;i ch&agrave;o anh chị!</p>
              </li>
              <li>
                <p>
                  Hoặc v&agrave;o nội dung ch&iacute;nh của mail m&agrave;
                  kh&ocirc;ng c&oacute; phần mở đầu mail.
                </p>
              </li>
            </ul>
            <p>2.2 Nội dung ch&iacute;nh</p>
            <p>Cấu tr&uacute;c nội dung Email xin việc, sẽ bao gồm:&nbsp;</p>
            <ul>
              <li>
                <p>Giới thiệu vắn tắt về bản th&acirc;n bạn.</p>
              </li>
              <li>
                <p>
                  L&yacute; do bạn muốn ứng tuyển v&agrave;o c&ocirc;ng ty bạn
                  đ&atilde; t&igrave;m hiểu.
                </p>
              </li>
              <li>
                <p>
                  N&ecirc;u kỹ năng, kinh nghiệm,&nbsp;
                  <a href="https://123job.vn/bai-viet/20-muc-tieu-nghe-nghiep-ke-toan-hay-nhat-nam-2019-459.html">
                    mục ti&ecirc;u nghề nghiệp
                  </a>{" "}
                  nổi bật v&agrave; ph&ugrave; hợp với y&ecirc;u cầu của
                  c&ocirc;ng ty, để chứng tỏ bạn l&agrave; ứng vi&ecirc;n
                  s&aacute;ng gi&aacute; cho vị tr&iacute; bạn ứng tuyển.
                </p>
              </li>
            </ul>
            <p>V&iacute; dụ:</p>
            <p>
              T&ocirc;i l&agrave; Trần Văn B, sinh ng&agrave;y xxx. Th&ocirc;ng
              qua website lumi.vn của c&ocirc;ng ty t&ocirc;i được biết
              c&ocirc;ng ty đang tuyển dụng vị tr&iacute; thực tập sinh
              nh&uacute;ng linux.&nbsp;
            </p>
            <p>
              T&ocirc;i l&agrave; sinh vi&ecirc;n năm cuối, chuy&ecirc;n
              ng&agrave;nh Tự động h&oacute;a, Trường Điện - Điện Tử, Đại học
              B&aacute;ch Khoa H&agrave; Nội. Sau khi t&igrave;m hiểu vị
              tr&iacute; c&ocirc;ng ty đang tuyển dụng, t&ocirc;i nhận thấy vị
              tr&iacute; n&agrave;y ph&ugrave; hợp với khả năng v&agrave; định
              hướng trở th&agrave;nh Kỹ sư lập tr&igrave;nh nh&uacute;ng Linux
              của m&igrave;nh. V&igrave; vậy t&ocirc;i quyết định gửi hồ sơ xin
              ứng tuyển.&nbsp;
            </p>
            <p>
              Trong qu&aacute; tr&igrave;nh học tập t&ocirc;i đ&atilde; tự
              t&igrave;m hiểu v&agrave; thực hiện một số dự &aacute;n c&aacute;
              nh&acirc;n:
            </p>
            <ul>
              <li>
                <p>Thời gian thực hiện: Dự &aacute;n A.</p>
              </li>
              <li>
                <p>Thời gian thực hiện: Dự &aacute;n B.&nbsp;</p>
              </li>
            </ul>
            <p>
              T&ocirc;i xin đ&iacute;nh k&egrave;m email c&aacute;c th&ocirc;ng
              tin chi tiết về dự &aacute;n v&agrave; c&aacute;c th&ocirc;ng tin
              c&aacute; nh&acirc;n.
            </p>
            <p>
              T&ocirc;i tin với sự ham t&igrave;m t&ograve;i v&agrave; khả năng
              tự học hỏi cũng như sự chăm chỉ v&agrave; gi&agrave;u nhiệt huyết,
              đặc biệt dưới sự chỉ bảo của Qu&yacute; c&ocirc;ng ty, t&ocirc;i
              sẽ ho&agrave;n th&agrave;nh thật tốt c&ocirc;ng việc được giao.
            </p>
            <p>2.3 Kết th&uacute;c email</p>
            <p>
              Tại phần kết th&uacute;c n&agrave;y, bạn sẽ gửi lời cảm ơn tới
              nh&agrave; tuyển dụng v&igrave; đ&atilde; tạo cơ hội cho bạn được
              ứng tuyển v&agrave; xem x&eacute;t l&aacute; đơn của bạn.
            </p>
            <p>V&iacute; dụ:</p>
            <p>
              Cảm ơn Qu&yacute; c&ocirc;ng ty đ&atilde; tạo điều kiện cho
              t&ocirc;i được ứng tuyển cũng như d&agrave;nh thời gian xem
              x&eacute;t hồ sơ của t&ocirc;i. Ph&iacute;a dưới t&ocirc;i
              c&oacute; đ&iacute;nh k&egrave;m CV v&agrave; một số chứng chỉ của
              m&igrave;nh. Hy vọng sớm nhận được hồi đ&aacute;p từ Qu&yacute;
              c&ocirc;ng ty.
            </p>
            <p>
              T&ocirc;i xin ch&uacute;c C&ocirc;ng ty ng&agrave;y c&agrave;ng
              ph&aacute;t triển hơn nữa.
            </p>
            <p>
              Cuối c&ugrave;ng, t&ocirc;i xin ch&acirc;n th&agrave;nh cảm ơn.
            </p>
            <ol start="3">
              <li>
                <p>Chữ k&yacute; email</p>
              </li>
            </ol>
            <p>
              H&atilde;y bổ sung chữ k&yacute; email để tạo sự chuy&ecirc;n
              nghiệp của m&igrave;nh nh&eacute;. Th&ocirc;ng thường mẫu chữ
              k&yacute; email sẽ bao gồm:
            </p>
            <p>Họ v&agrave; t&ecirc;n</p>
            <p>Nghề nghiệp chuy&ecirc;n m&ocirc;n (nếu c&oacute;)</p>
            <p>Số điện thoại</p>
            <p>Th&ocirc;ng tin kh&aacute;c như: website, địa chỉ..</p>
            <p>
              <br />
            </p>
            <p>
              <img
                src="https://lh3.googleusercontent.com/hlWRsshYtKvqo7l3iLDl5p0pvlbKHgufTqPn04OXmpmHlIstnlNwz3z-j-PSE1NRZd6jbKApSKspj2cDfvmrup1tR31WccqiPha0shT5whCr6SXJtsIAKRCh1LB8t_E85Ms0RxzaZK9eV0n87H5lu74ggdI_E47HTK20hOfMXSXz3Alrq2EgHxtPUSresQ"
                width="513"
                height="199"
                alt="example1"
              />
            </p>
            <p>Thanks and best regards,</p>
            <div align="left">
              <table>
                <tbody>
                  <tr>
                    <td rowspan="6">
                      <p>
                        <img
                          alt="Logo"
                          src="https://lh3.googleusercontent.com/X1mI0uCliWtpiYRNL27jpKEbZ23wSRHqnq_3jDM4xbrrJWKjerg5rpJliUwM9jMBWQ5B5zVO1WfVh1F0ydtl--knkna5w1QS5AujYBH1uCCH3mljxqJDXz0Sm0qtDxkmaDSB6ime-S6OFW6xv4L9AzdQqj-JfVGcvEnZNXODHzrwyMRRf_w1Ad0AQGPzRw"
                          width="200"
                          height="140"
                        />
                      </p>
                    </td>
                    <td>
                      <br />
                      <div align="left">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <p>
                                  PHAM BICH PHUONG&nbsp;| Human Resources,
                                  Lumi.,JSC
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>
                                  a:&nbsp;6th Floor, New Skyline Building,
                                  Nguyen Khuyen Str, Ha Dong, Hanoi
                                </p>
                                <p>
                                  e:phuongpb@lumi.vn&nbsp;|&nbsp;w:
                                  <a href="http://lumi.vn/">&nbsp;lumi.vn</a>
                                </p>
                                <p>p:&nbsp;(+84) 123456789</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>C&aacute;ch tạo chữ kỹ trong email:</p>
            <ul>
              <li>
                <p>Bước 1: V&agrave;o Setting (c&agrave;i đặt)</p>
              </li>
              <li>
                <p>Bước 2: Trong tab General (chung) &rarr; Chữ k&yacute;</p>
              </li>
              <li>
                <p>
                  Bước 3: Trong khung chữ k&yacute; hiện ra, h&atilde;y sửa chữ
                  k&yacute; theo &yacute; m&igrave;nh v&agrave; chọn Lưu thay
                  đổi (Save)
                </p>
              </li>
            </ul>
            <ol start="4">
              <li>
                <p>
                  Đ&iacute;nh k&egrave;m c&aacute;c t&agrave;i liệu trong email
                  xin việc
                </p>
              </li>
            </ol>
            <p>
              Một điều kh&ocirc;ng thể thiếu trong email xin việc đ&oacute;
              ch&iacute;nh l&agrave; CV xin việc, ngo&agrave;i ra những chứng
              chỉ đi k&egrave;m hoặc c&aacute;c dự &aacute;n, sản phẩm bạn
              đ&atilde; l&agrave;m sẽ gia tăng sự đ&aacute;nh gi&aacute; của
              nh&agrave; tuyển dụng.
            </p>
            <p>
              V&igrave; vậy, đừng qu&ecirc;n đ&iacute;nh k&egrave;m CV của
              m&igrave;nh nh&eacute;. Ở phần trước, ch&uacute;ng m&igrave;nh
              đ&atilde; c&oacute; hướng dẫn tạo CV chuy&ecirc;n nghiệp.
              C&aacute;c bạn quay trở lại b&agrave;i trước để xem nha.
            </p>
            <ol start="5">
              <li>
                <p>
                  Kiểm tra lại một lần nữa to&agrave;n bộ email trước khi gửi
                </p>
              </li>
            </ol>
            <p>
              Đ&acirc;y l&agrave; bước quan trọng cuối c&ugrave;ng để r&agrave;
              so&aacute;t lại c&aacute;c lỗi, sai s&oacute;t trước khi gửi cho
              nh&agrave; tuyển dụng.&nbsp;
            </p>
            <p>
              H&atilde;y kiểm tra lại tất cả c&aacute;c bước tr&ecirc;n một lần
              nữa:
            </p>
            <ul>
              <li>
                <p>Đừng qu&ecirc;n kiểm tra lại lỗi ch&iacute;nh tả.</p>
              </li>
              <li>
                <p>
                  Tinh chỉnh lại c&acirc;u từ gọn g&agrave;ng, văn phong lịch
                  sự.
                </p>
              </li>
              <li>
                <p>
                  Phần&nbsp;&ldquo;K&iacute;nh gửi&rdquo;&nbsp;n&ecirc;n được in
                  đậm.
                </p>
              </li>
            </ul>
            <p>
              H&atilde;y cố gắng kiểm tra chi tiết v&agrave; kỹ lưỡng email của
              m&igrave;nh, để đảm bảo thư gửi tới nh&agrave; tuyển dụng
              chuy&ecirc;n nghiệp bạn nh&eacute;.
            </p>
            <p>V&iacute; dụ một email xin việc ho&agrave;n chỉnh:</p>
            <p>
              <br />
            </p>
            <p>
              K&iacute;nh gửi Ph&ograve;ng Nh&acirc;n sự - C&ocirc;ng ty CP Lumi
              Việt Nam,
            </p>
            <p>
              T&ocirc;i l&agrave; Trần Văn B, sinh ng&agrave;y xxx. Th&ocirc;ng
              qua website lumi.vn của c&ocirc;ng ty t&ocirc;i được biết
              c&ocirc;ng ty đang tuyển dụng vị tr&iacute; thực tập sinh
              nh&uacute;ng linux.&nbsp;
            </p>
            <p>
              T&ocirc;i l&agrave; sinh vi&ecirc;n năm cuối, chuy&ecirc;n
              ng&agrave;nh Tự động h&oacute;a, Trường Điện - Điện Tử, Đại học
              B&aacute;ch Khoa H&agrave; Nội. Sau khi t&igrave;m hiểu vị
              tr&iacute; c&ocirc;ng ty đang tuyển dụng, t&ocirc;i nhận thấy vị
              tr&iacute; n&agrave;y ph&ugrave; hợp với khả năng v&agrave; định
              hướng trở th&agrave;nh Kỹ sư lập tr&igrave;nh nh&uacute;ng Linux
              của m&igrave;nh. V&igrave; vậy t&ocirc;i quyết định gửi hồ sơ xin
              ứng tuyển.&nbsp;
            </p>
            <p>
              <br />
            </p>
            <p>
              Trong qu&aacute; tr&igrave;nh học tập t&ocirc;i đ&atilde; tự
              t&igrave;m hiểu v&agrave; thực hiện một số dự &aacute;n c&aacute;
              nh&acirc;n:
            </p>
            <ul>
              <li>
                <p>Thời gian thực hiện: Dự &aacute;n A.</p>
              </li>
              <li>
                <p>Thời gian thực hiện: Dự &aacute;n B.&nbsp;</p>
              </li>
            </ul>
            <p>
              <br />
            </p>
            <p>
              T&ocirc;i xin đ&iacute;nh k&egrave;m email c&aacute;c th&ocirc;ng
              tin chi tiết về dự &aacute;n v&agrave; c&aacute;c th&ocirc;ng tin
              c&aacute; nh&acirc;n.
            </p>
            <p>
              T&ocirc;i tin với sự ham t&igrave;m t&ograve;i v&agrave; khả năng
              tự học hỏi cũng như sự chăm chỉ v&agrave; gi&agrave;u nhiệt huyết,
              đặc biệt dưới sự chỉ bảo của Qu&yacute; c&ocirc;ng ty, t&ocirc;i
              sẽ ho&agrave;n th&agrave;nh thật tốt c&ocirc;ng việc được giao.
            </p>
            <p>
              <br />
            </p>
            <p>
              Cảm ơn Qu&yacute; c&ocirc;ng ty đ&atilde; tạo điều kiện cho
              t&ocirc;i được ứng tuyển cũng như d&agrave;nh thời gian xem
              x&eacute;t hồ sơ của t&ocirc;i. Ph&iacute;a dưới t&ocirc;i
              c&oacute; đ&iacute;nh k&egrave;m CV v&agrave; một số chứng chỉ của
              m&igrave;nh.&nbsp;
            </p>
            <p>
              Hy vọng sớm nhận được hồi đ&aacute;p từ Qu&yacute; c&ocirc;ng ty.
            </p>
            <p>
              T&ocirc;i xin ch&uacute;c C&ocirc;ng ty ng&agrave;y c&agrave;ng
              ph&aacute;t triển hơn nữa.
            </p>
            <p>
              Cuối c&ugrave;ng, t&ocirc;i xin ch&acirc;n th&agrave;nh cảm ơn.
            </p>
            <p>
              <br />
            </p>
            <p>
              <br />
            </p>
            <div align="left">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>TRAN VAN B&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        a:&nbsp;6th Floor, New Skyline Building, Nguyen Khuyen
                        Str, Ha Dong, Hanoi
                      </p>
                      <p>e:tranvanb@gmail.vn | &nbsp;</p>
                      <p>w: linkedin.com/tranvanb</p>
                      <p>p:&nbsp;(+84) 123456789</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <br />
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
export default TricksDetails2;
