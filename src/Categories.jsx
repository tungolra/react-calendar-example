import "./Category.css";

export default function Categories({ categories, setCategories }) {
  function handleClick(e) {
    const newCategory = categories.map((obj) => {
      if (obj.type === e.target.id) {
        return { ...obj, selected: true };
      }
      if (obj.selected) {
        return { ...obj, selected: false };
      }
      return obj;
    });
    setCategories(newCategory);
  }

  return (
    <div className="wrapper">
      {categories.map((obj, i) => (
        <div
          key={i}
          className="category"
          id={obj.type}
          style={{
            backgroundColor: obj.backgroundColor,
            border: obj.selected ? "5px solid yellow" : "inherit"
          }}
          onClick={handleClick}>
          {obj.type}
        </div>
      ))}
    </div>
  );
}
