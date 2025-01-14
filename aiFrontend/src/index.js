import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./AuthContext/AuthContext";

function Root() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust time based on your hosting service delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <h1>
          This website is hosted on a free plan. Kindly wait sometime for
          website to load.
        </h1>
      </div>
    );
  }

  return <App />;
}
//Stripe configuration
const stripePromise = loadStripe(
  "pk_test_51QcKDiC0r8A6M19asUrBtyH1DKvr0AQxUyGdHgEnieedTYL6fWm4oB9r7G03SMFsQg3VlR0vJNPruImTQIl7u9S100k0QCxvxw"
);

const options = {
  mode: "payment",
  currency: "usd",
  amount: 1099,
};
const root = ReactDOM.createRoot(document.getElementById("root"));

//React query client
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Elements stripe={stripePromise} options={options}>
          <Root />
        </Elements>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
