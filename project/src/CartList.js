import React, { Component } from 'react'
import { Table , Button} from 'reactstrap'

export default class CartList extends Component {
    renderCart() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>CategoryId</th>
                        <th>ProductName</th>
                        <th>Unit Price</th>
                        <th>Units in Stock</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map((cartItem => (
                            <tr key={cartItem.product.id}>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.unitsInStock}</td>
                                <td>{cartItem.product.quantity}</td>
                                <td>
                                    <Button color='danger' onClick={() => this.props.removeFromCart(cartItem.product)}>
                                        X
                                    </Button>
                                </td>
                            </tr>
                        ))
                        )}
                </tbody>
            </Table>
        )
    }
    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}
