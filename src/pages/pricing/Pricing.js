import React, { useState } from "react";
import styles from "./Pricing.module.css";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { issub } from "../recoilAtom/Atom";
const PricingSection = () => {

  const [isSub,setIsSub]=useRecoilState(issub)
  const [pricingData, setPricingData] =useState( [
    {
      type: "Basic",
      price: 29.99,
      isSub:false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      type: "Pro",
      price: 49.99,
      isSub:false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      type: "Premium",
      price: 99.99,
      isSub:false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]
  )
  function handlesub(pricing){
      setIsSub(true)
      pricing.isSub=true
      console.log(pricing)
      setPricingData([...pricingData])

  }

  return (
    <div className={styles.container_pricing}>
      {pricingData.map((pricing) => (
        <div className={styles.pricing_box} key={pricing.type}>
          <div className={styles.inner1_pricing}>
            <h3>{pricing.type}</h3>
            <div className={styles.price}>${pricing.price}/mo</div>
            <p>{pricing.description}</p>
            <button className={styles.button_pricing} onClick={()=> handlesub(pricing)}>
             {!pricing.isSub ? "select plan" : "subscribed"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingSection;
