import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="containerabass">
 

      <div className='myimage'>
        <div className='container'>
      <ul>
        <li className='h1'>Home</li>
        <li>School</li>
        <li>Coding school</li>
      </ul>

      </div>
      <h2>Welcome to Aozzy</h2>
      <p> Introducing the Ultimate AI-Powered Cold Calling Solution
Are you ready to revolutionize your outreach strategy? Imagine having the power to generate an endless stream of compelling short videos effortlessly. Welcome to our groundbreaking AI-powered cold calling machine—the fastest way to elevate your sales and engagement.
Unleash Unlimited Potential
With our innovative platform, you can create an unlimited number of short videos in seconds. Whether you need ten or a hundred, our AI does the heavy lifting for you. No more hours spent editing or searching for the right visuals and music—we automate it all.
Automated Brilliance
Say goodbye to manual tasks. Our AI seamlessly integrates cutting-edge technology to auto-generate captivating captions, apply dynamic effects that enhance viewer engagement, select background music perfectly suited to your message, and even suggest visual themes tailored to your brand.
Efficiency Redefined
Time is money, and we save you both. Our platform is designed for maximum efficiency, allowing you to focus on what matters most—building relationships and closing deals. Increase your productivity exponentially with streamlined workflows that deliver results.</p>
      <button className='button'>Sign up</button>
      </div>
      
    </div>
  );
};

export default ExploreContainer;
