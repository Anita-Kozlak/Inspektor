import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import PasswordChangeForm from "../PasswordChange";

const PasswordForgetPage = () => (
    <div>
        {/*<h1>PasswordForget</h1>*/}
        <PasswordChangeForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, error } = this.state;

        const isInvalid = email === '';

        return (
            <div className="formContainer">
                <div className="container">
                    <img src="https://www.wroclaw.pl/go/download/img-10cc299f0a18003d189e670bcd9cb8a4/nfm-jpg.jpg" alt="" />
                    <h1 className="heading">Inspektor</h1>
                </div>
                <form className="passwordForget" onSubmit={this.onSubmit}>
                    <input
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="E-mail"
                    />
                    <button onSubmit={(e) => e.preventDefault()} disabled={isInvalid} type="submit">
                        Zresetuj hasło
                    </button>

                    {error && <p>{error.message}</p>}
                </form>
            </div>
        );
    }
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET} style={{ textDecoration: 'none', color: "rgb(125, 91, 58)"
        }}>Zapomniałeś hasła?</Link>
    </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };