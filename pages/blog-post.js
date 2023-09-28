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
        <h1>Create an Account</h1>
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
              <span>Register</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>Guide</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Guide to Creating an Exness Account</h3>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/MDTM8NDXqUI?si=3tAnQD3afvFJAeBf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="post-content">
            <p>
              Step 1: Visit the official Exness website
              <p>Step 2: On the homepage interface, click on the Login section, then select Create an Account.</p>
              <p>Fill in the required fields, then in the Referral Code section, enter the referral code as follows::</p> 
            </p> 
            <p class = "ref-text">
              3hjpuzkltk
            </p>
            <p>
              Note: Please copy and paste the code to avoid mistakes. Then click continue, congratulations, you have successfully created your Exness account.
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
