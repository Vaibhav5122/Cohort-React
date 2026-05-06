interface ActionButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const ActionButton = ({ onClick, isLoading }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="mt-8 px-8 py-3 bg-black text-white font-black text-lg border-2 border-black rounded-lg hover:bg-white hover:text-black transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Loading..." : "Get new Cat"}
    </button>
  );
};

export default ActionButton;
