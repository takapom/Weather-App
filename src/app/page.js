"use client"
import { useState } from "react"
import styles from "./page.module.css"
import NavBar from "./components/NavBar";

export default function WeatherPage(){
  // 都市名は検索入力とAPIから取得した名前を上書きする形になります
  const [city, setCity] = useState("");
  // 天気情報はオブジェクトとして管理する
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  async function getWeather(){
    setError(null);
    try {
      const res = await fetch(`/api/weather?city=${city}`);

      if (!res.ok) {
        throw new Error(`HTTPエラー: ${res.status}`);
      }
      
      const data = await res.json();
      // APIから受け取った天気情報が存在するかチェック
      if (data.weather && data.weather.name) {
        setCity(data.weather.name);
      } else {
        setCity("not found");
      }
      
      if (data.weather) {
        setWeather({
          // 天気の状態（Rain, Clear, Clouds など）
          main: data.weather.weather && data.weather.weather[0] ? data.weather.weather[0].main : "not found",
          // 現在の気温、最高気温、最低気温は main オブジェクトから取得
          temp: data.weather.main ? data.weather.main.temp : "not found",
          temp_max: data.weather.main ? data.weather.main.temp_max : "not found",
          temp_min: data.weather.main ? data.weather.main.temp_min : "not found"
        });
      } else {
        setWeather(null);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
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

        { error && <p className={styles.error}>エラー: {error}</p> }

        {/* //JavaScriptの時、&&は左辺がtrueの場合、右辺を返すも使える */}
        { weather && (
          <div className={styles.result}>
            <h1 className={styles.city}>場所：{city}</h1>
            <p className={styles.weather}>
              天気：{weather.main === "Rain" ? "雨だよー" : weather.main === "Clear" ? "晴れだよー" : weather.main === "Clouds" ? "曇りだよー" : weather.main}
            </p>
            <p className={styles.temperature}>現在の気温：{weather.temp}℃</p>
            <p className={styles.temperature}>最高気温：{weather.temp_max}℃</p>
            <p className={styles.temperature}>最低気温：{weather.temp_min}℃</p>
          </div>
        )}
      </div>
    </div>
  )
}
