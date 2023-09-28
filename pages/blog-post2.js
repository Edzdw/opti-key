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
        <h1>Deposit</h1>
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
              <span>Guide</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Guide to Depositing Funds into Your Exness Account.</h3>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/hUW4GI-znnE?si=odGhVGArEcFtWAK2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="post-content">
            <p>
              Step 1: Log in to your Exness account, then select Menu and choose the Deposit Funds section.
            </p>
            <p>
              Step 2: Choose the deposit method that suits you, in this case, select VIETQR as shown in the video, then choose the account you want to deposit funds into.
            </p>
            <p>
              Step 3: Select the bank you use for the transfer, then save the QR code as shown in the video and proceed with the payment.
            </p>

            <p>
               Finally, after completing all the steps, please wait for the Exness system to verify the transaction. Note not to refresh the page during this process until the interface automatically switches back to your account. Wishing you success.
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
