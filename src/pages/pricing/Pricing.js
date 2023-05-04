import React from "react";
import styles from "./Pricing.module.css";
import { Link } from "react-router-dom";
const PricingSection = () => {
  const pricingData = [
    {
      type: "Basic",
      price: 29.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      type: "Pro",
      price: 49.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      type: "Premium",
      price: 99.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className={styles.container_pricing}>
      {pricingData.map((pricing) => (
        <div className={styles.pricing_box} key={pricing.type}>
          <div className={styles.inner1_pricing}>
            <h3>{pricing.type}</h3>
            <div className={styles.price}>${pricing.price}/mo</div>
            <p>{pricing.description}</p>
            <button className={styles.button_pricing}>
              <Link to="/signin">Select Plan</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingSection;
