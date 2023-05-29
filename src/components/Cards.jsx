import React, { useState } from "react";

const Card = ({ src, name, description, color }) => {
  const [flipped, setFlipped] = useState(false);

  const cardClick = () => {
    setFlipped(!flipped);
  };

  const favoriteClick = () => {
    const favoriteCard = {
      name: name,
      src: src,
      description: description,
      color: color,
    };
    localStorage.setItem("favCard", JSON.stringify(favoriteCard));
  };

  return (
    <div className="flipped z-20 h-[55vh] w-[20%] max-sm:w-full">
      <div
        className={`card flex h-full w-full flex-col justify-between rounded-md bg-cover p-5 text-center shadow-lg ${color} ${
          flipped ? "flipped" : ""
        }`}
        style={{
          backgroundImage: flipped ? "none" : `url('${src}')`,
        }}
        onClick={cardClick}
      >
        {flipped && (
          <>
            <p className="text-3xl font-bold text-amber-50">{name}</p>
            <p className="font-bold text-amber-50">{description}</p>
            <button
              className="rounded bg-amber-100 p-4 text-xl font-bold shadow-lg"
              onClick={favoriteClick}
            >
              Add favorite
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
