import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Image } from 'react-bootstrap';
import './service.card.styles.css';

const ServiceCardElement = ({ imgUrl, title, body, link }) => (
    <Card style={{ borderColor: '#F6F6F6' }}>
        <div className='text-center' style={{ background: '#F6F6F6' }}>
            <Image roundedCircle src={imgUrl} width='90' height='90' bg='#F6F6F6' className='mb-0 pb-0' />
        </div>
        <Card.Header
            className='d-flex align-items-center justify-content-center text-center font-weight-bold  p-0 m-0 text-uppercase'
            style={{ minHeight: '87px', borderColor: 'transparent', color: '#EC4090' }}
        >
            <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body style={{ background: '#F6F6F6' }} className='my-0 py-0'>
            <Card.Text className='mt-0 py-0'>{body}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ borderColor: 'transparent' }}>
            <Link className='ServicesButton ' to={`/${link}`}>
                <Button variant='outline-danger' className='ServicesButton'>
                    {`Повеќе >>>`}
                </Button>
            </Link>
        </Card.Footer>
    </Card>
);

export default ServiceCardElement;
