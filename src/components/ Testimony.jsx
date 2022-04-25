import '../style-sheets/Testimony.css';

function Testimony(props) {
  return (
    <div className='container-testimony'>
      <img className='image-testimony'
       src={require(`../images/image-${props.image}.png`)}
        alt={`Foto de ${props.imageName}`}/>
      <div className='container-text-testimony'>
        <p className='name-testimony'>
          <strong>{props.name}</strong> in {props.country}
          </p>
        <p className='role-testimony'> 
          {props.role} at <strong>{props.company}</strong></p>
        <p className='text-testimony'>
          "{props.testimony}"</p>
      </div>
    </div>
  );
} 

export default Testimony;