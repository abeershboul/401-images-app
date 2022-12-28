import React, {useState} from 'react';
import {Button,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Cards(props) {

    let [numOfLikes, setNumOfLikes] = useState(0);


    const incrementNumOfLikes = () => {
        setNumOfLikes(numOfLikes+1);
        props.Totall_ikes();
    }
    return (
        <Col>
            <Card style={{ width: '18rem',height:'20rem' }}>
                <Card.Img variant="top" src={props.image_url} style={{ height:'15rem'}}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Button variant="primary" onClick={incrementNumOfLikes}>likes: {numOfLikes}  </Button>
                    
                </Card.Body>
            </Card>


        </Col>
    )
}

export default Cards;