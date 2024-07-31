import React from "react";
import "./Features.css";

function Features() {
  return (
    <div className="features">
      <h2>Why Choose TaxIQ?</h2>
      <ul>
        <li className="img_1">
          <h3>Comprehensive Tax Guidance</h3>
          <p>
            Provides insights into various tax laws and compliance requirements.
          </p>
        </li>
        <li className="img_2">
          <h3>Cost-Effective</h3>
          <p>
            Affordable initial solution compared to traditional tax
            consultation.
          </p>
        </li>
        <li className="img_3">
          <h3>AI-Powered</h3>
          <p>Uses AI to deliver personalized tax advice quickly.</p>
        </li>
      </ul>
    </div>
  );
}

export default Features;
