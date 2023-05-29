import React, { useState } from "react";

const Card = ({ src, name, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const favoriteClick = () => {
    const favoriteCard = {
      name: name,
      src: src,
      description: description,
    };
    localStorage.setItem("favCard", JSON.stringify(favoriteCard));
  };

  return (
    <div className="max-sm:w-full z-20 h-[55vh] w-[20%]">
      <div
        className={`bg-cover rounded-md shadow-lg w-full h-full text-center flex justify-between flex-col p-5 ${
          isFlipped ? "is-flipped" : ""
        }`}
        style={{ backgroundImage: `url('${src}')` }}
        onClick={cardClick}
      >
        <p className="text-3xl text-amber-50 font-bold">{name}</p>
        <p className="text-amber-50 font-bold">{description}</p>
        <button
          className="p-4 bg-amber-100 text-xl font-bold rounded shadow-lg"
          onClick={favoriteClick}
        >
          Add favorite
        </button>
      </div>
    </div>
  );
};

export default Card;
