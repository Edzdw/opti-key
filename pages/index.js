import React from "react";
import Header from "@/src/components/Header";
import ScrollBar from "@/src/components/ScrollBar";
import About from "@/src/components/sections/About";
import Blog from "@/src/components/sections/Blog";
import Contact from "@/src/components/sections/Contact";
import Copyright from "@/src/components/sections/Copyright";
import Facts from "@/src/components/sections/Facts";
import Home from "@/src/components/sections/Home";
import Network from "@/src/components/sections/Network";
import Portfolio from "@/src/components/sections/Portfolio";
import Testimonials from "@/src/components/sections/Testimonials";
import Separator from "@/src/components/Separator";
import { jqueryFuntion } from "@/src/utilits";
import { Fragment, useEffect } from "react";
const Index = () => {
  useEffect(() => {
    jqueryFuntion();
  });

  const [email, setEmail] = React.useState("");

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      return;
    }
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <Fragment>
      <div className="page-content">
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">
          <Home />
            <About />
            <Separator type={"down"} />
            <Facts />
            <Separator type={"up"} />
            <Portfolio />
            <Separator type={"down"} />
            <Testimonials />
            <Separator type={"up"} />
            <Contact />
            <Separator type={"down"} />
            <Blog />
            <Separator type={"up"} />
            {email && <>
              <Network />
              <Separator type={"down"} /> 
            </>}
            <Copyright />

          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
};
export default Index;
