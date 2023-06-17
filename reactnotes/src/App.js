import logo from './logo.svg';
import './App.css';
import FunctionalComponent1 from './Components/FunctionalComp1';
import ClassComponent2 from './Components/ClassComponent2';
import JSX3 from './Components/JSX3';
import Props4 from './Components/Props4';
import ClassComponentsProps5 from './Components/ClassComponentsProps5';

import StateandSetState6 from './Components/StateandSetState6';
import MethodsAsprops7 from './Components/MethodsAsprops7';

import ListRenderingUsingObject10 from './Components/ListRenderingUsingObject10';
import MountingLifeCycleMethods12 from './Components/MountingLifeCycleMethods12';
import UpdatingLifeCycleMethod14 from './Components/UpdatingLifeCycleMethod14';
import NormalParentForPureComponnet17 from './Components/NormalParentForPureComponent17';

function App() {
  return (
    <div className="App">
     {/* <FunctionalComponent1/>
      <ClassComponent2/>
      <JSX3/>
      <Props4 name="Clark"  heroName="SuperMan"/>
      <Props4 name="Diana" heroName="Batman"/>
      <ClassComponentsProps5 name="clark" heroName="superman"/>
      <ClassComponentsProps5 name="diana" heroName="wonderwoman"/>
      <StateandSetState6/>
  <MethodsAsprops7/>*/}
      <ListRenderingUsingObject10/>
      <MountingLifeCycleMethods12/>
      <UpdatingLifeCycleMethod14/>
      <NormalParentForPureComponnet17/>
    </div>
  );
}

export default App;
