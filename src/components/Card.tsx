interface ICard {
  children: React.ReactNode;
}

const Card = ({ children }: ICard) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-md drop-shadow-md w-full h-full p-5 max-h-fit my-2">
      {children}
    </div>
  );
};

export default Card;
