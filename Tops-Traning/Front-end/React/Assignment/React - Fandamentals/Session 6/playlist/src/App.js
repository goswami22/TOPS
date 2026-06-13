
import CartSummary from "./CartSummary";
import FollowerList from "./FollowerList";
import OrderStatus from "./OrderStatus";
import Song from "./Song";

function App() {
  return (
    <div className="App">
      {/* Task 1 */}
      <Song/>

      <br/>
      <br/>
      <br/>

      {/* task 2 */}
      <OrderStatus isDelivered={true}/>

      <br/>
      <br/>
      <br/>
      {/* Task 3 */}
      <FollowerList/>

      <br/>
      <br/>
      <br/>
      {/* Task 4 */}
      <CartSummary />


    </div>
  );
}

export default App;
