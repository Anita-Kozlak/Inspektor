import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
    <div>
        <h1>Account Page</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);