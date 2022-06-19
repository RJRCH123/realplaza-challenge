import React from 'react'
import { Icon } from '@iconify/react';

import Table from '../components/molecules/table/Table'

import EmployeeList from '../assets/JsonData/employees-list.json'

const employeeTableHead = [
    'id',
    'empleado',
    'usuario',
    'claveclave',
    'rol',
    'modalidad',
    'estado'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.empleado}</td>
        <td>{item.usuario}</td>
        <td>{item.clave}</td>
        <td>{item.rol}</td>
        <td>{item.modalidad}</td>
        <td>{item.estado}</td>
        <td className='btns__option'>
            <button className='btn__edit'><i><Icon icon='ci:edit'/></i></button>
            <button className='btn__delete'><i><Icon icon='ant-design:user-delete-outlined'/></i></button>  
        </td>
    </tr>
)

const Employees = () => {
    return (
        <div>
            <h2 className="page-header">
                Lista de Empleados
            </h2>
            <div className="topnav__search">
                <input type="text" placeholder='Buscar empleado...' />
                <i className='icon-flex'><Icon icon='bx:search'/></i>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={employeeTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={EmployeeList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employees
