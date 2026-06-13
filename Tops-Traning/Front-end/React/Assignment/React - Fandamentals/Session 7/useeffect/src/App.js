import IPLScoreFetcher from "./IPLScoreFetcher";
import MovieSuggestions from "./MovieSuggestions";
import TrendingSongs from "./TrendingSongs";


function App() {
  return (
    <div className="App">
      <h1>This is sesssion 7</h1>
      
      {/* Task 1 */}
      <TrendingSongs/>
      <br/>
      <br/>

      {/* Task  2 */}
      <IPLScoreFetcher />

      <br/>
      <br/>
      {/* Task 3 */}
      <MovieSuggestions />

    </div>
  );
}

export default App;
