import React from 'react'
import styled from '@emotion/styled'
import Window from 'components/stateless/Window'
import ButtonBig from 'components/stateless/ButtonBig'
import Input from 'components/stateless/Input'

export default function Login() {
    return (
        <Window title="Login" width="500px" height="300px">
            <Form>
                <FormField>
                    <Input placeholder="Username" />
                </FormField>
                <FormField>
                    <Input placeholder="Password" type="password" />
                </FormField>
                <FormField>
                    <ButtonBig>LOGIN</ButtonBig>
                </FormField>
            </Form>
        </Window>
    )
}

const Form = styled.div`
    padding: 30px 30px 30px 30px;
`

const FormField = styled.div`
    margin-bottom: 5px;
`
