import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Portfolio
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-1.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Infinity 1</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>One-way Trade</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Developers :
                  </span>
                  <span>Infinity Team</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Progress :
                  </span>
                  <span>3 Month</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Framework :
                  </span>
                  <span>MQL4</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide"> 
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content ">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://www.youtube-nocookie.com/embed/dnnFb9V9uLI"
                allowFullScreen=""
              />
            </div>
          </div> 
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Forex Analysis</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Forex Analysis </span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Customers :
                  </span>
                  <span>Smart Risk</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Progress :
                  </span>
                  <span>1 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Framework :
                  </span>
                  <span>After Effects, AE, MQL4</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div> 
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide> 
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-4.jpg" title="img" />
              </SwiperSlide>
 
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Infinity 4</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Reduce Negative Position</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Developers :
                  </span>
                  <span>Infinity Team</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Progress :
                  </span>
                  <span>1 Month</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Framework :
                  </span>
                  <span>MQL4</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
                className="img-fluid"
                src="assets/portfolio/project-3.jpg"
                alt="External Project"
              />
            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Infinity 3</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Auto Del Order</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Developers :
                  </span>
                  <span>Infinity Team</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Progress :
                  </span>
                  <span>5 Month</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Framework :
                  </span>
                  <span>MQL4</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
         {/* PORTFOLIO ITEM STARTS */}
         <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
                className="img-fluid"
                src="assets/portfolio/project-2.jpg"
                alt="External Project"
              />
            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Infinity 2</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project:
                  </span>
                  <span>Two-way Trade</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Developers :
                  </span>
                  <span>Infinity Team</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Progress :
                  </span>
                  <span>2 month</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Framework :
                  </span>
                  <span>MQL4</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}  


      
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
