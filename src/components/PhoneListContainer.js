import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './stylesheets/App.css';

class PhoneListContainer extends Component {
    render() {
        const { phoneList } = this.props;
        return (
            <ul>
                {phoneList.map((phone, i) => {
                    return (
                        <li key={i}>
                            <Link to={`/phone/${phone.id}`}>
                                <p>{phone.name}</p>
                                <img
                                    src={phone.image}
                                    alt={phone.name}
                                    title={phone.name}
                                />
                                <p>{phone.price}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default PhoneListContainer;