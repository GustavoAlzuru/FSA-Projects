import React, { useState, useEffect } from 'react';
import './SelectedContact.css'
import { contactData } from '../data/data';

const SelectedContact = ({selectedId, setSelectedId}) => {
    const [contact, setContact] = useState({})
    useEffect(() => {
        const getContact = async () => {
            const contactInfo = await contactData(selectedId)
            setContact(contactInfo)
        }
        getContact()
    }, [])
    const handleClick = () => {
        setSelectedId(null)
    }
    return (
        <div className='container'>
            <h1>Details</h1>
            <h2 className='name'>{contact.name}</h2>
            <div className='card'>
                <p><b>Username:</b> <br/>{contact.username}</p>
                <p><b>Email:</b> <br/>{contact.email}</p>
                <p><b>Address:</b> 
                <br/><span>Street: </span>{contact.address?.street}
                <br/><span>City: </span>{contact.address?.city}
                <br/><span>Zipcode: </span>{contact.address?.zipcode}
                </p>
                <p><b>Phone:</b> <br/>{contact.phone}</p>
                <p><b>Website:</b> <br/>{contact.website}</p>
                <p><b>Company:</b> <br/>{contact.company?.name}</p>
            </div>
            <button onClick={handleClick}>Back</button>
        </div>
    );
}

export default SelectedContact;
