interface Props {
  children: string;
  onClick: () => void;
  color: string;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      color="secondary"
      className="btn btn-primary"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
