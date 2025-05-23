import PropTypes from 'prop-types'
import NoteConsumer from '../../contexts/NoteContext'


const Note = (props) => {
    const {id, header, note, date} = props;

    onAddNote = () => {
        dispatch({type:"ADD_NOTE", payload: note, header, date})
    }
    return (
        <NoteConsumer>
            {
                value => {
                    const{dispatch} = value;
                    return (
                        <div>

                        </div>
                    )
                }            
            }
        </NoteConsumer>
    )
}

export default Note
