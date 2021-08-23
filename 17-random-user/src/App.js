import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

const defaultPerson = {
  image: "https://randomuser.me/api/portraits/women/17.jpg",
  name: "Leila Nordengen",
  email: "leila.nordengen@example.com",
  age: 67,
  street: "4791 Johan Castbergs vei",
  phone: "55977665",
  password: "rose",
};

const buttons = [
  { label: "name", icon: <FaUser /> },
  { label: "email", icon: <FaEnvelopeOpen /> },
  { label: "age", icon: <FaCalendarTimes /> },
  { label: "street", icon: <FaMap /> },
  { label: "phone", icon: <FaPhone /> },
  { label: "password", icon: <FaLock /> },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(defaultPerson);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random user");

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newTitle = e.target.dataset.label;
      console.log(newTitle);
      setTitle(newTitle);
      setValue(person[newTitle]);
    }
  };

  const getPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const {
      login: { password },
    } = person;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${number}`,
      name: `${first} ${last}`,
    };

    setPerson(newPerson);
    setLoading(false);
    setTitle("name");
    setValue(newPerson.name);
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            {buttons.map((btn, index) => {
              const { label, icon } = btn;
              return (
                <button
                  key={index}
                  className="icon"
                  data-label={`${label}`}
                  onMouseEnter={handleValue}
                >
                  {icon}
                </button>
              );
            })}
          </div>
          <button type="button" className="btn" onClick={getPerson}>
            {loading ? "Loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
