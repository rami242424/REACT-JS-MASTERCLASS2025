import styled from "styled-components";

const Container = styled.div``;

interface CircleProp{
    bgColor : string,
}

function Circle({bgColor} : CircleProp){
    return <Container color = {bgColor} />
}

export default Circle;