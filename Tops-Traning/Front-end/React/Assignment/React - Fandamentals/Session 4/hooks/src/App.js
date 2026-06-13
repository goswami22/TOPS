import CartItem from "./CartItem";
import LikeButton from "./LikeButton";
import Rating from "./Rating";
import SongVote from "./SongVote";


function App() {
  return (
    <div className="App">
      {/* Task 1 */}
      <LikeButton/>

      {/* Task 2 */}
      <CartItem name="Product 1" quantity={0}/>

      {/* task 3 */}
      <SongVote/>


      {/* task 4 */}
      <Rating/>

    </div>
  );
}

export default App;
