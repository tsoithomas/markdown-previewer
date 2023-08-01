import React, { Component } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    text-align: center;
    border: 1px solid #444;
    color: #444;
`;

const StyledTextArea = styled.textarea`

`;

const MarkdownInput = () => {
    return (
        <InputContainer>
            <StyledTextArea/>
        </InputContainer>
    )
}

export default MarkdownInput;