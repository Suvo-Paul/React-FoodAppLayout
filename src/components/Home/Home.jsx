import React from "react";

const Home = () => {
  return (
    <div>
      <div className="home" id="home">
        <div className="ad" data-aos="fade-right">
          <h1>
            Enjoy Your <span className="food">Delicious Food</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat
            eaque illum cumque dolorum temporibus ab. Illo culpa, quidem
            doloremque amet deserunt, voluptatem eaque perferendis iure iusto
            voluptate explicabo fug
          </p>
          <button>Book A Table</button>
        </div>
        <div data-aos="fade-left">
          <img src="./image/hero-img.png" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
