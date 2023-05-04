import React, { useState, useEffect } from "react";
import styles from "./Pricing.module.css";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLogin } from "../recoilAtom/Atom";

const PricingSection = () => {
  const [islogin, setlogin] = useRecoilState(isLogin);
  const [pricingData, setPricingData] = useState([
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
  ]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [email, setEmail] = useState(null);

  // Load selected plan from local storage on component mount
  useEffect(() => {
    const storedSelectedPlan = JSON.parse(localStorage.getItem(`selectedPlan_${email}`));
    if (storedSelectedPlan) {
      setSelectedPlan(storedSelectedPlan);
    }
  }, [email]);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    setEmail(storedUserId);
  }, []);

  function handleSelectPlan(pricing) {
    setSelectedPlan(pricing);
    localStorage.setItem(`selectedPlan_${email}`, JSON.stringify(pricing));
  }

  function handleCancelSubscription() {
    setSelectedPlan(null);
    localStorage.removeItem(`selectedPlan_${email}`);
  }

  // Get the stored plan for the current user
  useEffect(() => {
    const storedSelectedPlan = JSON.parse(localStorage.getItem(`selectedPlan_${email}`));
    if (storedSelectedPlan) {
      setSelectedPlan(storedSelectedPlan);
    } else {
      setSelectedPlan(null);
    }
  }, [email]);

  return (
    <div className={styles.container_pricing}>
      {pricingData.map((pricing) => (
        <div className={styles.pricing_box} key={pricing.type}>
          <div className={styles.inner1_pricing}>
            <h3>{pricing.type}</h3>
            <div className={styles.price}>${pricing.price}/mo</div>
            <p>{pricing.description}</p>
            {islogin && ( // Only show select/cancel button when user is logged in
              <button
                className={styles.button_pricing}
                onClick={() => handleSelectPlan(pricing)}
                disabled={selectedPlan && selectedPlan.type === pricing.type} // Disable button if plan is already selected
              >
                {selectedPlan && selectedPlan.type === pricing.type ? "selected" : "select plan"}
              </button>
            )}
          </div>
        </div>
      ))}
     
    </div>
  );
};

export default PricingSection;
