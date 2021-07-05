import React, { useEffect } from 'react'
import { Row, Col } from 'antd'
import { Eclipse } from 'react-loading-io'


import HeaderRow from '../components/HeaderRow'
import CardComponent from '../components/CardComponent'
import FooterRow from '../components/FooterRow'
import { useDispatch, useSelector } from 'react-redux'
import { addJewelery, removeProductsList } from '../redux/actions/productsActions'

function Jewelery() {

    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addJewelery())

        return () => {
            dispatch(removeProductsList())
        }

    }, [dispatch])

    return (
        <div>

            <HeaderRow shop='shop' category='Jewelery' />
            {products.length === 0 ? (<div className='spin'><Eclipse size={120} /></div>) : null}

            <Row gutter={[32, 42]} className='row-container'>
                {
                    products.map((product) => {
                        return (
                            <Col style={{marginTop:'30px'}} align="center" justify="center" xs={24} md={12} lg={8} key={product.id}>
                                <CardComponent completeProduct={product} title={product.title} price={product.price} src={product.image} id={product.id} />
                            </Col>
                        )
                    })
                }
            </Row>

            <hr className='hr' />
            <FooterRow />

        </div>
    )
}

export default Jewelery
