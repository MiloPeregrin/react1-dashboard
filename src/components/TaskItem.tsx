interface ICard {
  children: React.ReactNode;
}

const Card = ({ children }: ICard) => {
  return (
    <div className="flex flex-col items-center bg-white m-2 rounded-md drop-shadow-md">
      {children}
    </div>
  );
};

export default Card;
