import React, { useMemo } from 'react'
import { Row, Col, Alert, Button, Image } from 'antd'
import FooterRow from '../components/FooterRow'
import { DeleteOutlined } from '@ant-design/icons'
import { useTable, usePagination } from 'react-table'

import { useDispatch, useSelector } from 'react-redux'
import { deleteProductBasket } from '../redux/actions/basketActions'


function Basket() {

    const basket = useSelector((state) => state.basket)
    const dispatch = useDispatch()

    const columns = useMemo(
        () => [
            {
                Header: 'Product Title',
                accessor: 'title',
                Cell: (row) => (
                    <>
                        {row.cell.value.replace(/^(.{25}[^\s]*).*/, "$1")}
                    </>
                )
            },
            {
                Header: 'Category',
                accessor: 'category',
            },
            {
                Header: 'Image',
                accessor: 'image',

                Cell: (row) => (
                    <span style={{ fontWeight: "bold", color: "rgba(10, 25, 49, .8)" }}>{""}Show
                       <Image src={row.cell.value} width={5} height={0} />
                    </span>
                )
            },
            {
                Header: 'Price',
                accessor: 'price',
                Cell: (row) => <span>{row.cell.value} &#36;</span>
            },
            {
                Header: "Delete",
                accessor: "id",

                Cell: (id) => (
                    <DeleteOutlined style={{ color: "rgba(10, 25, 49, .7)", fontSize: "1.3rem" }} onClick={() => {
                        dispatch(deleteProductBasket(id.cell.value))
                    }} />
                )
            },
        ],
        [dispatch]
    )


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        nextPage,
        previousPage,
        state: { pageIndex }
    } = useTable(
        {
            columns,
            data: basket,
            initialState: { pageSize: 4 }
        },
        usePagination
    );

    return (
        <>
            <Row className='alert'>
                <Col span={24}>
                    <Alert type='success' description={`${basket.length}`} message='YOUR PRODUCTS' />
                </Col>
            </Row>

            <div className='table-container'>
                <Row>

                    <Col className='table-col' span={24}>
                        <table {...getTableProps()} >
                            <thead >
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps()} >
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()} >
                                {page.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => {
                                                return (
                                                    <td {...cell.getCellProps()}>
                                                        {cell.render('Cell')}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </Col>

                    <Col span={24} className={basket.length > 4 ? "pagination-show" : "pagination-hidden"}>
                        <div>

                            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
                                {"<"}
                            </Button>

                            <span style={{ padding: "0 7px" }}>
                                Page{" "}
                                <strong>
                                    {pageIndex + 1} of {pageCount}
                                </strong>{" "}
                            </span>

                            <Button onClick={() => nextPage()} disabled={!canNextPage}>
                                {">"}
                            </Button>{" "}

                        </div>
                    </Col>

                </Row>

            </div>

            <hr />
            <FooterRow />

        </>
    )
}

export default Basket
