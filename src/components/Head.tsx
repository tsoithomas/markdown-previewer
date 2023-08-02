import styled from 'styled-components';

const Image = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 40px;
    justify-content: space-between;
    text-align: left;
    box-sizing: border-box;
    background-color: #fe46a5;
`;

const Title = styled.h1`
    font-weight: bold;
    flex-grow: 1;
    margin: 0;
    font-size: 36px;
    color: #fff;
`;

const Button = styled.button`
    text-align: center;
    color: #444;
    min-width: 100px;
    flex-grow: 0;
    flex-shrink: 0;
    border: 1px solid #ba0160;
    color: #fe46a5;
    background-color: #ffe2f1;

    transition: 0.25s all ease;
    &:hover {
        border: 1px solid #ba0160;
        background-color: #ba0160;
        color: #ffffff;
    }
`;




export interface HeaderProps {
    onToggleGuide: () => void
}

const Head = (props: HeaderProps) => {
    return (
        <HeaderContainer>
            <Image src="/favicon.png" />
            <Title>Markdown Previewer</Title>
            <Button onClick={props.onToggleGuide}>Markdown Guide</Button>
        </HeaderContainer>
    )
}

export default Head;