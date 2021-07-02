import React from 'react'
import { Row, Col } from 'antd'
import { InstagramOutlined, LinkedinOutlined, GithubOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';


function FooterRow() {
    return (
        <div>
            <Row className='footer-container'>
                <Col span={24}>

                    <div className='social-media'>
                        <a target="_blank" rel="noreferrer" href='https://www.instagram.com/antd04/'><InstagramOutlined className='social-icon' /></a>
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/esrafil-elahi/'><LinkedinOutlined className='social-icon' /></a>
                        <a target="_blank" rel="noreferrer" href='https://github.com/EsrafilElahi'><GithubOutlined className='social-icon' /></a>
                        <a target="_blank" rel="noreferrer" href='Esrafil.ELahi@gmail.com'><MailOutlined className='social-icon' /></a>
                        <a target="_blank" rel="noreferrer" href='https://twitter.com/ElahiEsrafil'><TwitterOutlined className='social-icon' /></a>
                    </div>
                    <p className='copy-right'> &copy; copy right 2021 </p>

                </Col>
            </Row>
        </div>
    )
}

export default FooterRow




