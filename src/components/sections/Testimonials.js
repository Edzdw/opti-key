const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Tôi đã đầu tư đều đặn hàng tháng từ tháng 2 năm 2023 với mục tiêu xây dựng tài sản. Tài khoản hiện tại của tôi đã tăng lên đáng kinh ngạc 2000% so với số tiền gửi ban đầu. "
              </span>
              <span className="person">Viet Phan</span>
              <span className="job">User - Exness</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "Tôi đã đầu tư cùng Infinity từ đầu, và chúng tôi đã có hơn 10 cập nhật liên tục và đạt được nhiều thành tựu tích cực. Tôi hy vọng sẽ có thêm nhiều thành công hơn trong tương lai. "
              </span>
              <span className="person">Fury</span>
              <span className="job">Client - Infinity EA user</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
