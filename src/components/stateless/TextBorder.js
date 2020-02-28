import React from 'react'
import styled from '@emotion/styled'

export default function TextBorder({
    title,
    fontSize = '35px',
    color = 'white'
}) {
    return (
        <Text fontSize={fontSize} color={color}>
            {title}
        </Text>
    )
}

const Text = styled.div`
    font-family: 'Nougat';
    font-size: ${p => p.fontSize};
    color: ${p => p.color};
    -webkit-background-clip: text;
    -webkit-text-stroke-width: 1.2px;
    -webkit-text-stroke-color: black;
    letter-spacing: -0.5px;
`
