import beerSVG from "../assets/beer.svg";
import cognacSVG from "../assets/cognac.svg";
import redSVG from "../assets/red-wine.svg";
import sodaSVG from "../assets/soda.svg";
import ginSVG from "../assets/spirits.svg";
import whiskySVG from "../assets/whisky.svg";
import cardImage from "../assets/Hotel1.jpg";

const Hero = () => {
  const items = [
    { imgSrc: beerSVG, title: "Beer" },
    { imgSrc: ginSVG, title: "Gin" },
    { imgSrc: whiskySVG, title: "Whiskey" },
    { imgSrc: redSVG, title: "Wines" },
    { imgSrc: cognacSVG, title: "Cognac" },
    { imgSrc: sodaSVG, title: "Mixers" },
  ];

  const categories = [
    { label: "Offer", value: "50% - 10%" },
    { label: "Price", value: "500 - 100" },
    { label: "Rating", value: "5 stars - 1 star" },
    { label: "Under 30 mins", value: "5 stars - 1 star" },
  ];

  return (
    <div className="p-4 m-2 ">
      <ul className="flex space-x-2 list-none">
        {items.map((item, index) => (
          <li key={index}>
            <ListItem imgSrc={item.imgSrc} title={item.title} />
          </li>
        ))}
      </ul>
      <div className="my-4 space-y-1 justify-center">
        <ul className="flex space-x-2 list-none">
          {categories.map((category, index) => (
            <li key={index}>
              <ButtonItem title={category.label} />
            </li>
          ))}
        </ul>
        <button className="btn btn-sm btn-secondary rounded-xl">Reset</button>
      </div>
      <div>
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

const ListItem = ({ imgSrc, title }) => {
  return (
    <div className="bg-neutral-300 rounded-lg">
      <img src={imgSrc} alt={title} className="w-16" />
      <p className="text-sm text-center">{title}</p>
    </div>
  );
};

const ButtonItem = ({ title }) => {
  return <button className="btn btn-sm btn-primary rounded-xl">{title}</button>;
};

const CardItem = () => {
  return (
    <div className="relative rounded-lg my-4">
      <div className="flex">
        <figure className="relative">
          <img
            src={cardImage}
            alt="Title"
            className="w-full aspect-video rounded-lg"
          />
          <span className="absolute top-2 left-2 badge badge-neutral badge-lg rounded-badge">
            Offer
          </span>
        </figure>
      </div>
      <div className="flex justify-between p-2">
        <div>
          <h1 className="font-[600] text-xl">Title</h1>
          <p className="font-extralight text-sm">10-50 min</p>
        </div>
        <div className="h-8 w-8 rounded-full bg-sky-900 badge flex items-center justify-center">
          <p>4.5</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
