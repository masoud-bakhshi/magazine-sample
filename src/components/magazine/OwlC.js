import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/owl.carousel.min.js";
import OwlCard from "./Card";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  myItem: {
    display: "flex",
    justifyContent: "center",
    spacing: 2,
    margin: 2,
  },
  myOwl: {
    spacing: 2,
  },
});

const OwlC = () => {
  const classes = useStyles();
  const owlresp = {
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1350: {
        items: 4,
      },
    },
  };
  const dataR = [
    {
      pic: "assets/img/m1.svg",
      title: "What is JavaScript?",
      explain:
        "JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.).  There are also more advanced server side versions of JavaScript such as Node.js, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers). Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.",
    },
    {
      pic: "assets/img/m2.svg",
      title: "What Is React?",
      explain:
        "React is a JavaScript library created by Facebook - React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
    },
    {
      pic: "assets/img/m3.svg",
      title: "What Is Node.js?",
      explain:
        "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop",
    },
    {
      pic: "assets/img/m4.svg",
      title: "What is MongoDB?",
      explain:
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL). ",
    },
  ];
  return (
    <div
      style={{ background: "#112233" }}
      container
      className={classes.root}
      spacing={2}
    >
      <OwlCarousel
        className={`owl-theme ${classes.myOwl}`}
        loop
        nav
        autoplay="true"
        autoplayTimeout="1500"
        autoplayHoverPause="false"
        items={4}
        responsiveClass="true"
        responsive={owlresp.responsive}
      >
        {dataR.map((data) => (
          <div key={data.title} className={`item ${classes.myItem}`}>
            <OwlCard {...data} />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default OwlC;
