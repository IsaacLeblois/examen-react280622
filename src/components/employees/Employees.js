import React, { useEffect, useState } from 'react'
import './employees.css'

const Employees = () => {
    const apiurl = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/isaac'
    const [empleados, setEmpleados] = useState()
    const fetchApi = async () => {
        const response = await fetch(apiurl)
        const responseJSON = await response.json()
        setEmpleados(responseJSON.data.employees)
    }
    useEffect(() => {
        fetchApi()
    }, [])

    let min = [0, 10, 20, 30, 40, 50, 60, 70], max = [10, 20, 30, 40, 50, 60, 70, 80]

    const [pag, setPag] = useState(1)

    if (pag > 7) {
        setPag(1)
    } if (pag < 1) {
        setPag(7)
    }

    const [name, setName] = useState('')
    const [last_name, setLast_name] = useState('')
    const [birthday, setBirthday] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const envio = {name, last_name, birthday}
        await fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/isaac', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(envio)
        }).then(res => res.json()).finally(
            limpiarFormulario(),
            alert('Post successfully. Please reload this site.')
        )
    }

    const [busqueda, setBusqueda] = useState('')

    const handleChange = e => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        const res = empleados.filter((e) => {
            if(e.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return e
            }
        })
        setEmpleados(res)
    }

    const recargar = () => {
        window.location.reload()
    }

    const limpiarFormulario = () => {
        document.getElementById("miForm").reset();
    }

    const dateFormat = (date) => {
        const startFormat = new Date(parseInt(date))
        const year = startFormat.getFullYear()
        const month = startFormat.getMonth()
        const day = startFormat.getDay()
        return (
            <p>{day}/{month}/{year}</p>
        )
    }

    return (
        <div className='text-center'>
            <h1>Pagination & Search</h1>
            <div className='employeesCont'>
                <div className='d-flex justify-content-center'>
                    <input
                        className='inputBuscar form-control w-50 m-1'
                        value={busqueda}
                        placeholder="Search by name"
                        onChange={handleChange}
                    />
                    <button className='btn btn-primary m-1'>Search</button>
                    <button className='btn btn-warning m-1' onClick={recargar}>Reset</button>
                </div>
                <div>
                    <table className='table tableCont'>
                        <thead className='thead-dark'>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Lastname</th>
                                <th scope='col'>Birthday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !empleados ? 'LOADING...' :
                                    empleados.slice(min[pag - 1], max[pag - 1]).map((e) => {
                                        return (
                                            <tr>
                                                <td>{e.id}</td>
                                                <td>{e.name}</td>
                                                <td>{e.last_name}</td>
                                                <td>{dateFormat(e.birthday)}</td>
                                            </tr>
                                        )    
                                    })
                            }

                            <tr>
                                <td>
                                    Pagination
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => setPag(pag - 1)}>Prev page</button>
                                </td>
                                <td>
                                    <span>  Page: {pag} of 7 </span>
                                </td>
                                <td>
                                    <button className='btn btn-success' onClick={() => setPag(pag + 1)}>Next Page</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='apiForm' id='miForm'>
                    <h2>Form</h2>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nameInp" onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Lastname</label>
                        <input type="text" className="form-control" id="lastInp" onChange={(e) => setLast_name(e.target.value)} required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Birthday</label>
                        <input type="date" className="form-control" id="birthInp" onChange={(e) => setBirthday(e.target.value)} required/>
                    </div>
                    <button type='submit' className="btn btn-primary w-100">Subir</button>
                </form>
            </div>
        </div>
    )
}

export default Employees