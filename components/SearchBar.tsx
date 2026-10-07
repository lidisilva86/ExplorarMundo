"use client";

import { FormEvent, useState } from "react";

type SearchBarProps = {
  onSearch: (country: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [country, setCountry] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const countryName = country.trim();

    if (!countryName) {
      return;
    }

    onSearch(countryName);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome de um país"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      />

      <button type="submit">Buscar</button>
    </form>
  );
}