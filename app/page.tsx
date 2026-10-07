"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import CountryCard from "@/components/CountryCard";

type Country = {
  names: {
    official: string;
    common: string;
  };

  capitals?: {
    name: string;
  }[];

  population: number;

  region: string;

  flag: {
    emoji: string;
    url_svg: string;
  };
};

export default function Home() {
  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState("");

  async function searchCountry(countryName: string) {
    try {
      setError("");
      setCountry(null);

      const response = await fetch(
        `/api/pais/${encodeURIComponent(countryName)}`
      );

      if (!response.ok) {
        throw new Error("País não encontrado");
      }

      const data: Country = await response.json();

      setCountry(data);
    } catch {
      setError("País não encontrado. Verifique o nome digitado.");
    }
  }

  return (
    <main className="page">
      <div className="container">
        <header className="home-header">
          <h1>🌎 Explorar o Mundo</h1>

          <p>
            Consulte informações sobre países do mundo.
          </p>
        </header>

        <SearchBar onSearch={searchCountry} />

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        {country && (
          <CountryCard country={country} />
        )}

        {!country && !error && (
          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
              color: "#64748b",
            }}
          >
            <p>
              🔎 Digite o nome de um país para começar sua pesquisa.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}