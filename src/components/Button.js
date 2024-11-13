const Button = ({ text, link }) => {
  return (
    <a 
    className="" href={link} target="blank">
      <button className="m-auto  py-7 text-xl w-[70vw] max-w-[500px] inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {text}
        </button>
    </a>



  
        // tailwind.config.js code

  );
};

export default Button;