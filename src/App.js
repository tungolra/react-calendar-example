import "./styles.css";
import Calendar from "./Calendar";
import Categories from "./Categories";
import { useState } from "react";

export default function App() {
  // "database"
  const initialCategories = [
    { type: "Holiday", backgroundColor: "darkorange", selected: false },
    { type: "Work", backgroundColor: "blue", selected: false },
    { type: "Errands", backgroundColor: "green", selected: false },
    { type: "Sick", backgroundColor: "red", selected: false }
  ];

  const days = [
    {
      name: "Sunday"
    },
    {
      name: "Monday"
    },
    {
      name: "Tuesday"
    },
    {
      name: "Wednesday"
    },
    {
      name: "Thursday"
    },
    {
      name: "Friday"
    },
    {
      name: "Saturday"
    }
  ];
  const dates = Array.from({ length: 28 }, (x, i) => i + 1);
  const tempCalendar = dates.map((date, i) => {
    return { date, day: days[i % 7].name, category: "" };
  });
  // states
  const [categories, setCategories] = useState(initialCategories);
  const [calendar, setCalendar] = useState(tempCalendar);

  return (
    <div className="App">
      <h1>React Calendar</h1>
      <Categories categories={categories} setCategories={setCategories} />
      <Calendar
        calendar={calendar}
        setCalendar={setCalendar}
        categories={categories}
      />
    </div>
  );
}
