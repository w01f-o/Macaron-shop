const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`primary-button ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
