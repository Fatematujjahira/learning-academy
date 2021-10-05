import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Star = () => {
    return (
        <div>
            <div className=" d-flex">
            <div className="icon">
                    <FontAwesomeIcon  icon={faStar} />
              </div>
            <div className="icon">
                    <FontAwesomeIcon icon={faStar} />
              </div>
            <div className="icon">
                    <FontAwesomeIcon icon={faStar} />
              </div>
            <div className="icon">
                    <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="icon">
                    <FontAwesomeIcon icon={faStarHalf} />
                  </div>

            </div>
        </div>
    );
};

export default Star;