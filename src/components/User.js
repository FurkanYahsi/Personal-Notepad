import PropTypes from 'prop-types'
import UserConsumer from '../contexts/UserContext'


const User = (props) => {
    const {id, name, surname, email, password} = props;

    const onLoginUser = () => {
      dispatch({type:"LOGIN_USER", payload: email})
    }
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
