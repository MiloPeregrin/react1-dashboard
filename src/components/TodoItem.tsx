interface ITodoItem {
  children: React.ReactNode;
}

const TodoItem = ({ children }: ITodoItem) => {
  return (
    <div className="flex flex-col items-center bg-white m-2 rounded-md drop-shadow-md">
      {children}
    </div>
  );
};

export default TodoItem;
