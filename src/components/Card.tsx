interface ICard {
  children: React.ReactNode;
}

const Card = ({ children }: ICard) => {
  return (
    <div className="flex flex-col items-center bg-white px-8 py-8 m-2 rounded-md drop-shadow-md w-full">
      {children}
    </div>
  );
};

export default Card;
