
import userImg from '../assets/user-img.jpg'
import './UserCard.css'  

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p> 
      <img id='user-img' src={userImg} alt={props.name} />
      <p id='user-description'>{props.description}</p>
    </div>
  )
}

export default UserCard