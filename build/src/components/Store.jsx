import beerSVG from "../assets/beer.svg";
import cognacSVG from "../assets/cognac.svg";
import redSVG from "../assets/red-wine.svg";
import sodaSVG from "../assets/soda.svg";
import ginSVG from "../assets/spirits.svg";
import whiskySVG from "../assets/whisky.svg";
import cardImage from "../assets/Hotel1.jpg";

const Store = () => {
  return (
    <>
      <StoreHeader />
      <FeaturedComponent />
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
    </>
  );
};

const CategoryComponent = () => {
  const items = [
    { imgSrc: beerSVG, title: "Beer" },
    { imgSrc: ginSVG, title: "Gin" },
    { imgSrc: whiskySVG, title: "Whiskey" },
    { imgSrc: redSVG, title: "Wines" },
    { imgSrc: cognacSVG, title: "Cognac" },
    { imgSrc: sodaSVG, title: "Mixers" },
  ];

  const ListItem = ({ imgSrc, title }) => {
    return (
      <div className="flex items-center space-x-4">
        <div>
          <img src={imgSrc} alt={title} className="w-16 h-16" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p>Price: KES 250</p>
          <p>Description: Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-xl font-semibold">Category</h1>
      <div className="m-2 p-4">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index}>
              <ListItem imgSrc={item.imgSrc} title={item.title} />
              <div className="divider"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FeaturedComponent = () => {
  const items = [
    { imgSrc: beerSVG, title: "Beer" },
    { imgSrc: ginSVG, title: "Gin" },
    { imgSrc: whiskySVG, title: "Whiskey" },
    { imgSrc: redSVG, title: "Wines" },
    { imgSrc: cognacSVG, title: "Cognac" },
    { imgSrc: sodaSVG, title: "Mixers" },
  ];

  const ListItem = ({ imgSrc, title }) => {
    return (
      <div className="bg-primary/10 p-2 m-3 flex flex-col w-32 h-44">
        <img src={imgSrc} alt={title} className="" />
        <p className="text-center">{title}</p>
        <p className=" text-xs text-center">
          KES 250 <span> ⭐ 4.5 </span>
        </p>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-xl font-semibold">Featured items</h1>
      <div className="scroll-container overflow-x-auto">
        <ul className="flex list-none">
          {items.map((item, index) => (
            <li key={index}>
              <ListItem imgSrc={item.imgSrc} title={item.title} />
            </li>
          ))}
        </ul>
      </div>
      <div className="divider"></div>
    </div>
  );
};

const StoreHeader = () => {
  return (
    <div>
      <div className="header h-[20vh] relative">
        <figure className="relative w-full h-full overflow-hidden">
          <img
            src={cardImage}
            alt="Title"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-2 left-0 right-0 bg-neutral p-2">
            <h1 className="font-semibold text-xl text-white text-center">
              Title
            </h1>
          </span>
        </figure>
      </div>
      <div className="flex justify-center space-y-2 flex-col items-center">
        <div className="flex font-extralight text-sm space-x-2">
          <p className="font-bold">⭐4.5(400) ~</p>
          <p>10-50 min ~</p>
          <p>2.0km</p>
        </div>
        <div className="bg-primary p-4 rounded-2xl w-[80%] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg font-medium">Delivery Fee</div>
            <div className="text-sm font-light">KES 200 </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg font-medium">Delivery Time</div>
            <div className="text-sm font-light">25-35 mins</div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};
export default Store;
