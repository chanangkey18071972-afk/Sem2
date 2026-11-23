import React, { useState } from "react";

// Test data - Do not modify
const items = [
    { id: 1, name: "T-shirt", price: 20, onSale: true },
    { id: 2, name: "Jeans", price: 50, onSale: false }, 
    { id: 3, name: "Socks", price: 5, onSale: true },
    { id: 4, name: "Hat", price: 15, onSale: false },
    { id: 5, name: "Shoes", price: 65, onSale: true },
];

function App() {
    const [showSaleOnly, setShowSaleOnly] = useState(false);

    const filteredItems = showSaleOnly ? items.filter((item) => item.onSale) : items;

    const styles = {
        container: {
            maxWidth: "1024px",
            width: "100%", 
            margin: "40px auto",
            padding: "30px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            fontFamily: "Arial, sans-serif",
            boxSizing: "border-box", 
        },
        heading: {
            fontSize: "32px",
            color: "#1e293b",
            marginBottom: "30px",
        },
        button: {
            backgroundColor: "#2196f3",
            color: "white",
            border: "none",
            padding: "14px 25px",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "25px",
        },
        item: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            border: "1px solid #dddddd",
            borderRadius: "8px",
            marginBottom: "15px",
            fontSize: "18px",
        },
        saleBadge: {
            backgroundColor: "#dc3545",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "14px",
            marginLeft: "10px",
        },
        price: {
            fontWeight: "bold",
            color: "#333333",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Shopping Cart</h1>

            <button style={styles.button} onClick={() => setShowSaleOnly(!showSaleOnly)}>
                {showSaleOnly ? "Show All Items" : "Show Sale Items Only"}
            </button>

            <div>
                {filteredItems.map((item) => (
                    <div key={item.id} style={styles.item}>
                        <div>
                            {item.name}

                            {item.onSale && <span style={styles.saleBadge}>On Sale!</span>}
                        </div>

                        <span style={styles.price}>${item.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
