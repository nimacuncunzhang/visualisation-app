import React from 'react'
import teamember from '../TeaMember'
import { Row,Col } from 'react-bootstrap'
import Teamember from '../components/Teamember'

const HomeScreen = () => {
  return (
    <>
        <Row>{teamember.map((memberdata)=>(
                <Col sm={12} md={6} lg={4} xl={4}>
                    <Teamember memberdata={memberdata}/> 
                </Col>
            ))}
        </Row>
    </>
    )
}

export default HomeScreen