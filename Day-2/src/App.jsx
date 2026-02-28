import UserCard from "./components/UserCard"

function App() {


  return (
    <div className='app-container'>
      <UserCard name='Tarun Chaudhary' description='Software Engineer'/>
      <UserCard name='Rahul Sharma' description='Product Manager'/>
      <UserCard name='Priya Patel' description='UX Designer'/>
      
    </div>
  );
}

export default App
