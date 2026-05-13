function Card({ children }) {
  return (
    <div className="card shadow-sm p-4 mx-auto mt-4" style={{ maxWidth: "420px" }}>
      {children}
    </div>
  );
}

export default Card;
