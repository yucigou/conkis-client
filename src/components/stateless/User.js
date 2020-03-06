import React from 'react'
import styled from '@emotion/styled'

export default function User({ children }) {
    return (
        <Container>
            <Background />
            <Content>{children}</Content>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-width: 200px;
    height: 60px;
`

const Background = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    background-color: black;
    height: 100%;
    width: 100%;
    box-shadow: -5px 5px rgba(0, 0, 0, 0.1);
    transform: skewX(20deg);
    border-radius: 2px;
`

const Content = styled.div`
    position: relative;
    color: white;
`
