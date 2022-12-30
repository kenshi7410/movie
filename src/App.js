// import Demo from "demoHook/Demo";
import Header from "components/Header";
import Booking from "features/Booking/Booking";
import MovieDetail from "features/Booking/Detail";
import Home from "features/Booking/Home";
import Login from "features/Login/Login";
import { fetchProfileAction } from "features/Login/redux/action";
import Signup from "features/Login/Signup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useCallback, useState } from "react";
// import chuyển trang cho react
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  // const [count1, setCount1] = useState(0);

  // const testMemo = useCallback(() => {
  //   console.log("hello", count1);
  // }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch async action fetch profile
    dispatch(fetchProfileAction)
  }, []);

  return (
    /* <h1>{count1}</h1>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Increase count 1
      </button> */

    /* <Home />
      <MovieDetail />
      <Booking />
      <Login />
      <Signup /> */

    /* <Demo testMemo={testMemo} /> */

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
