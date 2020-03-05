// import React from 'react'
import styled from '@emotion/styled'

export const Form = styled.div`
    padding: 0 30px 0 30px;
`

export const FormField = styled.div`
    margin-bottom: 5px;
`

export const FormButtons = styled.div`
    display: flex;
    flex-direction: row;
    & > * {
        flex: 1;
        margin-left: 5px;
    }
    & > *:first-child {
        margin-left: 0;
    }
`

export const FormMessage = styled.div`
    color: #fd5853;
    font-size: 13px;
    text-align: center;
    padding: 2px;
`

export const FormLink = styled.div`
    color: white;
    font-size: 14px;
    text-align: center;
    padding: 15px;
    text-decoration: underline;
    opacity: 0.6;
    font-weight: 100;
    &:active {
        opacity: 1;
    }
`
