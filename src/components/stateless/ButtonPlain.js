import React from 'react'
import styled from '@emotion/styled'

export default function ButtonHeader({ children }) {
    return (
        <Container>
            <Background />
            <Label>{children}</Label>
        </Container>
    )
}

const Container = styled.div`
    position: relative;

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
    position: relative;
    height: 100%;
    width: 100%;
    color: white;
    font-weight: bold;
    /* font-family: Nougat; */
    /* font-size: 25px; */
    padding: 7px 25px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`
