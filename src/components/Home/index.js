import React from 'react';
import MainView from "../MainView";

import { withAuthorization } from '../Session';

const HomePage = () => (
    <div>
        <MainView />
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);