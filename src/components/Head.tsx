import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: block;
    width: 100%;
    padding: 20px 40px;
    transition: 0.5s all ease;

    &:hover {
        background-color: #000;
    }
`;

const Title = styled.h1`
    font-weight: bold;
`;

const Button = styled.button`
    text-align: center;
    border: 1px solid #444;
    color: #444;
`;

const Head = () => {
    return (
        <HeaderContainer>
            <Title>Markdown Previewer</Title>
            <Button>Button</Button>
        </HeaderContainer>
    )
}

export default Head;