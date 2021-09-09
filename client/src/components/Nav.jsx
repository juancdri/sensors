import React from 'react';
import { Link } from 'react-router-dom';
// import { StyledDiv } from './style';

export const Nav = () => {

    return (
        <div>
            
            {true  ?<Link to='/create' >
                <button>Create Sensor</button>
            </Link>:<Link to='/app' >
                <button>Back</button>
            </Link>}
        </div>
    )
}
export default Nav;