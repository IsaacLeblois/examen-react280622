import React, { useContext } from 'react'
import './login.css'
import UserContext from '../../context/UserContext'

const Login = () => {
    const ctx = useContext(UserContext)

    const Formulario = () => {
        return (
            <div class="loginCont">
                <div class="advspace">

                </div>
                <div class="signUpForm">
                    <form>
                        <h4>Log in</h4>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email' onPaste={(e) => e.preventDefault()} onCopy={(e) => e.preventDefault()} />
                            <label for="exampleInputEmail1">Email</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onPaste={(e) => e.preventDefault()} onCopy={(e) => e.preventDefault()} />
                            <label for="exampleInputPassword1">Password</label>
                        </div>
                        <div class="signbtns">
                            <a class="btn btn-secondary m-3 w-25" onClick={validationLogin}>Sing in</a>
                            <a class="btn btn-danger m-3 w-25">Sign up</a>
                        </div>
                    </form>
                </div>
                <div class="advspace">

                </div>
            </div>
        )
    }

    const validationLogin = () => {
        const emailInp = document.getElementById('exampleInputEmail1')
        const passInp = document.getElementById('exampleInputPassword1')
        if (emailInp.value) {
            if (passInp.value) {
                ctx.setLoggedIn(true)
            } else {
                alert('Debes ingresar tu contraseña.')
            }
        } else {
            alert('Debes ingresar tu email.')
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