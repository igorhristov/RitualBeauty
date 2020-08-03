import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Button from '../Button/Button.Component';

const ServicesCard = ({ id, imgUrl, title,  spic, linkUrl }) => (
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
            <Card.Text className='mt-0 py-0'>{spic}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'none', borderColor: 'transparent' }}>
            <Link className='ServicesButton ' to={`/${linkUrl}/${id}`}>
                <Button title='Повеќе' />
            </Link>
        </Card.Footer>
    </Card>
);

export default ServicesCard;
