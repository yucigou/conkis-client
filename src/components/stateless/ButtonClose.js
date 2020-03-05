import React from 'react'
import styled from '@emotion/styled'

export default function Button({
    children,
    height = '50px',
    color = '#e8bc08'
}) {
    return (
        <Container height={height} color={color}>
            <ContainerText>{children}</ContainerText>
            <InnerShadow />
            <InnerLight />
            {/* <InnerLight2 /> */}
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    background: #de312c;
    border: 1.5px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${p => p.height};
    box-shadow: 3px 5px black;
    margin-bottom: 5px;

    &:active {
        margin-bottom: 0;
        margin-top: 5px;
    }
`

const InnerShadow = styled.div`
    bottom: 0;
    position: absolute;
    background-color: #b7184b;
    width: 100%;
    height: 10%;
`

const InnerLight = styled.div`
    top: 0;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    height: 10%;
    width: 100%;
`

// const InnerLight2 = styled.div`
//     top: 0;
//     right: 2;
//     position: absolute;
//     background-color: rgba(255, 255, 255, 0.1);
//     height: 10%;
//     width: 5px;
// `

const ContainerText = styled.div`
    display: flex;
`
