import React, { useState, useEffect } from 'react';
import { AllContacts } from '../data/data'
import ContactRow from './ContactRow';

const ContactList = ({ showDetails }) => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await AllContacts()
            setContacts(data)
        }
        getData()
    }, []);
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Contact List</h1>
            <table>
                <thead>
                    <tr>
                        <th colSpan="3" style={{textAlign: 'center'}}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{fontSize: '20px'}}>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                    {
                        contacts.map(contact => (
                            <ContactRow contact={contact} key={contact.id} showDetails={showDetails}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ContactList;
