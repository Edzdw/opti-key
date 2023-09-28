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
        <h1>Internal Transfer </h1>
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
              <span>Tranfers</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>100 comments</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Guide to Internal Fund Transfers Between Exness Accounts</h3>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/hUW4GI-znnE?si=odGhVGArEcFtWAK2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="post-content">
            <p>
              Step 1: Log in to your Exness account, select the account you want to perform an internal fund transfer from, then click on 'Transfer Funds'.
            </p>
            <p>
              Step 2: In the interface, select the method, choose 'Transfer to another user,' then enter the recipient's ID and the email used to create their Exness account.
            </p>
            <p>
              Step 3: Enter the amount you want to transfer, then click 'Confirm' and wait for the system to send an OTP code to your phone - then enter the OTP code and click 'Complete'.
            </p>

            <p>
               After completing all the steps above, Exness will automatically transfer the funds from your account to the recipient's ID. Best of luck!
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
