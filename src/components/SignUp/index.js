import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';



const SignUpPage = () => (
    <div>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};


class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(username, email, passwordOne)
            // .then(authUser => {
                // Create a user in your Firebase realtime database
            //     return this.props.firebase
            //         .user(authUser.user.uid)
            //         .set({
            //             username,
            //             email,
            //         });
            // })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
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
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (
            <div className="formContainer">
                {/*<Link to={ROUTES.SIGN_IN} style={{textDecoration: 'none', color: "white"}}>Zaloguj</Link>*/}

                <div className="container">
                    <Link to={ROUTES.SIGN_IN}><img src="https://www.wroclaw.pl/go/download/img-10cc299f0a18003d189e670bcd9cb8a4/nfm-jpg.jpg" alt="" />
                        <h1 className="heading">Inspektor</h1></Link>
                </div>
                <form className="signUp" onSubmit={this.onSubmit}>
                    <input
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Imię i Nazwisko"
                    />
                    <input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="E-mail"
                    />
                    <input
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Hasło"
                    />
                    <input
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Powtórz hasło"
                    />
                    <button className="btn" disabled={isInvalid} type="submit">
                        Zarejestruj się
                    </button>
                    {error && <p>{error.message}</p>}
                </form>
            </div>
        );
    }
}

const SignUpLink = () => (
    <p style={{color: "#d9d9d9"}}>
        Nie masz konta? <Link to={ROUTES.SIGN_UP} style={{ textDecoration: 'none', color: "rgb(125, 91, 58)"
    }}>Zarejestruj się</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };
