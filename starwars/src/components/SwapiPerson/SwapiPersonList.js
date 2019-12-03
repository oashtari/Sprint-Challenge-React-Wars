import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarWarsCard from './SwapiPersonCard';
import { Container, Row, Button } from 'reactstrap';

let count = 1;

export default function StarWarsPerson() {
    const [person, setPerson] = useState([]);
    const [endpoint, setEndpoint] = useState(`https://swapi.co/api/people/?page=${count}`);

    function NextPage(event) {
        event.preventDefault();
        count++;
        if (count < 10) {
            setEndpoint(`https://swapi.co/api/people/?page=${count}`);
        } else {
            count--;
            setEndpoint(`https://swapi.co/api/people/?page=${count}`);
        }
    }

    function PrevPage(event) {
        event.preventDefault();
        count--;
        if (count > 0) {
            setEndpoint(`https://swapi.co/api/people/?page=${count}`);
        } else {
            count++;
            setEndpoint(`https://swapi.co/api/people/?page=${count}`);
        }
    }

    useEffect(() => {
        axios
            .get(endpoint)
            .then(response => {
                console.log(response);
                setPerson(response.data.results);
            })
            .catch(error => console.log(error))
    }, [count]);

    return (
        <Container>
            <Button onClick={PrevPage} style={{ margin: '5px', backgroundColor: '#444545' }}>PREVIOUS PAGE</Button>
            <Button onClick={NextPage} style={{ margin: '5px', backgroundColor: '#444545' }}>NEXT PAGE</Button>
            <Row>
                {person.map(character => {
                    return <StarWarsCard character={character} key={character.url} />
                })}
            </Row>
        </Container>
    )
}