const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
              "I have been investing consistently since February 2023 with the goal of building wealth. My current account has increased an astonishing 2000% compared to the initial deposit."
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
              "I have been investing with Infinity from the beginning, and we have had over 10 continuous updates and achieved many positive accomplishments. I hope to have even more success in the future."
              </span>
              <span className="person">Fury</span>
              <span className="job">Client - Optikey Client Users</span>
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
