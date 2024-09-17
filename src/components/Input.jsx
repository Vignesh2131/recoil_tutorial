
const Input = ({title,placeholder,onChange}) => {
  return (
    <div className="mb-4">
          <label className="text-base font-medium" htmlFor="">{title}</label>
          <br />
          <input
              onChange={onChange}
        className="border-2 rounded-md text-base p-2"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input