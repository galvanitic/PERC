import React from 'react';
import logo from '../../assets/img/logo.png';
import P from '../../assets/img/P.png'
import E from '../../assets/img/E.png'
import R from '../../assets/img/R.png'
import C from '../../assets/img/C.png'
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

interface Props {
}
interface IContentProps {
}

const Content: React.FunctionComponent<IContentProps> = (props) => {
  const [loaderState, chLoaderState] = React.useState<boolean>(true);
  const [loaderState2, chLoaderState2] = React.useState<boolean>(false);
  const [images, setImages] = React.useState<Array<any>>([P, E, R, C, logo]);
  const [index, setIndex] = React.useState<number>(0);

  let bootSequence = () => {
    new Promise(()=>{setTimeout(()=>{chLoaderState(false)}, 1500)})
    .then(()=>{chLoaderState2(true)})
    .then(()=>{setTimeout(()=>{chLoaderState2(false)}, 1500)});
    setInterval(()=>{
      let newActiveIndex = index === 3 ? 0 : index+1;
      setIndex(newActiveIndex);
    }, 150);
  }
  
  React.useEffect(()=>{
    bootSequence();
  },[index, loaderState, loaderState2,  bootSequence]);

  if(!loaderState && !loaderState2){
    //Show buttons
    return(
      <div className="popup-actions">
        <button className="schedule-bttn">MY SCHEDULE</button>
        <button className="degree-bttn">MY DEGREE</button>
        <button className="resources-bttn">RESOURCES</button>
      </div>
    )
  }else if(!loaderState && loaderState2){
    return(<img src={images[4]} className="App-logo" alt="logo" />);
  }else{
    // Show loader
    return(<img src={images[index]} className="App-logo" alt="logo" />);
  }
}

const Popup: React.FC<Props> = ({ }: Props) => {
  return (
    <div className="App">
      <header className="App-header">
        <Content />
      </header>
    </div>
  );
};

export default Popup;
