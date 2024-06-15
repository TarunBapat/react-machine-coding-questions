import Button from "./containers/Button";
import NewsItem from "./containers/NewsItem";
import Loading from "./containers/Loading";
let App = () => (
  <div>
    <Button />
    <Loading />
    <NewsItem />
  </div>
);
export default App;

// https://najm-eddine-zaga.medium.com/react-redux-toolkit-with-redux-saga-a1439075743d#:~:text=Redux%20Thunk%20is%20easy%20to,sequence%20of%20steps%2C%20called%20sagas.
// https://medium.com/@lavitron/make-your-first-call-to-api-using-redux-saga-15aa995df5b6
// https://onecompiler.com/javascript/3ztf56a4b
