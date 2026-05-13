function Button({ text, onClick, variant = "primary", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} w-100 mt-2`}
    >
      {text}
    </button>
  );
}

export default Button;
