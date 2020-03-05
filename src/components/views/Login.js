import React from 'react'
import Window from 'components/stateless/Window'
import ButtonBig from 'components/stateless/ButtonBig'
import Input from 'components/stateless/Input'
import {
    Form,
    FormField,
    FormButtons,
    FormMessage,
    FormLink
} from 'components/stateless/Form'

export default function Login() {
    return (
        <Window title="Login" width="500px" minHeight="300px">
            <Form>
                {false && (
                    <FormField>
                        <FormMessage>Invalid email or password</FormMessage>
                    </FormField>
                )}
                <FormField>
                    <Input placeholder="Email" />
                </FormField>
                <FormField>
                    <Input placeholder="Password" type="password" />
                </FormField>
                {/* <FormField>
                    <Input placeholder="Username" />
                </FormField> */}
                <FormButtons>
                    <ButtonBig>Login</ButtonBig>
                    <ButtonBig disabled={true}>Register</ButtonBig>
                </FormButtons>
                <FormField>
                    <FormLink>Forgotten your password?</FormLink>
                </FormField>
            </Form>
        </Window>
    )
}
