import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../blogData';
import { Container,Row,Col } from 'react-bootstrap';
const ArticleDetails = () => {
    const {key}=useParams();
    const currectData=blogData.find(data=>data.key===key);
    const {hadeline,description}=currectData;
    return (
        <Container style={{display:'flex'}}>
            <Row>
                <Col xs={12} md={8} style={{marginBottom:'10px',padding:'20px',borderRadius:'5px'}}>
                    <div style={{textAlign:'center',marginBottom:'20px'}}>
                        <h3>{hadeline}</h3>
                    </div>
                    <p>{description}</p>
                    
                </Col>
                <Col xs={6} md={4}>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default ArticleDetails;