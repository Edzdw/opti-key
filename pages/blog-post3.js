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
        <h1>Chuyển nội bộ </h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>13 June 2023</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Chuyển tiền</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>100 comments</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Hướng dẫn chuyển tiền nội bộ giữa các tài khoản Exness</h3>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/hUW4GI-znnE?si=odGhVGArEcFtWAK2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="post-content">
            <p>
              B1: Đăng nhập vào tài khoản Exness của bạn, chọn tài khoản mà bạn muốn chuyển tiền nội bộ sau đó nhấn "Chuyển Tiền"
            </p>
            <p>
              B2: Ở giao diện chọn phương thức, chọn mục "Chuyển đến một người dùng khác" sau đó nhập số ID và Email dùng để tạo tài khoản Exness của người nhận
            </p>
            <p>
              B3: Nhập số tiền mà bạn muốn chuyển, sau đó bấm "Xác Nhận" và chờ hệ thống gửi mã OTP về số điện thoại của bạn - sau đó nhập mã OTP và bấm Hoàn Tất.
            </p>

            <p>
              Sau khi hoàn thành tất cả các bước trên, Exness sẽ tự động chuyển tiền từ tài khoản của bạn đến ID nhận. Chúc bạn thành công !!
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
