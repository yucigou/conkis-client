import React from 'react'
import styled from '@emotion/styled'

export default function ButtonBig({
    children,
    height = '60px',
    color1 = '#e8bc08',
    color2 = '#efad00',
    transform = 'skewX(-3deg)',
    fontSize,
    disabled = false,
}) {
    return (
        <Container
            height={height}
            color1={color1}
            color2={color2}
            disabled={disabled}
            transform={transform}
        >
            {typeof children === 'string' ? (
                <ContainerText disabled={disabled}>
                    <Text fontSize={fontSize}>{children}</Text>
                </ContainerText>
            ) : (
                children
            )}
            <InnerShadow />
            <InnerLight />
            {/* <InnerLight2 /> */}
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    pointer-events: ${(p) => (p.disabled ? 'none' : 'auto')};
    background: ${(p) =>
        p.disabled
            ? '#84796f'
            : 'linear-gradient(180deg,' +
              p.color1 +
              ' 0%, ' +
              p.color2 +
              ' 100%)'};
    border: 3px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(p) => p.height};
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);
    transform: ${(p) => p.transform};
    margin-bottom: 5px;

    &:active {
        box-shadow: none;
        margin-bottom: 0;
        margin-top: 5px;
    }
`

const InnerShadow = styled.div`
    bottom: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 15%;
`

const InnerLight = styled.div`
    top: 0;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
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
    top: -1px;
    position: relative;
    opacity: ${(p) => (p.disabled ? '0.7' : '1')};
`
const Text = styled.span`
    /* Nougat, Chelsea, Neucha */
    /* font-family: Nougat; */
    font-size: 20px;
    /* letter-spacing: 1px; */
    color: white;
    text-shadow: 0.07em 0.07em 0 rgba(15, 18, 23, 0.9),
        -0.07em 0.07em 0 rgba(15, 18, 23, 0.9),
        0.07em -0.07em 0 rgba(15, 18, 23, 0.9),
        -0.07em -0.07em 0 rgba(15, 18, 23, 0.9),
        0 0.0798em 0 rgba(15, 18, 23, 0.9), 0 -0.0798em 0 rgba(15, 18, 23, 0.9),
        0.0798em 0 0 rgba(15, 18, 23, 0.9), -0.0798em 0 0 rgba(15, 18, 23, 0.9),
        0 0.0998em 0 rgba(15, 18, 23, 0.9),
        0.0798em 0.0998em 0 rgba(15, 18, 23, 0.9),
        -0.0798em 0.0998em 0 rgba(15, 18, 23, 0.9),
        0 0.1398em 0 rgba(15, 18, 23, 0.9),
        0.0798em 0.1398em 0 rgba(15, 18, 23, 0.9),
        -0.0798em 0.1398em 0 rgba(15, 18, 23, 0.9),
        -0.2em 0.13em 0 rgba(17, 17, 17, 0.25);
`
