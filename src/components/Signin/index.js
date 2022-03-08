import React from 'react'
import { Icon } from '../Sidebar/SidebarElements'
import { Contaniner, FormWrap , FormContent, FormH1, FormLabel, FormButton , Form ,FormInput } from './SigninElements'

const SignIn = () => {
  return (
    <>
    
    <Contaniner>
        <FormWrap>
            <Icon to="/">CChecker</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in your account</FormH1>
                    <FormLabel htmlFor='for'>E-mail</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                </Form>
            </FormContent>
        </FormWrap>
    </Contaniner>

    </>
  )
}

export default SignIn