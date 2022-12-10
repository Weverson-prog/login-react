import { useContext } from "react"
import { AuthContext } from ".";
import { Root } from "./types";
import { LoginRequest, setUserLocalStorage, getUserLocalStorage } from './util';

const token = JSON.stringify(Object.values(getUserLocalStorage())[0])
export async function getCard() {
  
    const response = await fetch('http://conciliador.sandbox.pratico.tech/dashboard/card?start_date=2022-10-01&final_date=2022-10-31', {
      method: 'get',
      headers: {
        'token': token,
        'Content-Type': 'application/json'
      }})
    
      const dados : Root = await response.json();
      
      
        //console.log(dados.card[0].sale_amount)
        console.log(dados)
        
      return  dados ;

      
  
    }