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

const MarkdownInput = () => {
    return (
        <InputContainer>
            <StyledTextArea defaultValue="# Hello World"></StyledTextArea>
        </InputContainer>
    )
}

export default MarkdownInput;