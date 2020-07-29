import React from 'react';

import './sectionTitle.styles.css';

const SectionTitle = ({ title, body }) => (
    <div className='section-title'>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
);

export default SectionTitle;
