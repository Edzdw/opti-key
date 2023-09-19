const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Welcome<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">To</span>
              <span className="intro animated-layer">
                "Beyond a Simple Bot Trade - Your Gateway to Infinite Opportunities!"
              </span>
            </span>
            <span>
              <span className="animated-layer">Infinity EA</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
