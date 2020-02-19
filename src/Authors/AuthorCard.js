import React from "react";
import {Card, Button} from "react-bootstrap";

export function AuthorCard(props){
    return(
        <Card style={{ width: "16em" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/50" />
            <Card.Body>
                <Card.Text>First Name: {props.author.fName}</Card.Text>
                <Card.Text>Last Name: {props.author.lName}</Card.Text>
                </Card.Body>
        </Card>
    );
}