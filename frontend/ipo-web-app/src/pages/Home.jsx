import { useEffect, useState } from "react";
import { getIPOs } from "../services/mockApi";

export default function Home() {
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    getIPOs().then(setIpos);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">IPO Listings</h2>
      <div className="space-y-4">
        {ipos.map((ipo) => (
          <div key={ipo.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{ipo.companyName}</h3>
            <p>Price Band: {ipo.priceBand}</p>
            <p>Status: {ipo.status}</p>
            <a className="text-blue-600 underline text-sm" href={ipo.rhp} target="_blank" rel="noreferrer">Download RHP</a>
          </div>
        ))}
      </div>
    </div>
  );
}
