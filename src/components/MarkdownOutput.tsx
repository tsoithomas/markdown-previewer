import React, { Component } from 'react';
import styled from 'styled-components';

const OutputContainer = styled.div`
    text-align: center;
    border: 1px solid #444;
    color: #444;
`;

export interface MarkdownOutputProps {
    markdown: string
}

const MarkdownOutput = (props: MarkdownOutputProps) => {
    return (
        <OutputContainer>
        </OutputContainer>
    )
}

export default MarkdownOutput;