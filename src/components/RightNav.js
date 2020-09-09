import React from 'react'
import './style/RightNav.css'
import Watch from './images/watch.svg'
import Star from './images/star.svg'
import Fork from './images/fork.svg'
import DropDown from './images/drop-down.svg'

function RightNav() {
    return (
        <div>
        <div className="right-side">
        <div className="button-group">
          <div className="right-buttons">
            <button>
              <img src={Watch} alt="Watch" />
              <span style={{ marginRight: "4px" }}>Watch</span>
              <img src={DropDown} alt="Drop Down" />
            </button>
          </div>
          <div className="right-buttons">
            <button>
              <img src={Star} alt="Star" />
              <span>Star</span>
            </button>
          </div>
          <div className="right-buttons">
            <button>
              <img src={Fork} alt="Fork" />
              <span>Fork</span>
            </button>
          </div>
        </div>
      </div>
        </div>
    )
}


export default RightNav