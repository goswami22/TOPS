import CartItem from "./CartItem ";
import LikeButton from "./LikeButton";


function App() {
  return (
    <div className="App">
      {/* Task 1 */}
      <LikeButton/>

      {/* Task 2 */}
      <CartItem name="Product 1" quantity={5}/>
    </div>
  );
}

export default App;
