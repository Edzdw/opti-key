import { Fragment, useEffect } from "react";

const BlogPost = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>Nạp tiền</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>18 Jan 2023</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Exness</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>Hướng dẫn</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Hướng dẫn Nạp Tiền Vào tài khoản Exness</h3>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/hUW4GI-znnE?si=odGhVGArEcFtWAK2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="post-content">
            <p>
              B1: Đăng nhập vào tài khoản Exness của bạn, sau đó chọn Menu và chọn phần Nạp Tiền
            </p>
            <p>
              B2: Chọn phương thức nạp tiền phù hợp với bạn, ở trường hợp này chọn VIETQR như trong clip sau đó chọn tài khoản mà bạn muốn nạp tiền vào
            </p>
            <p>
              B3: Chọn ngân hàng mà bạn sử dụng để chuyển tiền, sau đó lưu mà QR như trong clip và tiến hành thanh toán
            </p>

            <p>
              Cuối cùng, sau khi đã hoàn thành tất cả các bước, hãy chờ đợi hế thống Exness kiểm tra giao dịch, lưu ý không load lại trang trong suốt quá trình này cho tới khi giao diện được tự 
              động chuyển về tài khoản của bạn. Chúc bạn thành công
            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};
export default BlogPost;
