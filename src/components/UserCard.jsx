import React from 'react'

export const UserCard = ({name, al, contact, job, email}) => {
  return (
    <div className='grid-item'>
        <div className='card text-center'>
            <h5 className='card-header'>
                {name}
            </h5>
            <div class="card-body">
                <h5 className="card-title">A/L : {al}</h5>
                <p className="card-text">Contact : <a href={`tel:${contact}`} class="link-secondary">{contact}</a></p>
                <p className="card-text">Email : <a href={`mailto:${email}`} class="link-secondary">{email}</a></p>
                <p className="card-text">Occupation : {job}</p>
            </div>
        </div>
    </div>
  )
}
