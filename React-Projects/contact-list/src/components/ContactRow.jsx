import React from 'react';
import './ContactRow.css'

const ContactRow = ({contact, showDetails }) => {
    const handleClick = (id) => {
        showDetails(id)
    }
    return (
        <tr onClick={() => handleClick(contact.id)} className='row'>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}

export default ContactRow;
