import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
        <center>
        <IonTitle className='tittle'>My profile</IonTitle>
        </center>
       
      </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className='container'>

          <img src='image.png' className='myimg'/>
          <center>
          <p className='p1'>
          Tyrone Smith
          </p>
        </center>
        <p className='p2'>
          App developer
        </p>

        <button className='btn1'>Follow</button>

        <br/ >

        <button className='btn2'>Message</button>

        <br />
        <div className='container1'>
        <div className='box'>
          <h1>Posts</h1>
          <p>4200</p>
        </div>
        <div className='box'>
          <h1>Followers</h1>
          <p>1800</p>
        </div>
        <div className='box'>
          <h1>Following</h1>
          <p>900</p>
        </div>
        </div>

        </div>

      </IonContent>
    </IonPage>

  );
};

export default Tab3;
