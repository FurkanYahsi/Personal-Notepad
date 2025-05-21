import PropTypes from 'prop-types'
import UserConsumer from '../contexts/UserContext'


const User = (props) => {
    const {id, name, email, password} = props;
  return (
    <UserConsumer> {
        value => {
            const{dispatch} = value;
            return (
                <div>
                    
                </div>
            )

        }
    }
    </UserConsumer>
  )
}

export default User
