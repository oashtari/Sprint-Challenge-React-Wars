import React from 'react';
import { Card, CardHeader, CardBody, CardText, Col } from 'reactstrap';

const StarWarsCard = ({ character }) => {
    return (
        <Col md='6'>
            <Card style={{ margin: '20px', border: "3px dotted #CEABB1" }}>
                <CardHeader style={{ margin: '5px', backgroundColor: '#C5E0D8' }}>Name: {character.name}</CardHeader>
                <CardBody style={{ backgroundColor: '#F6DF9E' }}>
                    <CardText>Year of Birth: {character.birth_year}</CardText>
                    <CardText>Color of Hair: {character.hair_color}</CardText>
                </CardBody>
            </Card>
        </Col >
    )
}

export default StarWarsCard;
