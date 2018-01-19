import React from 'react'
import { NavLink } from 'react-router-dom'
import { Affix, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const { SubMenu } = Menu;

function Navbar() {
    return (
        <div>

            <Affix>
                <Menu className='navbar' mode='horizontal'>
                    <Menu.Item key='basket'>
                        <NavLink to='/basket'>BASKET</NavLink>
                    </Menu.Item>
                    <SubMenu key='submenu' title='CATEGORY' icon={<DownOutlined style={{ marginRight: '-10px', fontSize: "10px" }} />}>
                        <Menu.Item key='jewelery'>
                            <NavLink to='/jewelery'>JEWELERY</NavLink>
                        </Menu.Item>
                        <Menu.Item key='men clothing'>
                            <NavLink to='/men-clothing'>MEN CLOTHING</NavLink>
                        </Menu.Item>
                        <Menu.Item key='women clothing'>
                            <NavLink to='/women-clothing'>WOMEN CLOTHING</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key='home'>
                        <NavLink to='/'>HOME</NavLink>
                    </Menu.Item>
                </Menu>
            </Affix>

        </div >
    )
}

export default Navbar










