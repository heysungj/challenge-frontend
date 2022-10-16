import { useLocation } from "react-router-dom";
import one from "./0.jpeg";
import two from "./1.jpeg";
import three from "./2.jpeg";
import four from "./3.jpeg";
import five from "./4.jpeg";
import "./ResultPage.css";

export default function ResultPage() {
  const { state } = useLocation();
  let { data } = state;

  let src = {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
  };

  let random = Math.ceil(Math.random() * 5);

  return (
    <div className="resultContainer">
      <h3>Hello {data.name}, here is the dessert we picked for you </h3>
      <h3>Pick up date is {data.date}</h3>
      <img src={src[random]} alt="img" className="dessert" />
    </div>
  );
}
