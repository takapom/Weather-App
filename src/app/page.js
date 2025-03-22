"use client"
import { useState } from "react"
import styles from "./page.module.css"
import NavBar from "./components/NavBar";

export default function WeatherPage(){
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  async function getWeather(){
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();
    
    if (data.weather && data.weather.name){
      setCity(data.weather.name);
    } else {
      setCity("not found");
    }
  
    if (data.weather && data.weather.weather && data.weather.weather[0] && data.weather.weather[0].main) {
      setWeather(data.weather.weather[0].main);
    } else {
      setWeather("not found");
    }
  }

  return(
    <div className={styles.hidden}>
        <NavBar />
      <h2 className={styles.today}>今日の天気予報</h2>
        <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.textInput}
          type="text"
          placeholder="都市名を入力"
          lang="ja"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button className={styles.button} onClick={getWeather}>
          Get weather info
        </button>
      </div>
      <div className={styles.result}>
        <h1 className={styles.city}>場所：{city}</h1>
        <p className={styles.weather}>
            天気：{weather === "Rain" ? "雨だよー" : weather === "Clear" ? "晴れだよー" : weather === "Clouds" ? "曇りだよー" : weather}
        </p>
      </div>
      <p>週間天気！！</p>

    </div>
 </div>

  )
}
