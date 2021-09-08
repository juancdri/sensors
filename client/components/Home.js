import React from 'react';
import { Link } from 'react-router-dom';
// import { StyledDiv } from './style';

const Home = () => {

    return (
        <div>
            <Link to='/app' >
                <button className="boton">Start
                </button>
            </Link>
        </div>
    )
}
export default Home;