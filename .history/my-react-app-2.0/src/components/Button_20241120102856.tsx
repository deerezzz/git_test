interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      type="button"
      {children}
    </button>
  );
};

export default Button;
