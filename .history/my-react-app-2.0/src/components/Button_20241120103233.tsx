interface Props {
  children: string;
  color?: "primary";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
