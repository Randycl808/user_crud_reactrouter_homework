import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
//above is Variable imported from Data provider page


const Users = ()=>{
  //turns the DataContext variable to a list of user info from database
  const usersData = useContext(DataContext)
  return (
      <div>
          <h1>Users Page</h1>
            {JSON.stringify(usersData)}
            <hr />
            <button onClick={()=>usersData.setDemoState('The text has been changed in Users Page')}>change text</button>
            <p> {(usersData.demoState)}</p>

            <button onClick={()=>usersData.addAnUser({id:Math.random(), name:'Any Name'})}>add user</button>
            <button onClick={()=>usersData.updateUser({id:1, name:'Any Name'})}>update user 1</button>
            <button onClick={()=>usersData.deleteUser(1)}>delete user 1</button>
            <button className='Data'onClick={usersData.getUsers1}>get Users</button>
            {usersData.error && <p>{usersData.error}</p>}



      </div>
  )
}

export default Users