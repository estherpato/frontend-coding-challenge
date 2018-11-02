import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/PhoneDetailContainer.css';

class PhoneDetailContainer extends Component {
    render() {
        const { phoneList, match } = this.props;
        const linkID = parseInt(match.params.id);
        const phoneListed = phoneList.filter(item => item.id === linkID);
        const phone = phoneListed[0];

        return (
            <Fragment>
                <div className="detail-container">
                    <h1>{phone.name}</h1>
                    <h2>{phone.title}</h2>
                    <img
                        src={phone.image}
                        alt={phone.name}
                        title={phone.name}
                        className="detail-image"
                    />
                    <ul className="detail-color-list">
                        {phone.color.map((color, index) => {
                            return (
                                <li key={index}>
                                    {color}
                                </li>
                            );
                        })}
                    </ul>
                    <p>Price: {phone.price}</p>
                </div>
                <Link to="/">
                    <div className="home-btn">&#8592; Home</div>
                </Link>
            </Fragment>
        );
    }
}

export default PhoneDetailContainer;