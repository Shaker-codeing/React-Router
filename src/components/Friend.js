import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    // console.log(friend)
    const { id, name, username, email } = friend;
    return (
        <div style={{ border: '1px solid red ', margin: '5px' }}>
            <p>{name}</p>
            <p><Link to={`/friend/${id}`}>{username}</Link></p>
            <p>{email}</p>
        </div>
    );
};

export default Friend;