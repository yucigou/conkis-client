import React from 'react'
import styled from '@emotion/styled'
import Window from 'components/stateless/Window'
import ButtonBig from 'components/stateless/ButtonBig'
import Input from 'components/stateless/Input'

export default function Login() {
    return (
        <Window title="Login" width="500px" minHeight="300px">
            <Form>
                <FormField>
                    <Input placeholder="Email" />
                </FormField>
                <FormField>
                    <Input placeholder="Password" type="password" />
                </FormField>
                {/* <FormField>
                    <Input placeholder="Username" />
                </FormField> */}
                <FormField>
                    <FormButtons>
                        <ButtonBig>Login</ButtonBig>
                        <ButtonBig disabled={true}>Register</ButtonBig>
                    </FormButtons>
                </FormField>
            </Form>
        </Window>
    )
}

const Form = styled.div`
    padding: 0 30px 30px 30px;
`

const FormField = styled.div`
    margin-bottom: 5px;
`

const FormButtons = styled.div`
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
