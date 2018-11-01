import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/PhoneListContainer.css';

class PhoneListContainer extends Component {
    render() {
        const { phoneList } = this.props;
        return (
            <ul className="phone-list">
                {phoneList.map(phone => {
                    return (
                        <li
                            key={phone.id}
                            className="phone-item"
                        >
                            <Link
                                to={`/phone/${phone.id}`}
                            >
                                <div className="phone-item__content">
                                    <p className="phone-item__name">{phone.name}</p>
                                    <img
                                        src={phone.image}
                                        alt={phone.name}
                                        title={phone.name}
                                        className="list__image"
                                    />
                                    <p>{phone.price}</p>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default PhoneListContainer;