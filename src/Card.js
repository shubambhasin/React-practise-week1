const Card = ({image, name, smallDetail, price, discount}) => {
  return (
    <div style={{ border: "1px solid grey", width: "200px" }}>
      <img
        style={{ height: "200px", width: "200px" }}
        src={image}
        alt="card-avatar"
      />
      <div style={{ padding: "0.5rem 0.5rem" }}>
        {" "}
        <p>
          <strong>{name}</strong>
        </p>
        <small>{smallDetail}</small>
        <p>
          <small>
            <strong>{price}</strong>
          </small>{" "}
          <small style={{ color: "red" }}>{discount}</small>{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
