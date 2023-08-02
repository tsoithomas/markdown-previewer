import styled from 'styled-components';
import ReactMarkdown from "react-markdown";

const OutputContainer = styled.div`
    box-sizing: border-box;
    color: #444;
    background-color: #ffcfe7;
    color: #ba0160;
    width: 100%;
    overflow-y: scroll;
    padding: 0 20px;
`;


export interface MarkdownOutputProps {
    markdown: string
}

const MarkdownOutput = (props: MarkdownOutputProps) => {

    return (
        <OutputContainer>
            <ReactMarkdown>
                {props.markdown}
            </ReactMarkdown>
        </OutputContainer>
    )
}

export default MarkdownOutput;