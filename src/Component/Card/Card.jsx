

const Card = ({service}) => {
const{image_url, tittle, description}= service

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
 
    </div>
  </div>
</div>
    );
};

export default Card;