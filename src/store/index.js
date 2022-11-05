import { configureStore } from "@reduxjs/toolkit";
// bu dosya store'ları configure etmek için

import todo from './todo';

const store = configureStore({
    reducer : {
        todo
    }
})

export default store;