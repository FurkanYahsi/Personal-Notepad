import UserConsumer from '../contexts/UserContext'
import User from './User'

const Users = () => {
  return (
    <UserConsumer>
        {
            value => {
                const {users} = value;
                return (
                    <div>
                    {
                        users.map(user => (
                            <User
                                id={user.id}
                                name={user.name}
                                surname={user.surname}
                                email={user.email}
                                password={user.password}
                            />                            
                        ))
                    }
                    </div>
                )
            }
        }
    </UserConsumer>
  )
}

export default Users
