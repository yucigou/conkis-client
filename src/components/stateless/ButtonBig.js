import React from 'react'
import styled from '@emotion/styled'
import TextShadow from 'components/stateless/TextShadow'

export default function ButtonBig({
    title,
    fontSize = '25px',
    height = '50px',
    color = '#e8bc08'
}) {
    return (
        <Container fontSize={fontSize} height={height} color={color}>
            <ContainerText>
                <TextShadow fontSize={fontSize} title={title} />
            </ContainerText>
            <InnerShadow />
            {/* <InnerLight /> */}
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    background: rgb(231, 191, 6);
    background: linear-gradient(
        180deg,
        rgba(231, 191, 6, 1) 0%,
        rgba(239, 173, 0, 1) 100%
    );
    border: 4px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${p => p.height};
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);
    transform: skewX(-3deg);
`

const InnerShadow = styled.div`
    bottom: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 15%;
`

// const InnerLight = styled.div`
//     top: 0;
//     position: absolute;
//     background-color: rgba(255, 255, 255, 0.1);
//     height: 15%;
//     width: 100%;
// `

const ContainerText = styled.div`
    /* top: -1px; */
    /* position: relative; */
`
