
const Button = ({title, type}) => {
  return (
    <button
      type={type}
      className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2 text-center mb-2"
    >
      {title}
    </button>
  );
}

export default Button