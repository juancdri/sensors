import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv } from './styled';

export const Home = () => {

    return (
        <StyledDiv>
            <Link to='/sensor' >
                <button className="boton">Start
                </button>
            </Link>
        </StyledDiv>
    )
}
export default Home;