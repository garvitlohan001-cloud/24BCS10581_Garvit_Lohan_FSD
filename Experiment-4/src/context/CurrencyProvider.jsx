import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

const EXCHANGE_RATES = {
    USD: { rate: 1.0, symbol: "$" },
    EUR: { rate: 0.85, symbol: "€" },
    GBP: { rate: 0.75, symbol: "£" },
    JPY: { rate: 110.0, symbol: "¥" }
};

const CurrencyProvider = ({children}) => {
    const [currencyType, setCurrencyType] = useState("USD");

    const changeCurrency = (currencyTo, amount) => {
        if(Object.keys(EXCHANGE_RATES).includes(currencyTo)) {
            const changedAmount = amount * EXCHANGE_RATES[currencyTo].rate;
            setCurrencyType(currencyTo);
            return changedAmount;
        } else {
            setCurrencyType("CAD");
            return amount;
        }
    }

    const formatPrice = (amount) => {
        if(currencyType === "CAD") {
            return `${amount.toFixed(2)} CAD`;
        } else {
            return `${EXCHANGE_RATES[currencyType].symbol}${amount.toFixed(2)}`;
        }
    }

    const value = {
        currencyType,
        changeCurrency,
        formatPrice
    }

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyProvider;

export const useCurrency = () => useContext(CurrencyContext);