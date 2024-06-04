import { configureStore } from "redux";
import { PostsReducer } from "./reducers/PostsReducer";

const store = configureStore(PostsReducer);

export default store;
