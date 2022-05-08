type ButtonSize = "small" | "medium" | "large";
interface IButton {
  children: string;
  onClick?: (data: any) => void;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, onClick, size, type }: IButton) => {
  const common = "text-white rounded-md drop-shadow-md";
  const smallButton = `${common} bg-pink-500 font-medium px-3 m-1 w-content h-content`;
  const mediumButton = `${common} bg-pink-600 p-2 w-32 h-10 mx-1`;
  const largeButton = `${common} bg-pink-600 p-2 w-64 h-10`;

  const getButtonSize = (size: ButtonSize | undefined) => {
    switch (size) {
      case "small":
        return smallButton;
      case "medium":
        return mediumButton;
      case "large":
        return largeButton;
      default:
        return smallButton;
    }
  };
  return (
    <button
      type={type ? type : "button"}
      className={getButtonSize(size)}
      onClick={onClick}
    >
      <div className="flex justify-center items-center">{children}</div>
    </button>
  );
};

export default Button;
