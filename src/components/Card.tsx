interface ICard {
  children: React.ReactNode;
}

const Card = ({ children }: ICard) => {
  return (
    <div className="flex flex-col items-center bg-white p-5 mx-2 my-4 rounded-md drop-shadow-md w-full h-full">
      {children}
    </div>
  );
};

export default Card;
