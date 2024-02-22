import { useEffect, useState } from "react";

export const useCoursePrice = () => {
  const initial = 600;
  const discount = 100;
  const currency = "\u20AC";

  const priceType = {
    paynow: "pay_now",
    monthly: "pay_monthly",
  }
  const [price, setPrice] = useState({
    initial,
    discount: 0,
    total: initial,
  });


  const [isPayNow, setIsPayNow] = useState(false);

  const calcDiscountTotal = (initial, discount) => {
    const total = initial - discount;
    return { initial, discount, total };
  };

  const togglePayment = (item) => {
    if(item ==priceType.paynow ){
      if(isPayNow) return;
      const price = calcDiscountTotal(initial, discount); // add discount
      setPrice(price);
      setIsPayNow(true)
      return;
    }

    // It is pay_monthly
    if(!isPayNow) return; // if paynow is alrady false then return
    setPrice({ ...price, total: initial, discount: 0 });
    setIsPayNow(false)
  };

  // useEffect(() => {
  //   console.log("price ", price);
  // }, [price]);

  useEffect(() => {
    togglePayment(priceType.paynow);
  }, []);

  return {
    togglePayment,
    currency,
    price,
    isPayNow,
    priceType
  };
};
