import {defineStore} from "pinia";
import products from "@/data/products.json"
import axios from "axios";

export const useProductStore = defineStore("ProductStore",{
  state : () =>{
    const obj = {
      name : "Valisher",
      job : "Businesman"
    }
    const productApi = []
    return{
      obj,products,productApi
    }
  },

  actions : {
  async  getData(){
      const data = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
      this.productApi = data.data
    }
  }

})