import React from "react";

const BookATable = () => {
  return (
    
      <div className="contactus" id="contactus">
        <div className="contact">
          <h1>
            Book a <span>Table</span>
          </h1>

          <div className="form">
            <div className="uss">
              <input
                type="text"
                placeholder="Name"
                className="name side input"
              />
              <input
                type="number"
                placeholder="Number"
                className="number side input"
              />
            </div>
            <input
              type="text"
              placeholder="No. of People"
              className="subject input"
            />
            <br />

            <input
              type="text"
              placeholder="Booking Date"
              className="input date"
            />
            <input
              type="text"
              placeholder="Booking Time"
              className="input time"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Message"
              className="Message"
              style={{ fontSize: "20px", padding: "5px" }}
            ></textarea>
            <br />

            <button>Book Now</button>
          </div>
        </div>
      </div>
    
  );
};

export default BookATable;
