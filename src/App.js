

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';

const App = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>FIFA Player Cards</h1>
            <PlayersList />
        </div>
    );
};

export default App;

