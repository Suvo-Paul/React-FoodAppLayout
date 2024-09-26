import React from "react";

const About = () => {
  return (
    <div className="aboutus" id="aboutus">
      <h1>
        About <span className="us">Us</span>
      </h1>
      <div className="about" data-aos="fade-up">
        <div className="restaurant">
          <img src="./image/restaurant.webp" alt="Image" />
          {/* <h1>Restaurant Ambience</h1> */}
        </div>
        <div className="aboutimage">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum non
            reprehenderit ex quasi id a animi necessitatibus voluptatibus nihil
            perspiciatis consectetur, dolorem molestiae ullam ipsa numquam
            possimus laudantium molestias mollitia!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum non
            reprehenderit ex quasi id a animi necessitatibus voluptatibus nihil
            perspiciatis consectetur, dolorem molestiae ullam ipsa numquam
            possimus laudantium molestias mollitia!
          </p>
          <p>
            dolorem molestiae ullam ipsa numquam possimus laudantium molestias
            mollitia! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cum non reprehenderit ex quasi id a animi necessitatibus
            voluptatibus nihil perspiciatis consectetur, dolorem molestiae ullam
            ipsa numquam possimus laudantium molestias mollitia! Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Cum non reprehenderit
            ex quasi id a animi necessitatibus voluptatibus nihil perspiciatis
            consectetur, dolorem molestiae ullam ipsa numquam possimus
            laudantium molestias mollitia!
          </p>
          <div className="aboutwidth">
            <h3>For booking a table</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum non
              reprehenderit ex quasi id a animi necessitatibus voluptatibus
              nihil perspiciatis consectetur, dolorem molestiae ullam ipsa
              numquam possimus laudantium molestias mollitia! Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Cum non reprehenderit ex
              quasi id a animi necessitatibus voluptatibus nihil perspiciatis
              consectetur, dolorem molestiae ullam ipsa numquam possimus
              laudantium molestias mollitia! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Cum non reprehenderit ex quasi id a
              animi necessitatibus voluptatibus nihil perspiciatis consectetur,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
