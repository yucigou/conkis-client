import React from 'react'
import styled from '@emotion/styled'

export default function Overlay({ width = '100%', height = '100%', children }) {
    return (
        <OverlayStyled width={width} height={height}>
            {children}
        </OverlayStyled>
    )
}

const OverlayStyled = styled.div`
    width: ${p => p.width};
    height: ${p => p.height};
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`
