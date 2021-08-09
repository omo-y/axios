import axios from "axios";
import "./styles.css";

export default function APP() {
  const onClickusers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const onClickuser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=2")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <button onClick={onClickusers}>users</button>
      <br />
      <br />
      <button onClick={onClickuser1}>id=1のuser</button>
    </div>
  );
}
