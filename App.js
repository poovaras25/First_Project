//import logo from './logo.svg';
//import './App.css';

//import Sample_FC from './components/Sample_FC';
//import ClassComponents from './components/ClassComponents';
//import ControlledForm from './components/ControlledForm';
//import UncontrolledForm from './components/UncontrolledForm';
// import RouterExample from './components/RouterExample';
// import ComponentLifeCycle from './components/ComponentLifeCycle';
// import HooksExample from './components/HooksExample'
// import CssExample from './components/CssExample';

import { Provider } from 'react-redux'
import UserStore from './redux/UserStore';
// import ReduxExample from './redux/ReduxExample';
import Menu from './redux/Menu';

function App(){

  // const obj ={
        
  //       loggedUserName:"Ramesh",
  //       age:"23",
  //       address:{
  //       city:"Chennai"
  //       },
  //       contactNo:"9876543210",
  //       email:"ramesh@gmail.com"
  // }

  return(
    <>
   {/* <ClassComponents userObject={obj}></ClassComponents> */}
   {/*<Sample_FC loggedUserName="Ramesh" age="23"/> */}
   {/* <ControlledForm/> */}
   {/* <UncontrolledForm/>  */}
   {/* <ComponentLifeCycle/> */}
   {/* <RouterExample/> */}
  {/* <HooksExample/>  */}
  {/* <CssExample/> */}

    <Provider store={UserStore}>
        {/* <ReduxExample/> */}
        <Menu/> 
        </Provider>
        
  
    </>
   );
}

export default App