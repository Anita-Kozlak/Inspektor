import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { passwordOne } = this.state;

        this.props.firebase
            .doPasswordUpdate(passwordOne)
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
        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';

        return (
            <div className="formContainer">
                <div className="container">
                    <Link to={ROUTES.SIGN_IN}><img src="https://www.wroclaw.pl/go/download/img-10cc299f0a18003d189e670bcd9cb8a4/nfm-jpg.jpg" alt="" />
                        <h1 className="heading">Inspektor</h1></Link>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Nowe Hasło"
                    />
                    <input
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Potwierdź Nowe Hasło"
                    />
                    <button className="btn" disabled={isInvalid} type="submit">
                        Zresetuj hasło
                    </button>

                    {error && <p>{error.message}</p>}
                </form>
            </div>
        );
    }
}

export default withFirebase(PasswordChangeForm);