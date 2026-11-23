import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubscribed(true);
    };

    const handleReset = () => {
        setName("");
        setEmail("");
        setIsSubscribed(false);
    };

    const styles = {
        container: {
            maxWidth: "950px",
            margin: "50px auto",
            padding: "25px",
            fontFamily: "Arial, sans-serif",
            color: "#212529",
        },
        formBox: {
            border: "1px solid #dee2e6",
            borderRadius: "8px",
            padding: "25px",
            marginBottom: "130px",
        },
        heading: {
            fontSize: "32px",
            color: "#212529",
            marginTop: "0",
            marginBottom: "15px",
        },
        input: {
            display: "block",
            width: "100%",
            boxSizing: "border-box",
            padding: "12px 15px",
            marginBottom: "20px",
            border: "1px solid #ced4da",
            borderRadius: "7px",
            fontSize: "16px",
            outline: "none",
        },
        button: {
            backgroundColor: "#0d6efd",
            color: "white",
            padding: "12px 18px",
            border: "none",
            borderRadius: "7px",
            fontSize: "16px",
            cursor: "pointer",
        },
        success: {
            backgroundColor: "#d1e7dd",
            color: "#0f5132",
            padding: "20px",
            borderRadius: "7px",
            marginTop: "20px",
            fontSize: "16px",
        },
    };

    return (
        <div style={styles.container}>
            {!isSubscribed ? (
                <form style={styles.formBox} onSubmit={handleSubmit}>
                    <h1 style={styles.heading}>Newsletter Subscription</h1>

                    <input style={styles.input} type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />

                    <input style={styles.input} type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <button style={styles.button} type="submit">
                        Subscribe
                    </button>
                </form>
            ) : (
                <div>
                    <h1 style={styles.heading}>Newsletter Subscription</h1>

                    <div style={styles.success}>Please check your email ({email}) for confirmation</div>
                </div>
            )}
        </div>
    );
}

export default App;
