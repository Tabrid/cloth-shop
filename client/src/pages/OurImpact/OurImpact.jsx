import "./style.css";
const OurImpact = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc:
        "https://thegivingmovement.com/cdn/shop/articles/Hero_photo_c2621c1e-a212-4d36-8901-8610b22d607f_540x.jpg?v=1703493791",
      title: "Card 1 Title",
      description: "Description for Card 1.",
    },
    {
      id: 2,
      imageSrc:
        "https://thegivingmovement.com/cdn/shop/articles/Hero_photo_c2621c1e-a212-4d36-8901-8610b22d607f_540x.jpg?v=1703493791",
      title: "Card 2 Title",
      description: "Description for Card 2.",
    },
    {
      id: 3,
      imageSrc:
        "https://thegivingmovement.com/cdn/shop/articles/Hero_photo_c2621c1e-a212-4d36-8901-8610b22d607f_540x.jpg?v=1703493791",
      title: "Card 2 Title",
      description: "Description for Card 2.",
    },
    {
      id: 4,
      imageSrc:
        "https://thegivingmovement.com/cdn/shop/articles/Hero_photo_c2621c1e-a212-4d36-8901-8610b22d607f_540x.jpg?v=1703493791",
      title: "Card 2 Title",
      description: "Description for Card 2.",
    },
    {
      id: 5,
      imageSrc:
        "https://thegivingmovement.com/cdn/shop/articles/Hero_photo_c2621c1e-a212-4d36-8901-8610b22d607f_540x.jpg?v=1703493791",
      title: "Card 2 Title",
      description: "Description for Card 2.",
    },
    {
      id: 6,
      imageSrc:
        "https://thegivingmovement.com/cdn/shop/articles/Hero_photo_c2621c1e-a212-4d36-8901-8610b22d607f_540x.jpg?v=1703493791",
      title: "Card 2 Title",
      description: "Description for Card 2.",
    },
    
  ];

 
  const CardComponent = ({ card, index }) => {  
    const showBorder = index !== 0 && index !== 3; 
    const borderStyle = showBorder ? "border-l-2 border-slate-400" : "";

    return (
      <div
        key={card.id}
        className={`px-10 bg-white w-full overflow-hidden m-4 ${borderStyle}`}
      >
        <img
          className="w-full h-48 object-cover"
          src={card.imageSrc}
          alt={card.title}
        />
        <div className="p-4">
          <h2 className="font-bold text-xl">{card.title}</h2>
          <p className="text-gray-700">{card.description}</p>
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    );
  };
  return (
    <div>
      <h1 className="text-3xl text-center font-fjallaOne font-sans font-bold mt-10  mb-10">
        OUR IMPACT
      </h1>
      <div
        className="h-32 flex justify-center items-center"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="w-full text-center">
          <h1 className="font-fjallaOne font-sans font-bold">
            25,539,548 AED Raised
          </h1>
          <p>as of February 12th, 2024</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 ">
        <div className="text-center">
          <p className="">
            SINCE OUR LAUNCH IN 2020, THE GIVING MOVEMENT HAS BEEN WORKING WITH
            A SIMPLE PHILOSOPHY IN MIND:
          </p>
          <h1 className="mt-3 text-3xl bold">
            Small acts multiplied by many can transform the world.
          </h1>
          <p className="mt-5 px-20 text-justify">
            At The Giving Movement, our mission transcends giving back; it’s a
            commitment to crafting lasting impact. Humanity is at the heart of
            everything we stand for. In light of recent events, we are extending
            our support to Dubai Cares towards the Tarahum for Gaza initiative
            of compassion. From 27th of October 2023, The Giving Movement
            promises to commit all money raised towards the UAE’s urgent
            humanitarian aid for Gazan lives until further notice. We stand
            alongside the community as we commit to give back and support those
            in need.
          </p>
          <p className="mt-5 px-20 text-justify">
            Our focus on education is still the cornerstone of our journey, to
            break the poverty cycle that the underprivileged are born into.
            Through education, we empower individuals, equipping them with the
            skills and knowledge needed to shape their destinies. Our constant
            support and love toward Harmony House will resume in the near
            future. We believe that change isn’t achieved overnight but through
            persistent dedication to providing opportunities for personal
            growth.
          </p>
          <p className="mt-5">
            Our vision is a narrative of hope, resilience, and the enduring
            power of ‘giving’ to transform lives.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <img
          className="h-[1200px] w-full mx-10"
          src="https://thegivingmovement.com/cdn/shop/files/Artboard_04.jpg?v=1698413691&quot"
          alt="DOMSPAGE Image"
        />
      </div>
      <div
        className="h-96 flex justify-center items-center"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="w-full flex flex-row justify-between mx-72 items-center  gap-24 text-center">
          <div>
            <h1 className="font-fjallaOne font-sans font-bold mt-2">
              From Harmony House to Dubai
            </h1>
            <p className="mt-2">
              Saima's inspiring journey with The Giving Movement
            </p>
            <div className="flex justify-center">
              <button
                className="flex items-center justify-center mt-2 py-2 px-4 bg-white border border-black hover:text-white hover:bg-slate-800"
                style={{ transition: "background-color 0.3s, color 0.3s" }}
              >
                Read SAIMAS STORY
              </button>
            </div>
          </div>
          <div className="">
            <img
              className="w-48 h-48"
              src="https://i.ibb.co/dBM5NXK/348859181-1041597486803598-7072932153193005886-n.jpg"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center">OUR GIVING PARTNERS</h1>
        <div className="flex flex-row items-center justify-between mx-72 mt-10">
          <div>
            <div className="">
              <img
                className="w-48 h-48"
                src="https://thegivingmovement.com/cdn/shop/files/OUR-STORY-harmony-house-icon_e2ff2ee5-8eca-4dd6-a256-9226f7d870f8_300x.png?v=1685703228"
              />
            </div>
            <div className="">
              <button
                className="flex items-center justify-center mt-2 ml-10 py-2 px-4 bg-white border border-black hover:text-white hover:bg-slate-800"
                style={{ transition: "background-color 0.3s, color 0.3s" }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div>
            <div className="">
              <img
                className="w-48 h-48"
                src="https://thegivingmovement.com/cdn/shop/files/OUR-STORY-dubai-cares-icon_0f639648-3a55-4f70-89a5-920ab5a0238c_300x.png?v=1685703228"
              />
            </div>
            <div className="">
              <button
                className="flex items-center justify-center ml-12 mt-2 py-2 px-4 bg-white border border-black hover:text-white hover:bg-slate-800"
                style={{ transition: "background-color 0.3s, color 0.3s" }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-center">STORIES OF HOPE</h1>{" "}
        <div className="mt-5 grid-cols-3 grid">
          {cardsData.map((card, index) => (
            <CardComponent key={card.id} card={card} index={index} /> 
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mx-10 gap-10  mt-20">
        <div className="card relative h-72">
          <figure>
            <img
              src="https://thegivingmovement.com/cdn/shop/files/OUR_IMPACT-about_us_900x.jpg?v=1695718722&quot"
              alt="Shoes"
            />
          </figure>
          <div className="absolute inset-0 flex items-center justify-center w-full h-ful">
            <button
              className="flex items-center justify-center  uppercase ml-12 mt-2 py-2 px-4 bg-white border hover:text-white hover:bg-slate-800"
              style={{ transition: "background-color 0.3s, color 0.3s" }}
            >
              About Us
            </button>
          </div>
        </div>
        <div className="card relative  h-72">
          <figure>
            <img
              src="https://thegivingmovement.com/cdn/shop/files/OUR_IMPACT-about_us_900x.jpg?v=1695718722&quot"
              alt="Shoes"
            />
          </figure>
          <div className="absolute inset-0 flex items-center justify-center w-full h-ful">
            <button
              className="flex items-center justify-center uppercase ml-12 mt-2 py-2 px-4 bg-white border  hover:text-white hover:bg-slate-800"
              style={{ transition: "background-color 0.3s, color 0.3s" }}
            >
              In the Press
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
