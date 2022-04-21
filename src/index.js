import { rerenderEntireTree } from "./render";
import state from "./data/state";

const servicesFromStorage = localStorage.getItem("services");
if (servicesFromStorage != null) {
    state.services = JSON.parse(servicesFromStorage);
    console.log(state.services);
}

rerenderEntireTree(state);



