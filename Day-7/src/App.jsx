
import './App.css'

function App() {
 
    function handleClick(){
      alert("Button Clicked")
  }
  
  function handleMouseOver(){
    alert("Mouse over the Paragraph")
  }

  function handleChange(event){
    console.log("Input has changed", event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    //  i am writing this to prevent the default behavior of form submission which is to reload the page. By calling event.preventDefault(), I can handle the form submission in my own way, such as sending the data to a server or updating the state of my application without causing a page refresh.
    alert("Form Submitted");

  }

  return (
    <div>

      <button onClick={() => alert('Button click hu hai')}>
        Click Me
      </button>

      <form onSubmit={handleSubmit} type="text" onChange={handleChange}>
        <input type="text" placeholder='Enter your name' />
        <button type="submit" >
          Sumbit
        </button>
      </form>


      <p onMouseOver={handleMouseOver}>
        I am learning React and I am loving it!
      </p>
       <button onClick={handleClick}>
        Click Me
        </button>
    </div>
  )
}

export default App
