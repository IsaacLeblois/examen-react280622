import React, { useContext } from 'react'
import './login.css'
import UserContext from '../../context/UserContext'

const Login = () => {
    const ctx = useContext(UserContext)

    const Formulario = () => {
        return (
            <div>
                <h1>LOGIN</h1>
                <div className='loginCont'>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onPaste={(e)=>e.preventDefault()} onCopy={(e)=>e.preventDefault()}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onPaste={(e)=>e.preventDefault()} onCopy={(e)=>e.preventDefault()}/>
                        </div><br></br>
                        <button className="btn btn-primary w-100" onClick={validationLogin}>Log in</button>
                    </form>
                </div>
            </div>
        )
    }
    
    const validationLogin = () => {
        const emailInp = document.getElementById('exampleInputEmail1')
        const passInp = document.getElementById('exampleInputPassword1')
        if(emailInp.value) {
            if(passInp.value){
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
            <div>
                <h1>¡You have logged in!</h1>
            </div>
        )
    }

    const DinamycRender = () => {
        if(ctx.loggedIn === true) {
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