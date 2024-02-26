import cardImage from "../assets/Hotel1.jpg";

const OrderItem = () => {
  return (
    <div>
      <ItemHeader />
      <ItemVolumeOptions />
      <div className="bottom-0 w-auto  justify-center items-center flex lg:text-xl">
        <button className="btn my-8 btn-wide bg-accent">Add to Cart</button>
      </div>
    </div>
  );
};

const ItemHeader = () => {
  return (
    <div className="header h-[25vh] relative mb-2">
      <figure className="relative w-full h-full overflow-hidden">
        <img
          src={cardImage}
          alt="Title"
          className="w-full h-full object-cover"
        />
        <span className="absolute -bottom-2 left-0 right-0 bg-neutral p-2">
          <h1 className="font-semibold text-xl">Title</h1>
          <h2>KES 250</h2>
        </span>
      </figure>
    </div>
  );
};

const ItemVolumeOptions = () => {
    
  return (
    <div className="p-4">
      <h1 className="font-semibold text-xl">Choose your size</h1>
      <div className="divider"></div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="font-semibold text-xl">Title</p>
          <p className="font-extralight text-sm">
            Choose 1 • Pick from up to 1 options
          </p>
        </div>
        <div className="badge badge-warning ">
          <p>Required</p>
        </div>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">250ml</span>
          <input
            type="radio"
            name="radio-10"
            className="radio"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">500ml</span>
          <input
            type="radio"
            name="radio-10"
            className="radio"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">750ml</span>
          <input
            type="radio"
            name="radio-10"
            className="radio"
          />
        </label>
      </div>
    </div>
  );
};

export default OrderItem;
