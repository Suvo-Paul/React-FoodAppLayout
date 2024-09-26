import React from "react";

const ChefsCard = () => {
  return (
    <div className="chefs" id="chefs">
        <h1 className="our">
            Our <span className="chefredname">Chefs</span>
        </h1>
        <div className="chefsphoto">
            <div className="photos">
                <img src="./image/pexels-miquel-ferran-gomez-figueroa-3814446.jpg" alt="Image"/>
                <div>
                    <h2 className="chefsname">Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat eaque illum cumque dolorum temporibus ab.</p>
                </div>
                
            </div>
            <div className="photos">
                <img src="./image/man-890885_640.jpg" alt="Image"/>
                <div>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat eaque illum cumque dolorum temporibus ab.</p>
                </div>
                
            </div>
            <div className="photos">
                <img src="./image/70794.jpg" alt="Image"/>
                <div>
                    <h2 className="chefsnames">Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat eaque illum cumque dolorum temporibus ab.</p>
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default ChefsCard;
