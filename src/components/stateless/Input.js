import React from 'react'
import styled from '@emotion/styled'

export default function Input({
    width = '100%',
    height = '45px',
    borderColor = 'black',
    ...props
}) {
    return (
        <Container width={width} height={height} borderColor={borderColor}>
            <InputStyled {...props} />
        </Container>
    )
}

const Container = styled.div`
    width: ${p => p.width};
    height: ${p => p.height};
    position: relative;
    background: white;
    border: 2px solid ${p => p.borderColor};
    border-radius: 5px;
    box-shadow: 3px 5px inset rgba(0, 0, 0, 0.1);
    transform: skewX(-3deg);
`

const InputStyled = styled.input`
    width: 100%;
    height: 100%;
    border: 0;
    outline: none;
    /* background: red; */
    padding: 0 15px;
    box-sizing: border-box;
    font-family: Poppins;
    background: transparent;
    color: black;
    font-size: 18px;
`
