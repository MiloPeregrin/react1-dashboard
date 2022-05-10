interface IAlert {
  action: "new" | "edit";
}

const Alert = ({ action }: IAlert) => {
  const success = {
    color: "bg-green-200",
    message: { new: "New task added", edit: "Task successfully changed" },
  };

  return (
    <div className={`${success.color} w-96 flex justify-center p-2`}>
      {success.message[action]}
    </div>
  );
};

export default Alert;
