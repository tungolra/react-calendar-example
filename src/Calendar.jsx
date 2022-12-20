import "./Calendar.css";

export default function Calendar(props) {
  function handleClick(e) {
    // pass in selected category's background colour

    const selectedCategory = props.categories.find(
      (category) => category.selected
    );
    if (selectedCategory) {
      // when clicked, background colour should change to category's background colour
      const dayObj = {
        ...props.calendar[e.target.id],
        category: selectedCategory.backgroundColor
      };

      const newCalendar = props.calendar.map((obj, i) => {
        if (i.toString() === e.target.id) {
          return dayObj;
        }
        return obj;
      });

      props.setCalendar(newCalendar);
    } else {
      return;
    }
  }

  return (
    <div className="container">
      <div className="calendar">
        {props.calendar.map((day, i) => (
          <div
            className="daynum"
            id={i}
            key={i}
            onClick={handleClick}
            style={{ backgroundColor: day.category }}>
            <span>{day.date}</span>
            <span>{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
