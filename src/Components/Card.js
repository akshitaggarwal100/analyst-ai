import React, { useState } from 'react'
import './Card.css'

export default function Card({ data }) {
    const [open, setOpen] = useState(false)
    
    return (
        <div className='userCard'>
            <h1>{data.username}</h1>
            <div>
                <h2>Name</h2>
                <p>{data.name}</p>
            </div>

            <div>
                <h2>Contact</h2>
                <p>{data.phone}</p>
            </div>

            <div>
                <h2>Email</h2>
                <p>{data.email}</p>
            </div>

            <button onClick={() => setOpen(!open)} className='detailsButton'>View Details</button>

            <div className={open ? 'extraInfoBox' : 'disable'}>
                <div className='extraInfo'>
                    <h2>Company</h2>
                    <p>{data.company.name}</p>
                    <p>{data.company.catchPhrase}</p>
                    <p>{data.company.bs}</p>
                </div>

                <div className='extraInfoLower'>
                    <div className='one'>
                        <h2>Address</h2>
                        <p>{data.address.street}</p>
                        <h2>Suite</h2>
                        <p>{data.address.suite}</p>
                        <h2>City</h2>
                        <p>{data.address.city}</p>
                        <h2>Zipcode</h2>
                        <p>{data.address.zipcode}</p>
                    </div>
                    
                    <div className='two'>
                        <h2>Website</h2>
                        <p>{data.website}</p>
                        <h2>Latitude</h2>
                        <p>{data.address.geo.lat}</p>
                        <h2>Longitude</h2>
                        <p>{data.address.geo.lng}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
