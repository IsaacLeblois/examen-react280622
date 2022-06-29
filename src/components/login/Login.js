import React, { useContext } from 'react'
import './login.css'
import UserContext from '../../context/UserContext'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const ctx = useContext(UserContext)

    const Formulario = () => {
        return (
            <div className="loginCont">
                <div className="advspace">

                </div>
                <div className="signUpForm">
                    <form>
                        <h4>Log in</h4>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email' onPaste={(e) => e.preventDefault()} onCopy={(e) => e.preventDefault()} />
                            <label for="exampleInputEmail1">Email</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onPaste={(e) => e.preventDefault()} onCopy={(e) => e.preventDefault()} />
                            <label for="exampleInputPassword1">Password</label>
                        </div>
                        <div className="signbtns">
                            <button className="btn btn-secondary m-3 w-25" onClick={validationLogin}>Sign in</button>
                            <button className="btn btn-danger m-3 w-25" disabled>Sign up</button>
                        </div>
                    </form>
                </div>
                <div className="advspace">

                </div>
            </div>
        )
    }

    const validationLogin = () => {
        const emailInp = document.getElementById('exampleInputEmail1')
        const passInp = document.getElementById('exampleInputPassword1')
        if (emailInp.value === "admin@admin.com") {
            if (passInp.value === "12345678") {
                ctx.setLoggedIn(true)
            } else {
                alert('Wrong password')
            }
        } else {
            alert('Unknown user')
        }
    }

    const YaLogueado = () => {
        return (
            <div className='d-flex flex-column align-items-center landingCont'>
                <h1>You have logged in.</h1>
            </div>
        )
    }

    const DinamycRender = () => {
        if (ctx.loggedIn === true) {
            return <YaLogueado />
        } else {
            return <Formulario />
        }
    }

    return (
        <div>
            <DinamycRender />
        </div>
    )
}

export default Login