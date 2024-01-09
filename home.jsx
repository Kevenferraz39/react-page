import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
 background-color: #f0f0f0;
 padding: 2rem;
 text-align: center;
`;

const Home = () => {
 return (
    <HomeWrapper>
      <h2>Welcome to the Swedish Museum of Modern Art</h2>
      <p>
        Museum
        <br />
        ADDRESS
        <br />
        123 Storgatan, Umeå
      </p>
      <p>
        Open Today: 9:00 - 5:00
        <br />
        Price: News - 129 kr
      </p>
    </HomeWrapper>
 );
};

export default Home;
