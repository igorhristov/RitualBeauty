import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './services-card.styles.css';

const ServicesCard = ({ id, imgUrl, title, body }) => (
    <Card className='' style={{ borderColor: 'transparent' }}>
        <Card.Img
            variant='bottom'
            src={require(`../../assets/images/${imgUrl}`)}
            width='400'
            height='170'
            className='mb-0 pb-0'
        />
        <Card.Header
            className='d-flex align-items-center justify-content-center text-center font-weight-bold p-0 m-0'
            style={{ minHeight: '87px', background: 'none', borderColor: 'transparent', color: '#EC4090' }}
        >
            {title}
        </Card.Header>
        <Card.Body className='my-0 py-0'>
            <Card.Text className='mt-0 py-0'>{body[0].slice(0, 135) + '...'}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'none', borderColor: 'transparent' }}>
            <Link className='ServicesButton ' to={`/services/${id}`}>
                <Button variant='outline-danger' className='ServicesButton'>
                    {`Повеќе >>>`}
                </Button>
            </Link>
        </Card.Footer>
    </Card>
);

export default ServicesCard;
