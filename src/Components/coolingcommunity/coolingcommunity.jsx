import React from "react";
import "./coolingcommunity.css";
// import coolingData from "../../data/coolingPage.json";

const coolingCommunityData = 
    {
        "coolingdata": {
    "label": "COMMUNITY",
    "title": "IT'S YOUR BUILD. <br/> BACKED BY EXPERTS.",
    "description": "Join an active community of custom cooling designers and enthusiasts bringing truly original designs to their custom PCs. Need advice? Get expert advice from the community or explore our video library for all the tips and tricks you need.",
    "buttonText": "JOIN THE COMMUNITY",
    "image": "/images/cooling/community.avif"
  }
}

const CoolingCommunitySection = () => {
  const data = coolingCommunityData.coolingdata; // ✅ FIX HERE

  return (
    <section className="cooling-community">
      <div className="cooling-community-container">

        {/* LEFT IMAGE */}
        <div className="cooling-community-left">
          <img
            src={data.image}
            alt="Cooling Community"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="cooling-community-right">
          <p className="community-label">
            {data.label}
          </p>

          <h2
            className="community-title"
            dangerouslySetInnerHTML={{
              __html: data.title
            }}
          />

          <p className="community-text">
            {data.description}
          </p>

          <button className="community-btn">
            {data.buttonText}
          </button>
        </div>

      </div>
    </section>
  );
};

export default CoolingCommunitySection;