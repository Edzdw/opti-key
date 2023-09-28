const Facts = () => {
  return (
    <section className="facts">
      <div className="flex-column-mobile">
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>36+</h3>
              <p>
                months <span>of experience</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInRight wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>10%</h3>
              <p>
                Profit<span>per Month</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>50%</h3>
              <p>
                Protection<span>Level 2</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInRight wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>30%</h3>
              <p>
                Protection <span>Level 1</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>100+</h3>
              <p>
                Customers <span></span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Facts;
