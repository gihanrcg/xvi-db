import { useEffect, useState } from 'react';
import { UserCard } from './components/UserCard';
import parse from 'html-react-parser';
import { options } from './data/DataHandler';
import GSheetReader from 'g-sheets-api';


const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(allUsers);
  
  useEffect(() => {   
    GSheetReader(options, results => {
      setAllUsers(results);
      setFilteredUsers(results)
  }, err => {
     
  });
  }, [])

  
  
  const [searchBy, setSearchBy] = useState('Name');

  const onKeyDown = (e) => {
    const post = allUsers.filter((item) => {
      const value = parse(item[searchBy] ? item[searchBy] : 'Not Available').toLowerCase();
      return value.includes(e.target.value.toLowerCase())
    }); 
    console.log(post)   
    setFilteredUsers(post);
  }

  const onChangeSearchBy = (e) => {
    setSearchBy(e.target.value)
  }

  return (
  <div className="container text-center">
    
    <div className='search-container card border-success sticky-top'>
      <label for="searchBy" class="form-label">Search By</label>
      <select className="form-select" aria-label="Default select example" id="searchBy" onChange={onChangeSearchBy}>
        <option value="Name">Name</option>        
        <option value="AL Stream">AL Stream</option>
        <option value="Occupation">Occupation</option>
        <option value="Company (Institute if still studying)">Company or University</option>
        <option value="Located Country">Country</option>
      </select>
      
      <label for="exampleInputPassword1" class="form-label">Type Here</label>
      <input autoFocus type="search" class="form-control" id="exampleInputPassword1" onKeyDown={onKeyDown}></input>     
  
    </div>

    <div className="data-container">
      <div className='grid'>
        {filteredUsers.map(user => {
          return <UserCard 
            name={user['Name']} 
            email={user['Email Address']}           
            al={user['AL Stream']}
            
            contact={user['Contact Number - 1']}            
            contact2={user['Contact Number - 2 ']}
            
            job={user['Occupation']}
            company={user['Company (Institute if still studying)']}

            country={user['Located Country']}
            fb={user['FB Profile URL']}
            linkedin={user['LinkedIn Profile URL']}
            />
        })}
      </div>
    </div>
      
  </div>  
  );
}


export default App;
//https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2Pn3UqIWxWKLsC_OIUj8wKg-mCmr33MBi5XmPLNhs3Lo6yLGru3rfWRCt8aE2jHQsGmxH8LlOvCqz/pubhtml

//1LvJjlD3djDUCo9iKDooQ7nhVPDq21A7QgXyBQt9xpuo