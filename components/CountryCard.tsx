import Link from "next/link";

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

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <div className="country-card">
      <img
        src={country.flag.url_svg}
        alt={`Bandeira de ${country.names.official}`}
      />

      <div className="flag-emoji">{country.flag.emoji}</div>

      <h2>{country.names.official}</h2>

      <p>
        <strong>Capital:</strong>{" "}
        {country.capitals?.[0]?.name ?? "Não informado"}
      </p>

      <p>
        <strong>População:</strong>{" "}
        {country.population.toLocaleString("pt-BR")}
      </p>

      <p>
        <strong>Região:</strong> {country.region}
      </p>

      <Link
        className="details-link"
        href={`/pais/${encodeURIComponent(country.names.common)}`}
      >
        Ver detalhes
      </Link>
    </div>
  );
}