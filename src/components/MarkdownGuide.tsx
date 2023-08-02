import styled from 'styled-components';
import '../App.css'

const GuideContainer = styled.div`
    border-top: 1px solid #ba0160;
    border-bottom: 1px solid #ba0160;
    background-color: #ffe2f1;
    color: #ba0160;
    padding: 10px 40px;
    margin: 0;
    transition: 0.5s all ease-in-out;
    height: 350px;
    overflow-y: hidden;
`;

const MarkdownGuide = () => {
    return (
        <GuideContainer id="cheatsheet" className='hide'>
            <h2>Markdown Cheat Sheet</h2>
            <ul>
                <li><code># H1</code></li>
                <li><code>## H2</code></li>
                <li><code>### H3</code></li>
                <li><code>**bold**</code></li>
                <li><code>*italic*</code></li>
                <li><code>[Link](http://a.com)</code></li>
                <li><code>![Image](http://url/a.png)</code></li>
                <li><code>`inline code`</code></li>
                <li><code>```block code```</code></li>
                <li><code>- list item</code></li>
            </ul>
        </GuideContainer>
    )
}

export default MarkdownGuide;