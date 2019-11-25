import React from 'react';
import { Card, CardHeader, CardBody, CardText, Col, Button } from 'reactstrap';

const StarWarsCard = ({ character }) => {
    return (
        <Col xs='6' md='4'>
            <Card>
                <CardHeader>Name: {character.name}</CardHeader>
                <CardBody>
                    <CardText>Year of Birth: {character.birth_year}</CardText>
                    <CardText>Color of Hair: {character.hair_color}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default StarWarsCard;
