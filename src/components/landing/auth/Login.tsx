import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import { Input, InputType} from './Input'

interface UserInput {
    email: string;
    password: string;
}

interface LoginState {
    userInput: UserInput;
}

enum FieldOption {
    displayName = "displayName",
    email = "email",
    password = 'password',
    passwordConfirm = 'passwordConfirm'
}

class Login extends React.Component <{},LoginState>{

    constructor(props: any) {
        super(props)

        this.state = {
            userInput: {
                email:'',
                password:'',
            }
        }

        this.inputHandler = this.inputHandler.bind(this)
    }

    inputHandler(data: any) {

        const key = Object.keys(data)[0]
        const value = data[key]

        this.setState((prevState : any) => {
            return prevState.userInput[key] = value
        })

    }

    render() {

        return (
            <div>
                <Link to="/">Close</Link>

                <Input
                    title={'Email'}
                    field={FieldOption.email}
                    inputType={InputType.text}
                    inputHandler={this.inputHandler}
                    value={this.state.userInput.email}
                />

                <Input
                    title={'Password'}
                    field={FieldOption.password}
                    inputType={InputType.password}
                    inputHandler={this.inputHandler}
                    value={this.state.userInput.password}
                />

                <button>Log In</button>
                <Link to={'/sign_up'}>Don't have an account?</Link>
            </div>
        )
    }
}

export default Login