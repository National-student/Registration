import { useRef, useState } from "react";
import { User } from "./components/User";

function App() {
  const UserName = useRef();
  const UserNumber = useRef();
  const UserCourse = useRef();

  const localData = JSON.parse(localStorage.getItem("user")) || [];
  const [user, setUser] = useState(localData);

  const Day = new Date()

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const pupil = {
      Id: Math.ceil(Math.random() * 1000),
      Name: UserName.current.value,
      Number: UserNumber.current.value,
      Course: UserCourse.current.value,
      Date: Day.getDate()
    };

    setUser([...user, pupil]);
    localStorage.setItem("user", JSON.stringify([pupil, ...user]));
  };

  console.log(user);
  return (
    <div>
      <h1>Ro'yxatdan o'tish</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={UserName}
          type="text"
          placeholder="Ism familiya"
          autoComplete="off"
        />{" "}
        <br /> <br />
        <input
          ref={UserNumber}
          type="tel"
          id="phone"
          autoComplete="off"
          pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="90-123-45-67"
        />{" "}
        <br />
        <label htmlFor="phone">
          Raqamni bunaqa kiriting: 90-123-45-67
        </label>{" "}
        <br /> <br />
        <select ref={UserCourse}>
          <option>Kursni tanlang:</option>
          <option value="IT dasturlash">IT dasturlash</option>
          <option value="Arab tili">Arab tili</option>
          <option value="Ingliz tili">Ingliz tili</option>
        </select>{" "}
        <br /> <br />
        <button>Jo'natish</button>
      </form>

      <User user={user} />
    </div>
  );
}
export default App;
