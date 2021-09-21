import React, { Component } from 'react'
import {Row,Col} from "reactstrap"
import CategoryList from "../Categories/CategoryList"
import ProductList from "../Products/ProductList"

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                <Col xs="3">
                    <CategoryList/>
                </Col>
                <Col xs="9">
                    <ProductList/>
                </Col>
                </Row>
            </div>
        )
    }
}
