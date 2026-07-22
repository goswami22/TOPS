import { useDispatch } from "react-redux";
import RestaurantList from "./components/RestaurantList";

function App() {
  const dispatch = useDispatch();

  // Async Thunk Test
  const asyncAction = () => {
    return async () => {
      console.log("Async Action Started");

      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Async Action Completed");
    };
  };

  return (
    <div className="container mt-4">
      <button
        className="btn btn-primary mb-3"
        onClick={() => dispatch(asyncAction())}
      >
        Test Async Action
      </button>

      <RestaurantList />
    </div>
  );
}

export default App;