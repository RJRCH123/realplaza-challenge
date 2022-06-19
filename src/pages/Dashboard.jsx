import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/molecules/status-card/StatusCard'

import Table from '../components/molecules/table/Table'

import Badge from '../components/atoms/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'Online',
        data: [40,90,20,10,15,50,30,91,60]
    }, {
        name: 'Presencial',
        data: [90, 60, 70, 80, 10, 16, 40, 20, 61, 80]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topemployees = {
    head: [
        'Top',
        'Nombres',
        'Cargo'
    ],
    body: [
        {
            "top": "1",
            "names": "Julio Cordova",
            "role": "Administrador"
        },
        {
            "top": "2",
            "names": "Rosa Quispe",
            "role": "Vendedora"
        },
        {
            "top": "3",
            "names": "Luisa Sanchez",
            "role": "Publicista"
        },
        {
            "top": "4",
            "names": "Juan Perez",
            "role": "Contador"
        },
        {
            "top": "5",
            "names": "Kath Diaz",
            "role": "Cajera"
        }
    ]
}

const renderEmployerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderEmployerBody = (item, index) => (
    <tr key={index}>
        <td>{item.top}</td>
        <td>{item.names}</td>
        <td>{item.role}</td>
    </tr>
)

const latestnamess = {
    header: [
        "names id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "casacas",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "poleras",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "carteras",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "jeans",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "relojes",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const namesStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const rendernamesHead = (item, index) => (
    <th key={index}>{item}</th>
)

const rendernamesBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={namesStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Estadísticas</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Top 10: Trabajadores</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topemployees.head}
                                renderHead={(item, index) => renderEmployerHead(item, index)}
                                bodyData={topemployees.body}
                                renderBody={(item, index) => renderEmployerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/employees'>Ver todos</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>Top 10: Productos más vendidos</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestnamess.header}
                                renderHead={(item, index) => rendernamesHead(item, index)}
                                bodyData={latestnamess.body}
                                renderBody={(item, index) => rendernamesBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/products'>Ver todos</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
