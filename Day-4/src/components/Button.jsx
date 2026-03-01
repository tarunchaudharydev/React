
export const Button = (props) => {
  
  return (
    <div>
      <p>Your Count is {props.text}</p>

      <button onClick={props.handleClick}>Click me</button>
    </div>
  );
}
