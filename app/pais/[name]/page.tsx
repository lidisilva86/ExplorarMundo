type PageProps = {
  params: Promise<{
    name: string;
  }>;
};

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

  subregion?: string;

  flag: {
    emoji: string;
    url_svg: string;
  };

  languages?: {
    name: string;
    native_name?: string;
  }[];

  currencies?: {
    code: string;
    name: string;
    symbol?: string;
  }[];

  timezones: string[];
};

export default async function CountryPage({
  params,
}: PageProps) {
  const { name } = await params;

  const countryName = decodeURIComponent(name);

  const response = await fetch(
    `http://localhost:3000/api/pais/${encodeURIComponent(countryName)}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return (
      <main className="page">
        <div className="container">
          <h1>País não encontrado</h1>

          <p>
            Não foi possível encontrar informações sobre{" "}
            <strong>{countryName}</strong>.
          </p>

          <a href="/" className="back-link">
            ← Voltar para a página inicial
          </a>
        </div>
      </main>
    );
  }

  const country: Country = await response.json();

  return (
    <main className="page">
      <div className="container">
        <a href="/" className="back-link">
          ← Voltar para a página inicial
        </a>

        <section className="details-card">
          <div className="details-header">
            <div>
              <span className="flag-emoji">
                {country.flag.emoji}
              </span>

              <h1>{country.names.official}</h1>

              <p className="common-name">
                {country.names.common}
              </p>
            </div>

            <img
              src={country.flag.url_svg}
              alt={`Bandeira de ${country.names.official}`}
              className="country-flag"
            />
          </div>

          <div className="details-grid">
            <div className="info-item">
              <span>🏛️</span>
              <div>
                <strong>Capital</strong>
                <p>
                  {country.capitals?.[0]?.name ??
                    "Não informado"}
                </p>
              </div>
            </div>

            <div className="info-item">
              <span>👥</span>
              <div>
                <strong>População</strong>
                <p>
                  {country.population.toLocaleString(
                    "pt-BR"
                  )}
                </p>
              </div>
            </div>

            <div className="info-item">
              <span>🌎</span>
              <div>
                <strong>Região</strong>
                <p>{country.region}</p>
              </div>
            </div>

            <div className="info-item">
              <span>📍</span>
              <div>
                <strong>Sub-região</strong>
                <p>
                  {country.subregion ??
                    "Não informado"}
                </p>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h2>🗣️ Idiomas</h2>

            {country.languages &&
            country.languages.length > 0 ? (
              <ul className="details-list">
                {country.languages.map(
                  (language) => (
                    <li key={language.name}>
                      {language.name}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p>Não informado</p>
            )}
          </div>

          <div className="details-section">
            <h2>💰 Moedas</h2>

            {country.currencies &&
            country.currencies.length > 0 ? (
              <ul className="details-list">
                {country.currencies.map(
                  (currency) => (
                    <li key={currency.code}>
                      <strong>
                        {currency.name}
                      </strong>{" "}
                      ({currency.code})
                      {currency.symbol
                        ? ` — ${currency.symbol}`
                        : ""}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p>Não informado</p>
            )}
          </div>

          <div className="details-section">
            <h2>🕐 Fusos horários</h2>

            {country.timezones &&
            country.timezones.length > 0 ? (
              <ul className="details-list">
                {country.timezones.map(
                  (timezone) => (
                    <li key={timezone}>
                      {timezone}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p>Não informado</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}