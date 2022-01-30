import { useEffect } from "react";
import "./App.css";
import Index from "./Views/Index/Index";

//redux
import { connect, Provider } from "react-redux";
import store from "./store/store.js";
import { loadGifs } from "./store/actions/gifsAction";
import axios from "axios";

// axios
//axios base url
const baseURL = "//api.giphy.com";
axios.defaults.baseURL = baseURL;

function App({ gifsData }) {
  //load user on page load
  useEffect(() => {
    store.dispatch(loadGifs());

    let interval = 0;
    if (gifsData.autoFetch) {
      interval = setInterval(function () {
        store.dispatch(loadGifs());
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [gifsData.autoFetch]);
  return <Index />;
}

const mapStateToProps = (state) => {
  return {
    gifsData: state.gifs,
  };
};

export default connect(mapStateToProps)(App);
