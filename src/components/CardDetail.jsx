import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Tag } from 'antd'
import { Eclipse } from 'react-loading-io'
import { CaretRightOutlined } from '@ant-design/icons';


import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/selectedProductActions'

function CardDetail() {

    const selected = useSelector((state) => state.selected)
    const { image, category, title, price, description } = selected;
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(selectedProduct(id))

        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [dispatch,id])

    return (
        <div className='container'>
            {
                Object.keys(selected).length === 0 ? (<div className='spin'><Eclipse size={120} /></div>) :
                    (
                        <Row className='card-detail-container'>
                            <Col xs={24} lg={12}>
                                <div className='card-detail-img'>
                                    <img alt={title} src={image} />
                                </div>
                            </Col>

                            <Col xs={24} lg={12}>
                                <div className='card-detail-content'>
                                    <h1>{title}</h1>
                                    <Tag className='price-tag' icon={<CaretRightOutlined />} color="rgba(247, 89, 171, 0.9)" >{price} &#36;</Tag>
                                    <Tag className='category-tag' icon={<CaretRightOutlined />} color='red' >{category}</Tag>
                                    <p>{description}</p>
                                </div>
                            </Col>
                        </Row>
                    )
            }
        </div>
    )
}

export default CardDetail


