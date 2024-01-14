"use client"

import { scrapeAndStoreProduct } from '@/lib/actions';
import React,{useState,FormEvent} from 'react'

const isValidAmazonProductUrl=(url:string)=>{
 try{
  const parsedURL=new URL(url);
  const hostname=parsedURL.hostname;
  if(hostname.includes('amazon.com')||
  hostname.includes('amazon.')||
  hostname.endsWith('amazon')
  ){
    return true;
  }
 }catch(err){
return false;
 }
 return false;
}


const Searchbar = () => {

const [searchPrompt,setSearchPromt]=useState('');
const [isLoading,setIsLoading]=useState(false);
const handleSubmit=async (event: FormEvent<HTMLFormElement>)=>{
       event.preventDefault();
       const isValidLink= isValidAmazonProductUrl(searchPrompt);
      
    if(!isValidLink){
      return alert('please provide a valid amazon link')
    }

try{
    setIsLoading(true);
      
      //scrapping of product
      const product=await scrapeAndStoreProduct(searchPrompt)
      
}catch(error){
     console.log(error);
}finally{
  
  setIsLoading(false);
}



}


  return (
    <form
    className="flex flex-wrap gap-4 mt-12"
    onSubmit={handleSubmit}
    >
      <input
      type="text"
      value={searchPrompt}
      onChange={(e)=>setSearchPromt(e.target.value)}
      placeholder="Enter product link"
      className="search-input" 
      />
          <button type="submit" 
          className="searchbar-btn"
          disabled={searchPrompt==''}
          >
            {isLoading?'search...':'search'}
          </button>
    </form>
  )
}

export default Searchbar