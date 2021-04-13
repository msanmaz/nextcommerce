import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faStar,faStarHalfAlt,faStarOfLife  } from '@fortawesome/free-solid-svg-icons';
const Rating = ({value,text}) => {
    return (
        <div className="w-30 h-5 flex flex-nowrap">
            <span className="h-4 w-4 text-green-500">
                {value >=1 ?
             <FontAwesomeIcon icon={faStar}/>
             : value>=0.5 ?
             <FontAwesomeIcon icon={faStarHalfAlt}/>
             :
             <FontAwesomeIcon icon={farFaStar}/>

            }
            </span>
            <span className="h-4 w-4 text-green-500">
                {value >=2 ?
             <FontAwesomeIcon icon={faStar}/>
             : value>=1.5 ?
             <FontAwesomeIcon icon={faStarHalfAlt}/>
             :
             <FontAwesomeIcon icon={farFaStar}/>

            }
            </span>
            <span className="h-4 w-4 text-green-500">
                {value >=3 ?
             <FontAwesomeIcon icon={faStar}/>
             : value>=2.5 ?
             <FontAwesomeIcon icon={faStarHalfAlt}/>
             :
             <FontAwesomeIcon icon={farFaStar}/>

            }
            </span>
            <span className="h-4 w-4 text-green-500">
                {value >=4 ?
             <FontAwesomeIcon icon={faStar}/>
             : value>=3.5 ?
             <FontAwesomeIcon icon={faStarHalfAlt}/>
             :
             <FontAwesomeIcon icon={farFaStar}/>

            }
            </span>
            <span className="h-4 w-4 text-green-500">
                {value >=5 ?
             <FontAwesomeIcon icon={faStar}/>
             : value>=4.5 ?
             <FontAwesomeIcon icon={faStarHalfAlt}/>
             :
             <FontAwesomeIcon icon={farFaStar}/>

            }
            </span>

            <span className="px-2">{text && text}</span>
        </div>
    )
}

export default Rating
