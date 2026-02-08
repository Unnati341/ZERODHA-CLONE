import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
 
}) {
  return (
    <div className="container mt-5 ">
      <div className="row align-items-center">
        <div className="col-6 p-5 mt-5 "style={{ marginTop: "80px" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            
            <a href={learnMore} >
              learnMore
            </a>
          </div>
          
           </div>
         <div className="col-6 mt-1">
            <img src={imageURL} />
          </div>
       
      </div>
    </div>
  );
}

export default RightSection;
