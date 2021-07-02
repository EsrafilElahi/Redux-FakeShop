import React from 'react'
import { Row, Col, Breadcrumb, Alert } from 'antd'
// import { useDispatch, useSelector } from 'react-redux'
// import { setSearch, clearSearch } from '../redux/actions/searchActions'
// import { searching, clearFounded } from '../redux/actions/foundedActions'

// const { Search } = Input;

function HeaderRow({ shop, category }) {

    return (
        <div>
            <Row className='alert'>
                <Col span={24}>
                    <Alert message={category} type='info' />
                </Col>
            </Row>
            <Row className='container'>
                {/* <Col xs={24} sm={12}>
                    <div className='search'>
                        <Search value={search} onChange={(e) => (
                            dispatch(setSearch(e)),
                            dispatch(clearFounded())
                        )} onSearch={() => (
                            dispatch(searching(search)),
                            dispatch(clearSearch())
                        )} placeholder='search' />
                    </div>
                </Col> */}
                <Col xs={24}>
                    <div className='breadcrumb'>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item>{shop}</Breadcrumb.Item>
                            <Breadcrumb.Item>{category}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </Col>
            </Row>
        </div>
    )

}

export default HeaderRow
