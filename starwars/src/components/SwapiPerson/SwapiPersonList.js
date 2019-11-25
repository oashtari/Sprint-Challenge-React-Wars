import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarWarsCard from './SwapiPersonCard';
import { Container, Row } from 'reactstrap';

export default function StarWarsPerson() {
    const [person, setPerson] = useState([]);
    const [people, setPeople] = useState([]);


    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people`)
            .then(response => {
                console.log(response);
                setPerson(response.data.results);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <Container>
            <Row>
                {person.map(character => {
                    return <StarWarsCard character={character} key={character.url} />
                })}
            </Row>
        </Container>
    )
}