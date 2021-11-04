import React, { Component } from "react";
import random from "lodash.random";
import Columns from "react-columns";
import styles from "./styles.css";
import MagCard2 from "./MagCard2";
const dimensions = [
  {
    width: 800,
    height: 700,
    title: "What is MySQL?",
    pic: "assets/img/mc1.svg",
    text: "MySQL is an open-source relational database management system (RDBMS). Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter, and 'SQL', the abbreviation for Structured Query Language. A relational database organizes data into one or more data tables in which data types may be related to each other; these relations help structure the data. SQL is a language programmers use to create, modify and extract data from the relational database, as well as control user access to the database. In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer's storage system, manages users, allows for network access and facilitates testing database integrity and creation of backups.",
  },
  {
    width: 800,
    height: 600,
    title: "What is CSS?",
    pic: "assets/img/mc2.svg",
    text: "CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is, with a simple syntax example, and also covers some key terms about the language.",
  },
  {
    width: 800,
    height: 800,
    title: "What is java?",
    pic: "assets/img/mc3.svg",
    text: "Java is a programming language and computing platform first released by Sun Microsystems in 1995. There are lots of applications and websites that will not work unless you have Java installed, and more are created every day. Java is fast, secure, and reliable. From laptops to datacenters, game consoles to scientific supercomputers, cell phones to the Internet, Java is everywhere! ",
  },
  {
    width: 800,
    height: 600,
    title: "What is C#?",
    pic: "assets/img/mc4.svg",
    text: "C# is a strongly typed object-oriented programming language. C# is open source, simple, modern, flexible, and versatile. In this article, let’s learn what C# is, what C# can do, and how C# is different than C++ and other programming languages. A programming language on computer science is a language that is used to write software programs. C# is a programming language developed and launched by Microsoft in 2001. C# is a simple, modern, and object-oriented language that provides modern day developers flexibility and features to build software that will not only work today but will be applicable for years in the future.",
  },
  {
    width: 800,
    height: 400,
    title: "What is Vue.js?",
    pic: "assets/img/mc5.svg",
    text: "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.",
  },
  {
    width: 800,
    height: 400,
    title: "What is Next.js?",
    pic: "assets/img/mc6.svg",
    text: "As a digital design and build agency, we have been using Node.js since its very inception. Having identified it as a game changer for us, it has been pivotal in allowing us to deliver highly scalable, data intensive, real time back-end services to power the websites and apps for many of our clients including The Times, Riot Games, The Wall Street Journal and many more. A laser-like focus on speed and performance has always been a guiding star for us. When React JS came along, it was a perfect fit since we were naturally using JavaScript on the front and back-end of our clients’ applications. So as React JS has developed and become almost de facto for building website front-ends, our heads were turned by the benefits of Next.js. ",
  },
  {
    width: 800,
    height: 450,
    title: "What is HTML?",
    pic: "assets/img/mc7.svg",
    text: "HTML stands for Hyper Text Markup Language - HTML is the standard markup language for creating Web pages - HTML describes the structure of a Web page - HTML consists of a series of elements - HTML elements tell the browser how to display the content",
  },
  {
    width: 800,
    height: 400,
    title: "What is ASP.NET?",
    pic: "assets/img/mc8.svg",
    text: "ASP.NET is an open source web framework, created by Microsoft, for building modern web apps and services with .NET. .NET is a developer platform made up of tools, programming languages, and libraries for building many different types of applications. The base platform provides components that apply to all different types of apps. Additional frameworks, such as ASP.NET, extend .NET with components for building specific types of apps.",
  },
];

class ColomnA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 4,
    };
    this.onColumnsButtonClick = this.onColumnsButtonClick.bind(this);
  }

  onColumnsButtonClick() {
    this.setState({ columns: random(1, 4) });
  }

  renderItems() {
    return dimensions.map(({ width, height, title, text, pic }, i) => (
      <div
        key={i}
        className={styles.demoItem}
        minwidth={"500px"}
        style={{
          paddingTop: (height / width) * 100 + "%",
          minwidth: "500px",
        }}
      >
        <MagCard2 {...{ title, text, pic }} />
      </div>
    ));
  }

  render() {
    const { columns } = this.state;
    const queries = [
      {
        columns: 2,
        query: "min-width: 500px",
      },
      {
        columns: 3,
        query: "min-width: 1000px",
      },
      {
        columns: 4,
        query: "min-width: 1500px",
      },
    ];
    return (
      <div style={{ background: "#112233" }}>
        <Columns gap="2px" columns={columns} queries={queries}>
          {this.renderItems()}
        </Columns>
      </div>
    );
  }
}
export default ColomnA;
