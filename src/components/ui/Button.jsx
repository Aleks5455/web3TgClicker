import clsx from "clsx";

const UiButton = ({ className, size, type, children, extraText, onClick }) => {
  const btnClass = clsx(
    className,
    {
      md: "flex pl-[15px] py-[14px] w-[170px] rounded-xl",
      lg: "px-[100px] py-[26px] rounded-xl w-[350px]",
    }[size],
    {
      filled: "mainBackground text-white border",
      empty: "emptyBackground text-white border",
    }[type]
  );

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
      <span className="text-just-blue font-medium ">{extraText}</span>
    </button>
  );
};

export default UiButton;
