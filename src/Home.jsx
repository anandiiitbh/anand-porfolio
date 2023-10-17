import React from "react";

function Home() {
  const handleScroll = (event) => {
    let scrollElem =
      event.target.scrollTop < 500 ? event.target.scrollTop : 500;
    const titleName = document.getElementsByClassName("titleName")[0];
    const subTitle = document.getElementById("nameSubtitle");
    titleName.style.transform =
      "translate(" + (-50 + scrollElem / 10) + "%, 0)";
    titleName.style.top = 40 - (scrollElem / 500) * 40 + "%";
    titleName.style.left = 50 - (scrollElem / 500) * 50 + "%";
    scrollElem >= 400
      ? (subTitle.style.display = "none")
      : (subTitle.style.display = "block");
    event.target.scrollTop >= 900
      ? (titleName.style.color = "black")
      : (titleName.style.color = "white");
  };
  return (
    <>
      <div className="titleName">
        <h1 id="nameTitle">Anand Kumar</h1>
        <h5 id="nameSubtitle">Frontend Developer</h5>
      </div>
      <div className="container" onScroll={(e) => handleScroll(e)}>
        <section style={{ background: "black" }}></section>
        <section>
          <h1>two</h1>
        </section>
        <section>
          <h1>three</h1>
        </section>
        <section>
          <h1>four</h1>
        </section>
      </div>
    </>
  );
}
export default Home;
