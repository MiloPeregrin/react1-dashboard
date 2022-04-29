interface IButton {
  children: string;
  onClick: (data: any) => void;
}

const Button = ({ children, onClick }: IButton) => {
  return (
    <button
      type="button"
      className="bg-pink-600 text-white p-2 rounded-md drop-shadow-md w-64 h-12"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
