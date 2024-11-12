const Button = ({ text, link }) => {
  return (
    <a className="w-screen" href={link} target="blank">
      <div className="px-[80px] w-[70%] max-w-[500px] m-auto font-bold border-solid border-2 border-[#061592] hover:bg-[#061592] hover:text-[#E0E0E0] transition-colors duration-300 rounded-xl py-4 text-lg">
        <h1 className="text-center">{text}</h1>
      </div>
    </a>
  );
};

export default Button;