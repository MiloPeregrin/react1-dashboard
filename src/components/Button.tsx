interface IButton {
  // type: string;
  children: string;
  onClick?: (data: any) => void;
  // height?: string;
  // width?: string;
}

const Button = ({ children, onClick }: IButton) => {
  return (
    <button
      type="button"
      className="bg-pink-500 text-white font-medium px-1 m-1 rounded-md drop-shadow-md w-content h-content"
      onClick={onClick}
    >
      <div className="flex justify-center items-center">{children}</div>
    </button>
  );
};

export default Button;
