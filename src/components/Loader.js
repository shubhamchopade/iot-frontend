import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../public/assets/loader.json";

export default function Loader() {
    return (
        <div style={{ width: "30rem", "margin": "0 auto" }}>
            <Lottie animationData={loadingAnimation} loop={true} />
        </div>
    );
}