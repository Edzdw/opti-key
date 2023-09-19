const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/about.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                OM Group
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Cộng đồng OM
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="content-containers  animated-layer fade-in-up-animation fadeInUp wow">
                    <div class = "infos_contents">
                    Sự vận hành vạn vật luôn tuân theo các nguyên lý của tự nhiên… Khi tĩnh lặng thì tự khắc sẽ cảm nhận được về chân lý, mà chân lý luôn là 
                    </div>

                    <div class = "infos_contents">
                    những điều rất đơn giản và cũng rất giản dị… Quy Luật Tài chính cũng như thế Nó chỉ là phương tiện nó có thể đưa bạn vào vùng tối tăm,  
                    </div>

                    <div class = "infos_contents">
                    hoặc cũng có thể đưa bạn đến vùng ánh sáng êm dịu, quan trọng là góc nhìn của bạn đối với Nó như thế nào mà thôi… 
                    </div>

                    <div class = "infos_contents">
                    Nếu Bạn được cam kết đến vùng ánh sáng êm dịu thì Bạn có cam kết lại … để rồi từng ngày sự hòa hợp luôn được tốt hơn !!!
                    </div>

                  </span>
                </span>
              </li>
             
            
            </ul>
            {/* <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Địa chỉ :</span>
                    <span>Can Tho, HCMC</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Số Điện Thoại :</span>
                    <span>+84939635089</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <span> alexfinance101@outlook.com</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Accomplishments :</span>
                    <span>Building new Market & new GA in Mekong Delta</span>
                    <p>Building 10 Zone Head currently.</p>
                    <span>Building 833 agency & 99 Agency leaders at the end of 31 July 2022.</span>
                  </span>
                </span>
              </li> 
            </ul> */}
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                Tính năng
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-wordpress-plain" />
              </span>
              <h4>Kiểm soát AI</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-jquery-plain" />
              </span>
              <h4>24/5</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-angularjs-plain" />
              </span>
              <h4>Phòng chống rủi ro</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-drupal-plain" />
              </span>
              <h4>Mốc bảo vệ</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-react-plain" />
              </span>
              <h4>Phân tích real-time</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-docker-plain" />
              </span>
              <h4>Phân tích chiến lược</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-nodejs-plain" />
              </span>
              <h4> Vào/thoát lệnh </h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-sass-plain" />
              </span>
              <h4>Đa dạng cặp tiền</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                Thành tựu
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Thành tựu 1</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>10 2022</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span> Sóng Hồi</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}

            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Thành tựu 2</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>12 2022</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Giao dịch 2 chiều</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}

            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>Thành tựu 3</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>3 2023</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Tự Xóa Lệnh</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}

            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Thành tựu 4</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>4 2023</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Giảm vị thế xấu</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Thành tựu EA</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2023+</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Đang phát triển</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
