import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Coding</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='mycontainer'>
          <div className='nopp'></div>
          <div className='containerinacontainer'>
      
              <div className='myinnercontainer'>
  
              <h1 className='h12'>Learn Coding
              <br/>
              Anytime</h1>
              <p>Designed for kids and Teens</p>


              <button className='btn12'>Get started &nbsp; &#8594;</button>
        
            </div>

            <div className='myinnercontainer'>
            <img src='https://parachictacademy.com.ng/wp-content/uploads/2022/04/coding-classes-for-kids-in-Ibadan.png'/>
            </div>
          

            </div>
            


        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
