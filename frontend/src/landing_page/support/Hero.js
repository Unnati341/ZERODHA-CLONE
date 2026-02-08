import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-5" id="supportWrappers">
        <h5>Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>
       <div className="row p-5 m-3 " >
        <div className="col-5 p- 3" >
            <h1 className="fs-3 mb-4">Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder="Eg.  how do I activate F&Q" className="mb-3"/><br/>
            <a href="" className="p-2">Track account opening</a>
            <a href="" className="p-2">Track segment activation</a>
            <a href="" className="p-2">Intraday margin</a>
            <a href=""className="p-2">kite user manual</a>
        </div>
        <div className="col-2 p-2" ></div>
        <div className="col-5 p-2" >
          <h1 className="fs-3">featured</h1>
          <ol style={{lineHeight:"40px"}}>
            <li> <a href="">Current Takeover and Delisting-january 2024</a></li>
            <li><a href="">Latest Intraday leverages-MIS & CO</a></li>
          </ol>
          
            
        </div>

      </div>
    </section>
  );
}

export default Hero;
