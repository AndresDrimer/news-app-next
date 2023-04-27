"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import moment from 'moment';





function BingSearchNewsApi() {
  const [news, setNews] = useState([]);
  const [userQuery, setUserQuery] = useState("")
  
  //funcion para pintar la pagina al cargarse por primera vez
   async function fetchData() {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news",
      params: {
        mkt: "en-WW",
        setLang: "EN",
        safeSearch: "Off",
        textFormat: "Raw",
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": process.env.RapidAPI,
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    try {
      const {
        data: { value },
      } = await axios.request(options);
      console.log(value);
      setNews(value);
    } catch (error) {
      console.error(error);
    }
  }

//metodod para buscar un query -required
async function handleQuerySubmit(userQuery){
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news/search',
  params: {
    q: userQuery,
    freshness: 'Day',
    textFormat: 'Raw',
    safeSearch: 'Off'
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': process.env.RapidAPI,
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};

try {
	const {
    data: { value },
  } = await axios.request(options);
  console.log(value);
  setNews(value);
  
} catch (error) {
	console.error(error);
}}

  //aqui se llama a la funcion mientras se monta pagina
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <div className=" bg-gray-200">
    <section>
    <form 
    className="flex justify-center py-8"
    onSubmit={handleQuerySubmit(userQuery)}
    >
      <input 
      placeholder="new search"
      value={userQuery}
      onChange={e=> setUserQuery(e.target.value)}
      type= "text"
      className=""
      />
      <button> send </button>

    </form>
    </section>
<section  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-8 text-left gap-8">
        {news.map(
          (it) =>
            it.image && (
              <div key={it.name} className="bg-gray-100 shadow-lg rounded-lg">
                <div className="relative w-full h-[300px]">
                  <a href={it.url} target="_blank">
                    <Image
                      src={it.image.thumbnail.contentUrl}
                      fill
                      alt="article´s image"
                      className="object-cover rounded-xl relative"
                    />
                  </a>
                  <div className=" group absolute bottom-0 p-4 text-white z-[1] bg-black bg-opacity-90 shadow-lg cursor-pointer">
                    <div className="flex">
                      {it.provider[0].image && (<Image
                        src={it.provider[0].image.thumbnail.contentUrl}
                        alt="provider img"
                        width={20}
                        height={20}
                        className="mr-2"
                      />)}
                      <p className="text-xs">
                        {it.provider[0].name} - {it.datePublished.slice(0, 10)}{" "}
                      </p>
                    </div>

                    <h3 className=" text-bold text-xl  ">{it.name}</h3>
                    <p className="hidden group-hover:inline text-sm">{it.description}</p>
                  </div>
                  

               
                </div>
              </div>
            )
        )} </section>
      </div>
     
    </div>
  );
}

export default BingSearchNewsApi;
