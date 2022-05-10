interface IAlert {
  action: "new" | "edit";
}

const Alert = ({ action }: IAlert) => {
  const success = {
    message: { new: "New task added", edit: "Task successfully changed" },
  };

  return (
    <div className="w-96 flex justify-center p-2 bg-white drop-shadow-md border-b-4 border-pink-600 text-pink-600">
      {success.message[action]}
    </div>
  );
};

export default Alert;
