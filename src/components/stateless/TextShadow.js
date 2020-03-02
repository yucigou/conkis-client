import React from 'react'
import styled from '@emotion/styled'

export default function TextShadow({
    title,
    fontSize = '22px',
    borderSize = '1px',
    shadowTop = '2.5px'
}) {
    return (
        <Text fontSize={fontSize} borderSize={borderSize} shadowTop={shadowTop}>
            <span className="transparent">{title}</span>
            <span className="shadow">{title}</span>
            <span className="gradient">{title}</span>
            <span className="border">{title}</span>
        </Text>
    )
}

const Text = styled.div`
    font-family: 'Nougata';
    font-size: ${p => p.fontSize};
    letter-spacing: 0px;
    position: relative;

    .transparent {
        visibility: hidden;
    }

    .border {
        position: absolute;
        left: 0;
        top: 0;
        color: transparent;
        -webkit-text-stroke-width: ${p => p.borderSize};
        -webkit-text-stroke-color: black;
    }

    .shadow {
        position: absolute;
        left: 0;
        top: ${p => p.shadowTop};
        color: black;
    }

    .gradient {
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(
            to bottom,
            #ffffff 0%,
            #ffffff 50%,
            #ebebeb 51%,
            #ebebeb 100%
        );

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
