import "./App.css";
import Navbar  from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  // const foodItems = ['pizza', 'burger', 'sushi', 'pasta', 'salad'];
  
  // const FoodItem = ({ foodName }) => <div>{foodName}</div>;
  return (
    <BrowserRouter>
      <Navbar />
      {/* <div>
        <div className="pt-16">
          {foodItems.map((food, index) => (
            <FoodItem key={index} foodName={food} />
          ))}
        </div>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
