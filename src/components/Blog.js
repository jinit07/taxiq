import React from "react";
import "./Blog.css";

function Blog() {
  const blogItems = [
    {
      title: "Understanding GST in India",
      description:
        "A comprehensive guide to Goods and Services Tax (GST) and its implications for businesses.",
      className: "gst",
    },
    {
      title: "Corporate Tax Strategies",
      description:
        "Effective strategies for minimizing corporate tax liabilities.",
      className: "corporate-tax",
    },
    {
      title: "Income Tax Optimization",
      description: "Tips for optimizing personal income tax returns.",
      className: "income-tax",
    },
    {
      title: "Statutory Levies and Compliance",
      description:
        "Overview of statutory levies and compliance requirements in India.",
      className: "statutory-levies",
    },
  ];

  return (
    <div className="blog">
      <h2>Insights & Articles</h2>
      <div className="blog-list">
        {blogItems.map((item, index) => (
          <div key={index} className={`blog-item ${item.className}`}>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
