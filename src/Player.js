

import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Team:</strong> {team}<br />
                    <strong>Nationality:</strong> {nationality}<br />
                    <strong>Jersey Number:</strong> {jerseyNumber}<br />
                    <strong>Age:</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/images/fifa-generic-featured-tile-16x9.png.adapt.crop191x100.1200w.png"
};

export default Player;
