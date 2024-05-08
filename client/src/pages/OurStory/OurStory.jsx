import ReactPlayer from "react-player";

const OurStory = () => {
  return (
    <div>
      <div className="video-container">
        <ReactPlayer
          url="https://cdn.shopify.com/videos/c/vp/48aff3ff5a104d42a3b602843aa1fc8b/48aff3ff5a104d42a3b602843aa1fc8b.HD-1080p-2.5Mbps-25199496.mp4
"
          width="100%"
          height="400px"
          controls={true}
        />
      </div>
      <div className="flex justify-center mt-10">
        <div className="text-left max-w-xl">
          <h1 className="font-fjallaOne font-sans font-bold  mb-4">
            WE ARE THE GIVING MOVEMENT
          </h1>
          <p className="text-container text-content">
            At the heart of our brand, athleisure and streetwear intertwine
            seamlessly with purpose and beats a commitment to charity and
            sustainability that transcends the ordinary. We believe in apparel
            that goes beyond the surface, where every thread tells a story of
            positive impact. Welcome to a movement that makes a
            difference—welcome to The Giving Movement.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <img
          className="h-[500px] w-full"
          src="https://thegivingmovement.com/cdn/shop/files/ourstory-CHARITY_1950x.jpg?v=1709207135&quot"
        />
      </div>
      <div className="flex justify-center mt-10">
        <div className="text-left max-w-xl">
          <h1 className="font-fjallaOne font-sans font-bold  mb-4">
            WE ARE HOMEGROWN
          </h1>
          <p className="text-container text-content">
            Born in the bustling heart of Dubai, TGM emerged as a testament to
            meaningful, quality apparel and the unwavering spirit of the
            incredible local community, with everything sourced locally in the
            UAE, from supply to production.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <img
          className="h-[500px] w-full"
          src="https://thegivingmovement.com/cdn/shop/files/ourstory-CHARITY_1950x.jpg?v=1709207135&quot"
        />
      </div>
      <div className="flex justify-center mt-10">
        <div className="text-left max-w-xl">
          <h1 className="font-fjallaOne font-sans font-bold  mb-4">
            WE GIVE BACK
          </h1>
          <p className="text-container text-content">
            We believe in the power of giving back to the community that
            inspires us. With every purchase, The Giving Movement raises $4 in
            support of child welfare and humanitarian aid.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <img
          className="h-[500px] w-full"
          src="https://thegivingmovement.com/cdn/shop/files/ourstory-CHARITY_1950x.jpg?v=1709207135&quot"
        />
      </div>
      <div className="flex justify-center mt-10">
        <div className="text-left max-w-xl">
          <h1 className="font-fjallaOne font-sans font-bold  mb-4">
            WE ARE PRO-ENVIRONMENT
          </h1>
          <p className="text-container text-content">
            Embracing an eco-friendly ethos, we carefully curate fabrics and
            production processes that minimize our ecological footprint. From
            sourcing sustainable fabrics to implementing eco-conscious
            manufacturing practices, every step is taken with the planet in
            mind.
          </p>
        </div>
      </div>
      <div className="video-container mt-10">
        <ReactPlayer
          url="https://cdn.shopify.com/videos/c/vp/48aff3ff5a104d42a3b602843aa1fc8b/48aff3ff5a104d42a3b602843aa1fc8b.HD-1080p-2.5Mbps-25199496.mp4"
          width="100%"
          height="400px"
          controls={true}
        />
      </div>
      <div>
        <img
          className="h-[600px] w-full"
          src="https://thegivingmovement.com/cdn/shop/files/DOMSPAGE_EN_DESKTOP_1950x.jpg?v=1636445522"
          alt="DOMSPAGE Image"
        />
      </div>
      <div className="flex justify-center mt-20">
        <button
          className="flex items-center justify-center py-2 px-4 bg-white border border-black hover:text-white hover:bg-slate-800"
          style={{ transition: "background-color 0.3s, color 0.3s" }}
        >
          SHOP LATEST COLLECTIONS
        </button>
      </div>
      <h1 className="text-center font-fjallaOne font-sans font-bold mt-10  mb-10">
        HUMANITY IN MOTION 🖤
      </h1>
    </div>
  );
};

export default OurStory;
