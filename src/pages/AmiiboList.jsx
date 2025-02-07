import { useEffect, useState } from "react";
import "./AmiiboList.css"; // Import component-specific styles

const AmiiboList = () => {
  const [amiibos, setAmiibos] = useState([]);

  useEffect(() => {
    fetch("https://www.amiiboapi.com/api/amiibo/")
      .then((response) => response.json())
      .then((data) => setAmiibos(data.amiibo));
  }, []);

  return (
    <div>
      <h2>Amiibo Collection</h2>
      <div className="amiibo-grid">
        {amiibos.slice(0, 10).map((amiibo) => (
          <div key={amiibo.tail} className="amiibo-card">
            <img src={amiibo.image} alt={amiibo.name} />
            <p>{amiibo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmiiboList;