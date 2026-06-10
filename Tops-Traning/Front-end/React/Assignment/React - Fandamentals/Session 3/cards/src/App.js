import ProductCard from "./ProductCard";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <h1>Product Cards</h1>

      <ProductCard productName="LapTop" price={3000} />
      <ProductCard productName="Washing Machine" price={1500} />
      <ProductCard productName="Refrigerator" price={5000} />

      {/* task 2 */}

      <div className="container">
        <div className="row">
          <UserProfile username={"Bhavesh Goswami"} followers={10000} profilePic={"https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png"} />
          <UserProfile username={"John Smith"} followers={5000} profilePic={"https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"} />
          <UserProfile username={"Lisa"} followers={1500} profilePic={"https://retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Photo-Sydney.jpg"} />
          <UserProfile username={"Prime"} followers={2500} profilePic={"https://storage.pixteller.com/designs/designs-images/2019-01-10/07/profile-phote-avatar-human-girl-yellow-fashion-1-5c3784f592e84.png"} />
         
         {/* task 3 */}
         <p><b>Set up default values for UserProfile</b></p>
          <UserProfile/>


          {/* Task 4 */}
          <ProductCard productName={"Gijjar"} price={2000} />


        </div>
      </div>

    </div>
  );
}

export default App;
