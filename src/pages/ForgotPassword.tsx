import { useState } from "react";
import Back from "../components/shared/Back.tsx";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async () => {
        if (!email.trim()) {
            setMessage("Please enter a valid email.");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("https://your-email-api.com/reset-password", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email}),
            });

            if (response.ok) {
                setMessage("A reset link has been sent to your email.");
            } else {
                setMessage("Failed to send reset email. Try again.");
            }
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#f8f8f8] px-6">

            <Back cn="absolute top-20 left-150"/>


            <h1 className="text-3xl font-bold text-gray-900">Forget Password</h1>
            <p className="text-gray-600 text-sm mt-2 text-center">
                Select which contact details should we use to reset your password.
            </p>


            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-4 w-full max-w-md p-3 border rounded-lg outline-none"
            />


            {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}


            <button
                onClick={handleResetPassword}
                className="mt-6 w-full max-w-md p-3 bg-black text-white rounded-lg text-center"
                disabled={loading}
            >
                {loading ? "Sending..." : "Next"}
            </button>
        </div>
    );
};

export default ForgotPassword;
