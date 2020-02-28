import React from 'react'
import styled from '@emotion/styled'

function TextShadow({
    title,
    fontSize = '35px',
    borderSize = '1.5px',
    shadowTop = '4px'
}) {
    return (
        <Text fontSize={fontSize} borderSize={borderSize} shadowTop={shadowTop}>
            <span className="shadow">{title}</span>
            <span className="body">{title}</span>
        </Text>
    )
}

const Text = styled.div`
    font-family: 'Nougata';
    font-size: ${p => p.fontSize};
    letter-spacing: -1px;
    position: relative;

    .body {
        background: linear-gradient(
            to bottom,
            #ffffff 0%,
            #ffffff 50%,
            #ebebeb 51%,
            #ebebeb 100%
        );

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        -webkit-text-stroke-width: ${p => p.borderSize};
        -webkit-text-stroke-color: black;
    }

    .shadow {
        top: ${p => p.shadowTop};
        color: black;
        position: absolute;
        z-index: -1;
    }
`

export default TextShadow
