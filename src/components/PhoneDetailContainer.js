import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import './stylesheets/App.css';

class PhoneDetailContainer extends Component {
    render() {
        const { phoneList, match } = this.props;
        const linkID = parseInt(match.params.id);
        const phoneListed = phoneList.filter(item => item.id === linkID);
        const phone = phoneListed[0];
        console.log('hola')
        return (
            <Fragment>
                <div>
                    <h1>{phone.name}</h1>
                    <h2>{phone.title}</h2>
                    <img
                        src={phone.image}
                        alt={phone.name}
                        title={phone.name}
                    />
                    <ul>
                        Colors:
                    {phone.color.map((color, index) => {
                            return (
                                <li key={index}>
                                    {color}
                                </li>
                            );
                        })}
                    </ul>
                    <p>{phone.price}</p>
                </div>
                <Link to="/">Home</Link>
            </Fragment>
        );
    }
}

export default PhoneDetailContainer;