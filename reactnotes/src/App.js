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
import Refs20 from './Components/Refs20';
import ParentRefs21 from './Components/ParentRefs21';
import ForwardingRefs23 from './Components/Forwardingrefs23';
import HigherorderComponents25 from './Components/HigherorderComponents25'
import HigherOrderHoverCounter27 from './Components/HigherOrderHoverCounter27';
import HigherOrderClickCounter26 from './Components/HigherOrderClickCounter26';
import { UserProvider } from './Components/UseContext28';
import ContextChild29 from './Components/ContextChild29';
import UseState1 from './Hooks/UseStateCount1'
import UseStatecount1 from './Hooks/UseStateCount1';
import UseStateWithPrevState2 from './Hooks/UseStatewithPrevState2';
import UseStateWithObject3 from './Hooks/UseStatewithObject3';
import UseStateWithArray4 from './Hooks/UseStateWithArray4';
import UseEffect5 from './Hooks/UseEffect5';
import UseEffectWithDependancyArray from './Hooks/UseEffectWithDependancyArray6';
import UseEffectEmptyArrayDependancy7 from './Hooks/UseEffectEmptyArrayDependancy7';
import UseEffectEmptyDependancyMistakes8 from './Hooks/UseEffectEmptyArrayDependancyMistakes8';
import UseEffectComponentRemoval9 from './Hooks/UseEffectComponentRemoval9';
import DataFetchingAxios10 from './Hooks/DataFetchingAxios10';
import DataFetchingAxiosOnButtonClick11 from './Hooks/DataFetchingAxiosOnButtonClick11';
import React, { useReducer } from 'react';
import UserContextWithoutHook12 from './Hooks/UserContextWithoutHook12';
import UseContextUsingHook14 from './Hooks/UseContextUsingHook14';

import UseReducerHook15 from './Hooks/UseReducerHook15';
import UseReducerWithObjectInitialState16 from './Hooks/UseReducerWithObjectIntialState16';
import UseReducerWithObjectState17 from './Hooks/UseReducerWihObjectState17';
import UseReducerMultipleReducers18 from './Hooks/UseReducerMultipleReducers18';
import UseReducerWithUseContext19 from './Hooks/UseReducerWithUseContext19';
import UseReducerWithUseContextParent20 from './Hooks/UseReducerWithUseContextParent20';
import UseReducerAxios22 from './Hooks/UseReducerAxios22';
import UseCallbackHook23 from './Hooks/UseCallbackHook23';
import UseMemoHook27 from './Hooks/UseMemoHook27';


export let UserContext= React.createContext();

export let UseReducerUserContext=React.createContext();
function App() {
  const initialState=3;
  let reducer=(state,action)=>
  {
    switch(action)
    {
      case 'increment' : return state+3;
      case 'decrement' : return state-3;
      case 'reset' : return initialState;
      default : return state;
    }
  }
  const [count,setCount]= useReducer(reducer,initialState)
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
      {/* <ListRenderingUsingObject10/>
      <MountingLifeCycleMethods12/>
      <UpdatingLifeCycleMethod14/>
      <NormalParentForPureComponnet17/>
      <Refs20/>
      <ParentRefs21/>
      <ForwardingRefs23/>
      <HigherOrderClickCounter26 name="mamatha"/>
      <HigherOrderHoverCounter27 name="mounika"/> */}
      {/* <UserProvider value="Mamatha Y">
        <ContextChild29/>
        
      </UserProvider>
     */}
     


   {/* <UseStatecount1/>
   <UseStateWithPrevState2/>
   <UseStateWithObject3/>
   <UseStateWithArray4/>
   <UseEffect5/> */}
   {/* <UseEffectWithDependancyArray/> */}
   {/* <UseEffectEmptyArrayDependancy7/> */}
   {/* <UseEffectEmptyDependancyMistakes8/> */}
   {/* <UseEffectComponentRemoval9/> */}

   {/* <DataFetchingAxios10/> */}
   <DataFetchingAxiosOnButtonClick11/>
   {/* <UserContext.Provider value="Mamatha">
    <UserContextWithoutHook12/>
   </UserContext.Provider> */}
   <UserContext.Provider value="Mounika">
    <UseContextUsingHook14/>
   </UserContext.Provider>
  
   <UseReducerHook15/>
   <UseReducerWithObjectInitialState16/>
   <UseReducerWithObjectState17/>
   <UseReducerMultipleReducers18/>

   <UseReducerUserContext.Provider value={{ContextCount:count,ContextMethod: setCount}}>

   <UseReducerWithUseContext19/>
   <UseReducerWithUseContextParent20/>

   </UseReducerUserContext.Provider>

   <UseReducerAxios22/>
   <UseCallbackHook23/>

   <UseMemoHook27/>
   
    </div>
  );
}

export default App;
