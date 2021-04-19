export const Actions = ({ actiontext, link, onClick = () => {} }) => {
  return (
    <button
      className="item-btn"
      onClick={() => {
        onClick();
      }}
      link={{ link }}
    >
      {actiontext}
    </button>
  );
};

export default Actions;
