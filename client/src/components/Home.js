import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv } from './style';

export const Home = () => {

    return (
        <div>
            <Link to='/sensor' >
                <button className="boton">Start
                </button>
            </Link>
        </div>
    )
}
export default Home;