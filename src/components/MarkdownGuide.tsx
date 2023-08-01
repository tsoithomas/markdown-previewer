import React, { Component } from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`
    text-align: center;
    border: 1px solid #444;
    color: #444;
`;

const MarkdownGuide = () => {
    return (
        <GuideContainer>
            <ul>
                <li>test</li>
            </ul>
        </GuideContainer>
    )
}

export default MarkdownGuide;