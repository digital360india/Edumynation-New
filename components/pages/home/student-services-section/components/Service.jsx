export default function Service({ service }) {

  console.log('Rendered');

  return (
    <div
      className="service"
      // style={{ backgroundImage: `url('${service.image}')` }}
    > 
      <div className="title">
        {service.title}
      </div>
      <div className="text">
        {service.text}
      </div>
    </div>
  );
}
