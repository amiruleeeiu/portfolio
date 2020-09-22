import React, { useState } from 'react';
import { Container,Row,Col, Button } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
  import './BlogArticle.css'
const BlogArticle = (props) => {
    console.log(props.data);
    const {key,hadeline,description}=props.data;
    console.log(description.length)
 
    const shortDescription=description.slice(0,250);
        
    return (
        <Container >
            <Row>
                <Col className="article">
                    <Link to={"/"+key}><h3>{hadeline}</h3></Link>
                    <h6>{shortDescription+" ..."}</h6>
                    <Link to={"/"+key}><Button className="article-btn" style={{float:'right'}} variant="contained">Read More</Button></Link>
                </Col>
                
            </Row>
        </Container>
    );
};

export default BlogArticle;