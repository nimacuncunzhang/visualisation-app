import React from 'react'
import products from '../TeaMember'
import { Row,Col } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
        <Row>{products.map((products)=>(
                <Col sm={12} md={6} lg={4} xl={4}>
                <h3>{products.name}</h3>
                </Col>
            ))}
        </Row>
    </>
    )
}

export default HomeScreen