import LikeButton from "./LikeButton";
import LoginForm from "./LoginForm";
import PlaylistAdder from "./PlaylistAdder";
import SearchBar from "./SearchBar";


function App() {
  return (
    <div className="App">
     <LikeButton />
     <br/>
     <br/>
     <SearchBar />
     <br/>
     <br/>
      <LoginForm/>
     <br/>
     <br/>
    <PlaylistAdder/>
    </div>

  );
}

export default App;
