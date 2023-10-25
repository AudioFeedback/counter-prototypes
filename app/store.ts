import { configureStore } from "@reduxjs/toolkit";
// Import your reducers
import Counter from "./Slices";
const store = configureStore({
    reducer: {
        Counter,
        // Add more reducers as needed
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
