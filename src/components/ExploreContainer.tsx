import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <div className='myimage'>
      <strong>{name}</strong>
      <h1>Hello and Welcome to Cold-Aozzy!</h1>
      <p> Welcome to Cold-Aozzy the number 1 rated Ai cold calling service for your agency.Signup today for free!</p>
      <button className='button'>Sign up</button>
      </div>
      
    </div>
  );
};

export default ExploreContainer;
