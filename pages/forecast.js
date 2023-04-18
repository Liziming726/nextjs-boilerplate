import React, { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Cd from "@/components/Cd";
import Footer from "@/components/Footer";
import axios from "axios";
import FourSelector from "@/components/FourSelector";
const inter = Inter({ subsets: ["latin"] });

export default function Forcast() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [text, setText] = useState("");
  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");
  const [wind, setWind] = useState("");
  const [low2, setLow2] = useState("");
  const [high2, setHigh2] = useState("");
  const [wind2, setWind2] = useState("");
  const [low3, setLow3] = useState("");
  const [high3, setHigh3] = useState("");
  const [wind3, setWind3] = useState("");

  function handleWeatherChange(
    newCity,
    newText,
    newLow,
    newHigh,
    newWind,
    newLow2,
    newHigh2,
    newWind2,
    newLow3,
    newHigh3,
    newWind3
  ) {
    // setCity(newCity);
    setText(newText);
    setLow(newLow);
    setHigh(newHigh);
    setWind(newWind);
    setLow2(newLow2);
    setHigh2(newHigh2);
    setWind2(newWind2);
    setLow3(newLow3);
    setHigh3(newHigh3);
    setWind3(newWind3);
    console.log(
      newCity,
      newText,
      newLow,
      newHigh,
      newWind,
      newLow2,
      newHigh2,
      newWind2,
      newLow3,
      newHigh3,
      newWind3
    );
  }
  return (
    <>
      <Head>
        <title>Weather Forecast!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Forecast&nbsp;
            <code className={styles.code}>When to Run!</code>
          </p>
          <div>
            <FourSelector onWeatherChange={handleWeatherChange} />
          </div>
        </div>

        <div className={styles.center}>
          <h1 className={styles.title}>Live in {text ? text + "!" : "😉?"}</h1>
        </div>
        <div className={styles.newgrid}>
          <div className={styles.newcard}>
            <h3>Today</h3>
            <p>
              气温:{low ? low + "-" : " "}
              {high ? high : " "}
              <br />
              {wind}
            </p>
          </div>
          <div className={styles.newcard}>
            <h3>Tomorrow</h3>
            <p>
              气温:{low2 ? low2 + "-" : " "}
              {high2 ? high2 : " "}
              <br />
              {wind2}
            </p>
          </div>
          <div className={styles.newcard}>
            <h3>Acquired</h3>
            <p>
              气温:{low3 ? low3 + "-" : " "}
              {high3 ? high3 : " "}
              <br />
              {wind3}
            </p>
          </div>
        </div>
        <Cd />
        <Footer/>

      </main>
    </>
  );
}
