interface ICard {
  children: React.ReactNode;
  title?: string;
}

const Card = ({ children, title }: ICard) => {
  return (
    <div className="flex flex-col items-center bg-white px-8 py-8 mt-8 rounded-md drop-shadow-md h-max w-full">
      <p className="font-bold">{title}</p>
      {children}
    </div>
  );
};

export default Card;
