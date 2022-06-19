import React from 'react'

export const UserCard = ({name, al, contact, job, email, company, contact2, country, fb, linkedin}) => {
  return (
    <div className='grid-item'>
        <div className='card text-center'>
            <h5 className='card-header'>
                {name}
            </h5>
            <div class="card-body">
                <h5 className="card-title">A/L : {al}</h5>
                <p className="card-text">Contact : <a href={`tel:${contact}`} class="link-secondary">{contact}</a> {contact2.trim().length > 0 && <span> | <a href={`tel:${contact2}`} class="link-secondary"> {contact2}</a></span>}</p>
                
                <p className="card-text">Email : <a href={`mailto:${email}`} class="link-secondary">{email}</a></p>
                <p className="card-text">Occupation : {job}</p>
                {company && company.trim().length > 0 && <p className="card-text">Company : {company}</p>}
                {country && country.trim().length > 0 && <p className="card-text">{country}</p>}
                {fb && fb.trim().length > 0 && <a target='_blank' rel="noreferrer" href={fb}><i class="icon bi bi-facebook"/></a>} 
                {linkedin && linkedin.trim().length > 0 && <a href={linkedin} target='_blank' rel="noreferrer"><i class="icon bi bi-linkedin"/></a>}
            </div>
        </div>
    </div>
  )
}
