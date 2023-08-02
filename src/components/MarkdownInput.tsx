import { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    color: #444;
`;

const StyledTextArea = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 20px;
    background-color: #ffbbde;
    color: #ba0160;
    font-size: 16px;
    resize: none;
    cursor: auto;
`;

export interface MarkdownInputProps {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
}


const MarkdownInput = (props: MarkdownInputProps) => {
    return (
        <InputContainer key="editor1">
            <StyledTextArea onChange={props.onChange}  defaultValue={props.value}  key="editor2"/>
        </InputContainer>
    )
}

export default MarkdownInput;