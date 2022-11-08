import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../BlogPage1/BlogPage1.scss";
import Navigation from "../../App/Navbar";
import HeadingNavigation from "../../App/HeadingNavigation";
import blogcover from "../../Asset/image/blogcover1.png";
import Footer from "../../App/Footer/FooterCarousel";
function BlogPage3() {
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
          namedirect={`Kỹ năng tìm kiếm thông tin`}
        />
        <h1 className="trickdetail-heading">Kỹ năng tìm kiếm thông tin</h1>

        <Container>
          <div className="trickdetail-des">
            <p className="trickdetail-author"> Phạm Thanh Mai</p>
            <p className="Description">
              Câu nói vui trước khi hỏi ai gì đó thì người được hỏi sẽ bảo bạn
              Đã GOOGLE chưa
              <br /> Lumi đánh giá đây là phần quan trọng nhất trong kỹ năng
              giải quyết vấn đề.
              <br /> JUST GOOGLE IT - 1 động từ chỉ bạn hãy lục tung Google đi
              <br />
              Thực tế là tất cả sản phẩm giải pháp Lumi đang được xây dựng nhờ
              quá trình tìm kiếm tài nguyên, dữ liệu, kiến thức qua Google
            </p>
            <p className="Description">
              <h1>Bí Kíp Nâng Cao Kỹ Năng Google Của Bạn</h1>
            </p>
            <p className="Description">
              <p>
                Người dùng thông thường nói chung và các lập trình viên nói
                riêng, chúng ta luôn phải sử dụng google để tìm kiếm thông tin
                trên internet. Nhưng đôi khi, vấn đề của chúng ta lại không thể
                tìm thấy hoặc thông tin mô tả khá mơ hồ, không đúng trọng tâm.
                Tỉ lệ vấn đề của bạn không xuất hiện trên internet khá thấp vì
                vậy nguyên do là bạn đã không tìm kiếm đúng cách. Vậy làm sao để
                tìm kiếm có hiệu quả - đúng thông tin và tiết kiệm thời gian?
              </p>
            </p>
            <p className="Description">
              <h1>Vì sao kỹ năng search google lại quan trọng?</h1>
            </p>
            <p className="Description">
              Đồng ý với nhau tất cả những kiến thức về IT nói riêng đều có trên
              Internet. Vậy bạn phải làm gì để có thể tiếp cận được chúng? –
              Search google. Ngay cả những lập trình viên kỳ cựu nhất cũng không
              thể đem tất cả kiến thức đấy vào đầu. Vì thế giải pháp của họ là
              học cách sử dụng những kiến thức, công cụ ấy trước, sau đó chỉ cần
              nhớ làm sao để tìm nó trở lại khi cần. Nhiều người cẩn thận sẽ
              soạn thành bộ tài liệu còn đa số sẽ chọn cách kiếm nó trên google.
            </p>
            <div className="des-img">
              <img
                src="https://lh5.googleusercontent.com/bWflReMcOpDRSCdyCws_ZWaolEasY3X_cyn5dGrvT4_54sJeLtACGUReDEAG5GUmZ5QyEJBEvFkkxyz5EdrTo61ivfvKKH2gfhUoQNoH1YQRkSjt0_iMBzo8RNXBwFb8Ox_xXHTQfcIt62MNOP9Grs61ACT2dLVisGvuE9Und9Cch4BXsVMxQlGe3jHSQA"
                width="602"
                height="507"
              />
            </div>
            <p className="Description">
              <h1>Tại sao nhiều bạn newbie không biết cách search google/</h1>
            </p>
            <p className="Description">
              Bản chất của việc search google là sử dụng keyword để tìm kiếm.
              Với những bạn newbie thì càng không biết keyword cho vấn đề của
              mình là gì. Tuy vậy bằng cách này hay cách khác, mỗi lần search
              google đều là những lần cung cấp cho bạn những kiến thức nhất
              định. Có thể mất thời gian lâu hơn, có thể nhanh chán nản nhưng
              kiến thức là kiến thức và nó đều có giá trị cho bạn. Hãy chịu khó
              góp nhặt chúng và một ngày bạn sẽ có được thứ mình cần.
            </p>
            <p className="Description">
              <h1>Cách search google mà mình đã dùng</h1>
            </p>
            <p className="Description">
              Khi gặp vấn đề, hãy bắt đầu bằng những câu hỏi mà bạn đang thắc
              mắc, gì cũng được, có thể đại loại như: IT là gì? Ngôn ngữ lập
              trình là gì? Java là gì? Java làm được gì? ... Nâng cao hơn một
              chút: Cách sử dụng hàm sort trong java, Cách viết clean code, cách
              lấy ngày giờ trong java,... Khi bắt đầu hãy tập viết những câu hỏi
              thật tường minh, càng ngắn gọn càng tốt. Dần dần keyword sẽ được
              hình thành ví dụ như “Cách sử dụng hàm sort trong java” thành
              “Sort trong java”. Cả 2 đều sử dụng cùng mục đích nhưng cái nào
              ngắn gọn hơn sẽ cho ra nhiều kết quả liên quan hơn. Một mẹo khác
              là tập cho mình thói quen search google bằng Tiếng Anh. Sử dụng
              Tiếng Anh để tìm kiếm sẽ cho bạn nhiều kết quả hơn và chuẩn xác
              hơn việc sử dụng Tiếng Việt. Ví dụ như "Sort in Java", câu trả lời
              thường sẽ có trong đường link đầu tiên.
            </p>
            <p className="Description">
              <h1>1. Sử dụng trình tìm kiếm nâng cao</h1>
            </p>
            <div className="des-img">
              <img
                src="https://lh3.googleusercontent.com/lPiQ087nFUrKy0EmGtPy2iUzZ3qvN_rpl2B5Ec4eGyiBrIyL7cJ1bEIx8CVYKGt8e4VHpnpDDqvezDk2zlOkj1XZeO8lZAd6zaLn2m9dU3fskcR9dmbfjtv5agQM-wLKAZ24nU7XhFn0_MlWj8MK9Te3AHber0fJC9vkYzs1yyUXLoR9z9fjXucbxSl8Cw"
                width="602"
                height="345"
              />
            </div>
            <p className="Description">
              Cách tốt nhất để bắt đầu nâng cao khả năng tìm kiếm Google là dùng
              Advanced Search. <br /> Điều này cho phép bạn tìm kiếm chính xác
              các cụm từ, tất cả các từ hoặc một trong các từ khóa được chỉ định
              bằng cách nhập các cụm từ tìm kiếm vào ô thích hợp. <br /> Bạn
              cũng có thể xác định số lượng kết quả bạn muốn trên Google, ngôn
              ngữ và loại tệp bạn đang tìm kiếm. tất cả đều có trong{" "}
              <span style={{ fontWeight: `700` }}> Advanced Search. </span>
              <br /> Advanced Search cho phép bạn nhập
              <span style={{ fontWeight: `700` }}> Top Level Domain </span>(tên
              miền cấp cao nhất như .co.uk) trong phần “trang web hoặc tên miền”
              để hạn chế kết quả. Bạn có thể thu hẹp kết quả để cho ra kết quả
              chính xác bằng cách thêm các điều kiện trong phần “Sau đó, thu hẹp
              kết quả của bạn bằng…” <br /> Hầu hết các tính năng nâng cao này
              đều tích hợp sẵn trong khung tìm kiếm của Google, dưới dạng các
              tham số lệnh.
            </p>
            <p className="Description">
              <h1>2. Tham số lệnh trong khung tìm kiếm Google</h1>
            </p>
            <p className="Description">
              1. Tìm kiếm từ khoá chính, sau đó tìm thêm một{" "}
              <span style={{ fontWeight: `700` }}> “từ khoá 1” </span> OR{" "}
              <span style={{ fontWeight: `700` }}> “từ khoá 2”</span> muốn xuất
              hiện cùng từ khóa chính rồi nhóm chúng lại bằng dấu ngoặc đơn.
              <br />
              Systax: [Keyword 2] or [Keyword 2]
              <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span> nước (khói OR
              lửa).
            </p>
            <p className="Description">
              2. Để tìm kiếm chính xác các cụm từ, bạn chỉ cần đặt chúng trong
              dấu ngoặc kép.
              <br /> Syntax: "[keyword 1] [keyword 2]" [keyword 3]
              <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span> “Java là”
            </p>
            <p className="Description">
              3. Loại trừ các từ khóa cụ thể bằng toán tử trừ.
              <br /> Syntax: - [keyword to exclude] [keyword to include]
              <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span> -ebay sẽ loại
              trừ tất cả các kết quả từ ebay.
            </p>
            <p className="Description">
              4. Các từ phổ biến như I, and, then được Google gọi là “stop
              words”.Toán tử cộng đảm bảo các stop words được xuất hiện trong
              kết quả.
              <br /> Syntax: [Keyword 1] + [Keyword 2]
              <br />
              Systax: [Keyword 2] or [Keyword 2]
              <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span> fish +and chips.
            </p>
            <p className="Description">
              5. Bạn cũng có thể yêu cầu Google điền vào chỗ trống bằng dấu *.
              <br />
              Syntax: [keywords 1] * [keywords 2] <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span> Christopher
              Columbus đã khám phá ra *.
            </p>
            <p className="Description">
              6. Tìm kiếm phạm vi số bằng toán tử numrange.
              <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span> tìm kiếm TV Sony
              từ 30 triệu đến 500 triệu với chuỗi: Sony TV 30 triệu… 500 triệu.
            </p>
            <p className="Description">
              7. Google nhận dạng 13 loại tệp chính thông qua tìm kiếm nâng cao,
              bao gồm tất cả các loại tài liệu Microsoft Office, Lotus,
              PostScript, Shockwave Flash và các tệp văn bản thuần túy.
            </p>
            <p className="Description">
              8. Tìm kiếm trực tiếp bất kỳ loại file nào bằng cách thêm loại tệp
              vào khung tìm kiếm
              <br /> Syntax: [keywords] filetype:[file type extension]
              <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span> Learn Java
              filetype:pdf
            </p>
            <p className="Description">
              9. Loại trừ toàn bộ các loại tệp được chỉ định, bạn chỉ cần sử
              dụng cùng một cú pháp Boolean mà mình đã sử dụng để loại trừ các
              từ khóa được chỉ định.
              <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span> hacking
              -filetype:doc =&gt; tìm các file có từ hacking nhưng không phải là
              file word.
            </p>
            <p className="Description">
              10. Trên thực tế, bạn có thể kết hợp bất kỳ toán tử tìm kiếm
              Boolean nào, miễn là cú pháp của bạn đúng.
              <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span> Phở -hành
              filetype:doc =&gt; Tìm file word có nội dung phở nhưng không chứa
              từ hành
            </p>
            <p className="Description">
              11. Dễ dàng tìm thấy định nghĩa của một từ mà không cần phải đi
              đến một trang web từ điển bằng cách sử dụng cú pháp sau: <br />
              Syntax: define:[keyword]
              <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span> Bạn muốn định
              nghĩa thuật toán nổi bọt là gì hãy thử: define:bubble sort
            </p>
            <p className="Description">
              12. Google cũng có một vài thông số tìm kiếm ẩn rất mạnh mẽ. Ví
              dụ: “intitle” chỉ tìm kiếm tiêu đề trang.
              <br /> <span style={{ fontWeight: `700` }}>Ví dụ:</span>
              intitle:codelearn =&gt; Tìm website có tiêu đề là codelearn
            </p>
            <p className="Description">
              13. Giúp bạn tìm kiếm nhanh tên hình ảnh, mô tả và type.
              <br /> Syntax: [keyword] image type <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span> Bạn chỉ muốn tìm
              kiếm ảnh gif bạn hãy thử : animal image gif
            </p>
            <p className="Description">
              14. Nếu bạn đang tìm kiếm file thay vì tìm trang – hãy cung cấp
              chỉ mục dưới dạng tham số intitle:parameter. Nó sẽ giúp bạn tìm
              các thư mục web và FTP.
            </p>
            <p className="Description">
              15. Công cụ sửa đổi inurl chỉ tìm kiếm địa chỉ web của trang:
              inurl: codelearn.
            </p>
            <p className="Description">
              16. Tìm các webcam trực tiếp bằng lệnh: inurl:view/view.shtml.
            </p>
            <p className="Description">
              17. Nếu bạn thêm inanchor:trong truy vấn của bạn, Google sẽ giới
              hạn kết quả đối với các trang có chứa cụm từ truy vấn mà bạn chỉ
              định trong văn bản liên kết hoặc liên kết đến trang.
              <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span> [nhà hàng
              inanchor: người sành ăn] sẽ trả về các trang trong đó văn bản liên
              kết trên các liên kết đến các trang chứa từ “người sành ăn” và
              trang chứa từ “nhà hàng”.
            </p>
            <p className="Description">
              18. Bạn muốn biết có bao nhiêu liên kết trỏ đến một trang web? Hãy
              thử lệnh sau link:tên-website.
              <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span>
              link:codelearn.io =&gt; Tìm các bài viết có liên kết trỏ về
              codelearn.io
            </p>
            <p className="Description">
              19. Tương tự, bạn có thể tìm website có nội dung giống với website
              bạn tìm kiếm bằng từ khóa related. <br />
              <span style={{ fontWeight: `700` }}>Ví dụ:</span>
              related:codelearn.io =&gt; Tìm các wesite công nghệ giống
              codelearn
            </p>
            <p className="Description">
              <h1>Kết</h1>
            </p>
            <p className="Description">
              Trên đây là các thủ thuật tìm kiếm Google hay ho mà mình đã tổng
              hợp được.Ngoài ra nếu bạn biết những thủ thuật khác hãy bình luận
              bên dưới nhé. Tiết kiệm thời gian tìm kiếm là một điều rất cần
              thiết. Mình khuyến khích các bạn nên lưu lại bài ở đâu đó dùng
              dần.
            </p>
            <p className="Description">
              <h2>Lời cảm ơn:</h2>
            </p>
            <p className="Description">
              Một số bài viết trong mục Blog được sưu tầm trên Google và các
              website, đôi khi những nguồn đó không được trích dẫn tên tác giả.
              Vì vậy Lumi sẽ để Bút danh là Sưu tầm. Trong trường hợp đó, hoặc
              sai tên tác giả, chúng tôi vô cùng xin lỗi vì sự cố này. Tác giả
              các bài viết vui lòng liên hệ với chúng tôi để Lumi bổ sung tên
              các bạn vào. Chúng tôi hoàn toàn tôn trọng các bạn. Lumi cảm ơn
              những giá trị các bạn đã chia sẻ vì cộng đồng.(Theo: Anh Quốc Code
              Learn )
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
export default BlogPage3;
