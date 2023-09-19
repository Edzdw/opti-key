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
        <h1>Tạo tài khoản</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>9 Apr 2022</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Đăng kí</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>hướng dẫn</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Hướng dẫn đăng kí tài khoản Exness</h3>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/yoxrePKUllw?si=mowr7TN5_y8D9auu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="post-content">
            <p>
              Bước 1: Truy cập trang web chính thức của Exness
              <p>Bước 2: Tại giao diện trang chủ, bấm vào mục Đăng Nhập, sau đó chọn Tạo Tài Khoản.</p>
              <p>Điền các trường cần thiết, sau đó tại mục Mã giới thiệu nhập mã giới thiệu như sau:</p> 
            </p> 
            <p class = "ref-text">
              3hjpuzkltk
            </p>
            <p>
              Lưu ý: hãy sao chép và dán mã để tránh sai sót. Sau đó bấm tiếp tục, chúc mừng bạn đã tạo thành công tài khoản Exness của bạn
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
