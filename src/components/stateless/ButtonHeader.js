import React from 'react'
import styled from '@emotion/styled'

export default function ButtonHeader({ children }) {
    return (
        <Container>
            <Background />
            <Label>{children}</Label>
            {children}
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    font-weight: bold;
    /* font-family: Nougat; */
    /* font-size: 25px; */
    padding: 7px 25px;
    line-height: 24px;

    &:active > * {
        top: 5px;
        box-shadow: none;
    }
`

const Background = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    background-color: black;
    height: 100%;
    width: 100%;
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);
    transform: skewX(-8deg);
`

const Label = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
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
    top: -1px;
    position: relative;
    opacity: ${p => (p.disabled ? '0.7' : '1')};
`
