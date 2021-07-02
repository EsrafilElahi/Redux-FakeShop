import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button, Divider, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { addProductBasket } from '../redux/actions/basketActions'


function CardComponent({ title, src, price, id, completeProduct }) {

    let cuttedTitle = title.replace(/^(.{25}[^\s]*).*/, "$1")
    const dispatch = useDispatch()

    return (
        <div>

            <Card className='card' hoverable cover={<img alt={title} src={src} />}>


                <h3>{cuttedTitle}</h3>
                <p>&#36; {price}</p>

                <Divider />

                <div className='btn-holder'>
                    <Button className='btn' size='large'><NavLink to={`/product/${id}`}>MORE</NavLink></Button>
                    <Divider className='divider' type="vertical" />
                    <Button className='btn' onClick={() => dispatch(addProductBasket(completeProduct), message.success(`Desired Product With Id "${id}" Added`, .3))} size='large' icon={<PlusOutlined key='add' className='icon' />}>ADD</Button>
                </div>

            </Card >

        </div >
    )
}

export default CardComponent
