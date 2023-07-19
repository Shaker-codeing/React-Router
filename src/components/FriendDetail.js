import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {

    const friend = useLoaderData();
    const { name, id } = friend;
    // console.log(friend)
    return (
        <div>
            <p>Everything you need to know this person: {name}</p>
            id: {id}
        </div>
    );
};

export default FriendDetail;