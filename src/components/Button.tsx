interface IButton {
  children: string;
  onClick?: (data: any) => void;
  size?: "large";
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, onClick, size, type }: IButton) => {
  const common = "text-white rounded-md drop-shadow-md";
  const smallButton = `${common} bg-pink-500 font-medium px-3 m-1 w-content h-content`;
  const largeButton = `${common} bg-pink-600 p-2 w-64 h-10`;
  return (
    <button
      type={type ? type : "button"}
      className={size === "large" ? largeButton : smallButton}
      onClick={onClick}
    >
      <div className="flex justify-center items-center">{children}</div>
    </button>
  );
};

export default Button;
