import React from "react";
import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Axios from "axios";
import { normalAlert } from "../Swal";

const About = () => {
  const [networks, setNetworks] = React.useState([]);
  const [startIndex1, setStartIndex1] = React.useState(0);
  const [startIndex2, setStartIndex2] = React.useState(0);
  const [startIndex3, setStartIndex3] = React.useState(0);
  const [startIndex4, setStartIndex4] = React.useState(0);
  const [startIndex5, setStartIndex5] = React.useState(0);

  const itemsPerPage = 5;

  const handleNextF1 = () => {
    setStartIndex1((prevStartIndex) => prevStartIndex + itemsPerPage);
  };

  const handlePrevF1 = () => {
    setStartIndex1((prevStartIndex) => prevStartIndex - itemsPerPage);
  };

  const visibleItemsF1 = networks?.F1?.slice(startIndex1, startIndex1 + itemsPerPage);

  const handleNextF2 = () => {
    setStartIndex2((prevStartIndex) => prevStartIndex + itemsPerPage);
  };

  const handlePrevF2 = () => {
    setStartIndex2((prevStartIndex) => prevStartIndex - itemsPerPage);
  };

  const visibleItemsF2 = networks?.F2?.slice(startIndex2, startIndex2 + itemsPerPage);

  const handleNextF3 = () => {
    setStartIndex3((prevStartIndex) => prevStartIndex + itemsPerPage);
  };

  const handlePrevF3 = () => {
    setStartIndex3((prevStartIndex) => prevStartIndex - itemsPerPage);
  };

  const visibleItemsF3 = networks?.F3?.slice(startIndex3, startIndex3 + itemsPerPage);

  const handleNextF4 = () => {
    setStartIndex4((prevStartIndex) => prevStartIndex + itemsPerPage);
  };

  const handlePrevF4 = () => {
    setStartIndex4((prevStartIndex) => prevStartIndex - itemsPerPage);
  };

  const visibleItemsF4 = networks?.F4?.slice(startIndex4, startIndex4 + itemsPerPage);

  const handleNextF5 = () => {
    setStartIndex5((prevStartIndex) => prevStartIndex + itemsPerPage);
  };

  const handlePrevF5 = () => {
    setStartIndex5((prevStartIndex) => prevStartIndex - itemsPerPage);
  };

  const visibleItemsF5 = networks?.F5?.slice(startIndex5, startIndex5 + itemsPerPage);

  React.useEffect(() => {
    if (localStorage.getItem("email")) {
      let config = {
        method: 'get',
        url: `https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/test/${encodeURI(localStorage.getItem("email"))}`
      };

      Axios.request(config)
        .then((response) => {
          setNetworks(response.data);
        })
        .catch((error) => {
          normalAlert("Có lỗi xảy ra, vui lòng thử lại sau!", "error");
        });
    } else {
      return;
    }
  }, []);

  return (
    <section
      className="portfolio network main-section flex-column-mobile"
      id="network"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Our Network
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
            <ul> <h3 class = 'network-title'>Danh sách F1</h3>
              {Array.isArray(networks.F1) && networks.F1.length > 0 ? (
                <>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {visibleItemsF1.map((item, id) => (
                      <li key={id} style={{ paddingLeft: "20px" }}>{startIndex1 + id + 1} - {item}</li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    {startIndex1 > 0 && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handlePrevF1}
                      >
                        Previous
                      </li>
                    )}
                    {startIndex1 + itemsPerPage < networks.F1.length && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handleNextF1}
                      >
                        Next
                      </li>
                    )}
                  </div>
                </>
              ) : (
                <li>Không có dữ liệu F1</li>
              )}
            </ul>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content ">
            <ul> <h3 class = 'network-title'>Danh sách F2</h3>  
              {Array.isArray(networks.F2) && networks.F2.length > 0 ? (
                <>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {visibleItemsF2.map((item, id) => (
                      <li key={id} style={{ paddingLeft: "20px" }}>{startIndex2 + id + 1} - {item}</li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    {startIndex2 > 0 && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handlePrevF2}
                      >
                        Previous
                      </li>
                    )}
                    {startIndex2 + itemsPerPage < networks.F2.length && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handleNextF2}
                      >
                        Next
                      </li>
                    )}
                  </div>
                </>
              ) : (
                <li>Không có dữ liệu F2</li>
              )}
            </ul>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}

        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <ul><h3 class = 'network-title'>Danh sách F3 </h3>  
              {Array.isArray(networks.F3) && networks.F3.length > 0 ? (
                <>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {visibleItemsF3.map((item, id) => (
                      <li key={id} style={{ paddingLeft: "20px" }}>{startIndex3 + id + 1} - {item}</li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    {startIndex3 > 0 && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handlePrevF3}
                      >
                        Previous
                      </li>
                    )}
                    {startIndex3 + itemsPerPage < networks.F3.length && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handleNextF3}
                      >
                        Next
                      </li>
                    )}
                  </div>
                </>
              ) : (
                <li>Không có dữ liệu F3</li>
              )}
            </ul>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}

        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <ul> <h3 class = 'network-title'>Danh sách F4 </h3> 
              {Array.isArray(networks.F4) && networks.F4.length > 0 ? (
                <>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {visibleItemsF4.map((item, id) => (
                      <li key={id} style={{ paddingLeft: "20px" }}>{startIndex4 + id + 1} - {item}</li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    {startIndex4 > 0 && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handlePrevF4}
                      >
                        Previous
                      </li>
                    )}
                    {startIndex4 + itemsPerPage < networks.F4.length && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handleNextF4}
                      >
                        Next
                      </li>
                    )}
                  </div>
                </>
              ) : (
                <li>Không có dữ liệu F4</li>
              )}
            </ul>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}

        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <ul> <h3 class = 'network-title'>Danh sách F5 </h3> 
              {Array.isArray(networks.F5) && networks.F5.length > 0 ? (
                <>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {visibleItemsF5.map((item, id) => (
                      <li key={id} style={{ paddingLeft: "20px" }}>{startIndex5 + id + 1} - {item}</li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    {startIndex5 > 0 && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handlePrevF5}
                      >
                        Previous
                      </li>
                    )}
                    {startIndex5 + itemsPerPage < networks.F5.length && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handleNextF5}
                      >
                        Next
                      </li>
                    )}
                  </div>
                </>
              ) : (
                <li>Không có dữ liệu F5</li>
              )}
            </ul>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
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
export default About;
