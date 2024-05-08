

const Press = () => {
  const cardData = [
    {
      id: 1,
      imageUrl:
        "https://thegivingmovement.com/cdn/shop/files/PRESSPAGE-woman.png?v=1686744134",
      heading: "Heading 1",
    },
    {
      id: 2,
      imageUrl:
        "https://thegivingmovement.com/cdn/shop/files/PRESSPAGE-woman.png?v=1686744134",
      heading: "Heading 2",
    },
    {
      id: 3,
      imageUrl:
        "https://thegivingmovement.com/cdn/shop/files/PRESSPAGE-woman.png?v=1686744134",
      heading: "Heading 3",
    },
    {
      id: 4,
      imageUrl:
        "https://thegivingmovement.com/cdn/shop/files/PRESSPAGE-woman.png?v=1686744134",
      heading: "Heading 4",
    },
    {
      id: 5,
      imageUrl:
        "https://thegivingmovement.com/cdn/shop/files/PRESSPAGE-woman.png?v=1686744134",
      heading: "Heading 5",
    },
    {
      id: 6,
      imageUrl:
        "https://thegivingmovement.com/cdn/shop/files/PRESSPAGE-woman.png?v=1686744134",
      heading: "Heading 6",
    },
    {
      id: 7,
      imageUrl:
        "https://thegivingmovement.com/cdn/shop/files/PRESSPAGE-woman.png?v=1686744134",
      heading: "Heading 7",
    },
    {
      id: 8,
      imageUrl:
        "https://thegivingmovement.com/cdn/shop/files/PRESSPAGE-woman.png?v=1686744134",
      heading: "Heading 8",
    },
  ];
  return (
    <div>
      <h1 className="uppercase flex justify-center items-center mt-20 mb-20 text-lg bold">
        Press
      </h1>
      <div className="mx-10">
        <img
          className="h-96 w-full"
          src="https://thegivingmovement.com/cdn/shop/files/BG-sweats.jpg?v=1686549064&quot"
        />
      </div>

      <div className="grid grid-cols-4 gap-10 mx-32 mt-10">
        {cardData.map((card) => (
          <div key={card.id} className="bg-base-100 shadow-2xl">
            <img src={card.imageUrl} alt="Card" className="w-full" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-center">
                {card.heading}
              </h2>
              <hr className="my-4 border-gray-300" />
              <div className="flex items-center justify-center">
                <button className="text-sky-600  uppercase">
                  View Article
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Press;
