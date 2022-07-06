  import React from 'react';


  const RatingStars = (props) => {
    const {handleClick} = props; 
    return (
      <div className="container">
        <div className="justify-content-center m-3">
                <h3>Filtrar por clasificación:</h3> 
                  <div>
                      <span onClick={handleClick}  id="1" className="fa fa-star star"></span>
                      <span onClick={handleClick}  id="2" className="fa fa-star star ms-2"></span>
                      <span onClick={handleClick}  id="3" className="fa fa-star star ms-2"></span>
                      <span onClick={handleClick}  id="4" className="fa fa-star star ms-2"></span>
                      <span onClick={handleClick}  id="5" className="fa fa-star star ms-2"></span> 
                  </div> 
          </div>

      </div>
    )
  }

  export default RatingStars