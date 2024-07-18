// import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { UserProvider } from "./component/context/UserContext";
// import DataFetchFromBtnClick from "./component/useEffect/DataFetchFromBtnClick";
// import DataFetching from "./component/useEffect/DataFetching";
// import IncorrectDepnd from "./component/useEffect/IncorrectDepnd";
import CompC from "./component/context/CompC";

import { useEffect, useState } from "react";
import { ThemeProvider } from "./component/context/ThemeContext";
// import FetchData from "./component/useEffect/FetchData";
// import MouseContainer from "./component/useEffect/MouseContainer";
// import FromObj from "./component/useState/FromObj";
// import LisrArr from "./component/useState/LisrArr";
// import LisrArr from "./component/useEffect/";
// import CounterEffect from "./component/useEffect/CounterEffect";
// import PostForm from "./component/axios/PostForm";
// import PostList from "./component/axios/PostList";
// import Counter from "./component/useState/Counter";
// import ClickCounter from "./component/render-props/ClickCounter";
// import HoverCounter from "./component/render-props/HoverCounter";
// import Counter  from "./component/render-props/Counter.js";
// import PortalComp from "./component/portals/PortalComp";
// import ErrorFallback from "./component/errorBoundary/ErrorFallback";
// import MyComp from "./component/errorBoundary/MyComp";
// import ClickCounter from "./component/HOC/ClickCounter";
// import HoverCounter from "./component/HOC/HoverCounter";
// import Login from './component/conditonal-rendering/Login';
// import ControlledForm from './component/controlled-comp/ControlledForm';
// import ControlledInput from './component/controlled-comp/ControlledInput';
// import ControlledSelect from './component/controlled-comp/ControlledSelect';
// import ControlledTextArea from './component/controlled-comp/ControlledTextArea';
// import NameList from './component/list-rendering/NameList';
// import ParentComp from './component/optimization/ParentComp';
// import PropsParent from './component/props/PropsParent';
// import Header from './component/styles/Header';

function App() {
  const [username, setUsername] = useState("sarfraj");
  const [theme, setTheme] = useState({ background: "", color: "" });
  const randomNum = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase()}`;
  console.log(randomNum());
  const isLighterColor = (color) => {
    // convrt hex to RGB
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(1, 3), 16);
    const b = parseInt(color.slice(1, 3), 16);
    // calculate brigntess (0.299*R + 0.587*G + 0.114*B)
    const brightness = (0.99 * r + 0.587 * g + 0.114 * b);
    // Return true if color is light,ohterwise false
    return brightness > 186
  };
  const generateTheme= ()=>{
    const bgColor = randomNum();
    const textColor = isLighterColor(bgColor) ? '#000000' : "#ffffff";
    setTheme({background:bgColor,color:textColor})
  }
  useEffect(()=>{
    generateTheme()
  },[])
  return (
    <div className="App">
      {/* <PropsParent></PropsParent>
      <Login></Login>
      <NameList></NameList>
      <Header></Header>
      <ControlledInput></ControlledInput>
      <ControlledTextArea></ControlledTextArea>
      <ControlledSelect></ControlledSelect>
      <ControlledForm></ControlledForm>
      <ParentComp></ParentComp> */}
      {/* <PortalComp></PortalComp> */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{
        // Reset the state of your app so the error doesn't happen again
      }}>
        <MyComp></MyComp> 
      </ErrorBoundary> */}
      {/* <ClickCounter></ClickCounter> */}
      {/* <HoverCounter></HoverCounter> */}
      {/* take as a parameter */}

      {/*  <Counter render={(count,incrementCount)=>(<ClickCounter count={count} incrementCount={incrementCount}></ClickCounter>
      )}></Counter> */}

      {/* <Counter render={(count,incrementCount)=>(<HoverCounter count={count} incrementCount={incrementCount}>

      </HoverCounter>
      )}>
      </Counter> */}
      {/* <PostList></PostList> */}
      {/* <PostForm></PostForm> */}
      {/* <Counter></Counter> */}
      {/* <FromObj></FromObj> */}
      {/* <LisrArr></LisrArr> */}

      {/* <CounterEffect> */}
      {/* <FetchData></FetchData> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <IncorrectDepnd></IncorrectDepnd> */}
      {/* <DataFetching></DataFetching> */}
      {/* <DataFetchFromBtnClick></DataFetchFromBtnClick> */}
      <ThemeProvider value={theme}>
        <UserProvider value={username}>
          <CompC></CompC>
          <button
            onClick={generateTheme}
          >
            changes theme
          </button>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
