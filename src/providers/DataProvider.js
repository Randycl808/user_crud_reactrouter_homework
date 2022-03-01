import React, {useState} from "react";
import axios from "axios";


// this creates a provider
//'createContext' is doing alot, creates a Variable to get/receive DATA
export const DataContext = React.createContext()

const DataProvider = (props)=>{
    const [users, setUsers] = useState ([{id:1, name:'randyclements'}])
    const [error, setErrorHappened] = useState (null)
    const [demoState, setDemoState] = useState('I am from demoState from the DataProvider')
   
    //async await is BETTER than .then.catch
    const getUsers1 = async () =>{
      try{
      let res = await axios.get ('https://fakerapi.it/api/v1/books?_quantity=5')
      setUsers(res.data.data)
      } catch(err){
          setErrorHappened('An error has occurred')
      }
      
    }

    // //add it to dataProviderValue
    // const getUsersOld = () =>{
    //     axios.get('https://fakerapi.it/api/v1/books?_quantity=5').then((res)=>{
    //       setUsers(res.data.data)
    //     }).catch(err=>{
    //       setErrorHappened('An error has occurred')
    //     })
    // }


    //CRUD add
    //add it to dataProviderValue
    const addAnUser = (addedUserFromAPI)=>{
        let newUsers = [...users, addedUserFromAPI]
        setUsers(newUsers)
    }

    //CRUD update
    //return user into new array ... OR dont change it (u.id ===user.id ? user : u)
    //add it to dataProviderValue
    const updateUser = (updatedUserFromAPI) => {
      let updateUsers = users.map(u => u.id === updatedUserFromAPI.id ? updatedUserFromAPI : u)
      setUsers(updateUsers)
    }

    //CRUD delete
    //add it to dataProviderValue
    const deleteUser = (idOfUserClicked) => {
        let filteredUsers = users.filter(user => user.id !== idOfUserClicked)
        setUsers(filteredUsers)
    }

    //This creates an object that will be 'global state'
    const dataProviderValue = {users:users, demoState:demoState, x:1, setDemoState, addAnUser, updateUser, deleteUser, getUsers1, error}
    // return the provider which will wrap my all app
    return (
      <DataContext.Provider value ={dataProviderValue}> 
          {props.children}
      </DataContext.Provider>
    )
}

//make sure to import on index.js
export default DataProvider