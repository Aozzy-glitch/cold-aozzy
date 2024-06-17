import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
   <IonHeader translucent={true}>
    <IonToolbar>
      <IonTitle>AI</IonTitle>
    </IonToolbar>
   </IonHeader>
   <IonContent className='ion-padding'>
    <h1>Animals</h1>
    <h2>Rhinos</h2>
    <p>Rhinos are powerful and majestic creatures, 
      known for their impressive size and iconic horns. 
      These formidable animals are built for strength and defense,
       with thick skin that serves as natural armor against predators and the harsh African sun. 
       Generally solitary, rhinos spend their days grazing on grasses and shrubs, using their horns to dig for water or break branches. Despite their tough exterior, 
       rhinos are vulnerable to threats such as habitat loss and poaching, driven by the high demand for their horns. Conservation efforts are crucial to 
       protect these ancient beings and ensure 
      they continue to roam the savannahs and forests of Africa and Asia.</p>
        <img src='https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'/>
        <h3>Giraffes</h3>
        <p className='p2'>Giraffes are the tallest land animals, 
          their long necks and legs giving them an unparalleled view of the African savannah. 
          These graceful creatures use their height to reach leaves high up in acacia trees,
           a food source inaccessible to most other herbivores. Social by nature, giraffes often travel in loose herds, 
          communicating through subtle gestures and occasionally vocalizations. Their distinctive spotted coats provide camouflage
           in the dappled light of their environment. Despite their gentle appearance, giraffes face significant threats from habitat fragmentation and poaching. 
           Protecting these unique animals is vital for maintaining the 
          biodiversity and ecological balance of their natural habitats.</p>
          <img src='https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80'/>
          <h4>Turtles</h4>
          <p>Turtles are ancient reptiles known for their distinctive shells, which serve as protective armor against predators. 
            These fascinating creatures are remarkably diverse, inhabiting a range of environments from oceans and rivers to forests and deserts. 
            Marine turtles, like the majestic leatherback, embark on incredible migratory journeys across vast ocean distances, while freshwater and terrestrial turtles often stay within more localized habitats. Turtles are generally slow-moving, using their sturdy, clawed limbs to navigate their environments. They play crucial roles in their ecosystems, such as controlling insect populations and dispersing seeds. However, turtles face numerous threats, including habitat destruction,
             pollution, and illegal trade, making conservation efforts essential to safeguard these resilient yet vulnerable animals for future generations.</p>
             <img src='https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'/>
             <h5>Dolphines</h5>
             <p>
             Dolphins are highly intelligent and social marine mammals known for their playful behavior and remarkable communication skills. Inhabiting oceans and rivers around the world, dolphins are often seen leaping out of the water, riding waves, and engaging in complex social interactions. They use a sophisticated system of clicks, whistles, and body language to communicate with one another, and their echolocation abilities allow them to navigate and hunt with precision. Dolphins live in groups called pods, which can consist of a few individuals to several dozen, fostering strong social bonds and cooperative behaviors. Their diet primarily consists of fish and squid, which they often hunt together using coordinated tactics. Despite their adaptability and widespread presence, dolphins face significant threats from pollution, habitat loss, and entanglement in fishing gear. Conservation efforts are crucial to protect these charismatic creatures and ensure the health of marine ecosystems.
             </p>
             <img src='https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'/>
   </IonContent>
   </IonPage>
  );
};

export default Tab2;
