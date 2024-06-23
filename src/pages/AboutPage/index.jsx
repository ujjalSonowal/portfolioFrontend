import React, { useState, useEffect } from "react";
import axios from "axios";
import { About } from "../../components/About/index";

export function AboutPage() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const aboutResponse = await axios.get(
          "https://portfolioserver-7.onrender.com/about"
        );
        setAbout(aboutResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      <div>
        {about.map((about) => (
          <About key={about._id} about={about} />
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
