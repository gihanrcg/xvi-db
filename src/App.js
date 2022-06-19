import { useState } from 'react';
import { UserCard } from './components/UserCard';
import data from './data/xvi.json'
import parse from 'html-react-parser';

const App = () => {

  const [allUsers,] = useState(data);
  const [filteredUsers, setFilteredUsers] = useState(allUsers);
  const [searchBy, setSearchBy] = useState('name');

  const onKeyDown = (e) => {
    const post = allUsers.filter((item) => {
            
      console.log(item[searchBy])
      return parse(item[searchBy])
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
    });    
    setFilteredUsers(post);
  }

  const onChangeSearchBy = (e) => {
    setSearchBy(e.target.value)
  }

  return (
  <div className="container text-center">
       
    <div className='search-container card border-success'>
      <label for="searchBy" class="form-label">Search By</label>
      <select className="form-select" aria-label="Default select example" id="searchBy" onChange={onChangeSearchBy}>
        <option value="name">Name</option>
        <option value="job">Occupation</option>
        <option value="al">AL Stream</option>
      </select>
      
      <label for="exampleInputPassword1" class="form-label">Type Here</label>
      <input autoFocus type="search" class="form-control" id="exampleInputPassword1" onKeyDown={onKeyDown}></input>
      
  
    </div>


    <div className='grid'>
        {filteredUsers.map(user => {
          return <UserCard 
            name={user.name} 
            email={user.email}
            contact={user.contact}
            al={user.al}
            job={user.job}            
            />
        })}
      </div>
      
  </div>  
  );
}


export default App;
