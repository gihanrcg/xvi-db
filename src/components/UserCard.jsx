import React from 'react'

export const UserCard = ({name, al, contact, job}) => {
  return (
    <div className='grid-item'>
        <div className='card text-center'>
            <h5 className='card-header'>
                {name}
            </h5>
            <div class="card-body">
                <h5 className="card-title">A/L : {al}</h5>
                <p className="card-text">Contact : {contact}</p>
                <p className="card-text">Occupation : {job}</p>
            </div>
        </div>
    </div>
  )
}
