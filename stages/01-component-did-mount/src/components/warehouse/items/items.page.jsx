import React, { Component, Fragment } from 'react';

export class WarehouseItemsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        // some async
        Promise.resolve([
            { id: 1, name: 'car' },
            { id: 2, name: 'pencil' },
            { id: 3, name: 'phone' },
        ]).then(items => this.setState({
            items,
        }))
    }

    render() {
        return (
            <Fragment>
                {this.state.items.map(({ id, item }) => (
                    <div key={id}>item: {item}</div>
                ))}
            </Fragment>
        );
    }
}
