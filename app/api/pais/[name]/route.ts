import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  try {
    const countryName = decodeURIComponent(params.name);

    const apiUrl = process.env.RESTCOUNTRIES_API_URL;
    const apiKey = process.env.RESTCOUNTRIES_API_KEY;

    if (!apiUrl || !apiKey) {
      return NextResponse.json(
        { error: "Configuração da API não encontrada." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${apiUrl}/names.common/${encodeURIComponent(countryName)}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "País não encontrado." },
        { status: response.status }
      );
    }

    const country = data?.data?.objects?.[0];

    if (!country) {
      return NextResponse.json(
        { error: "País não encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json(country);
  } catch {
    return NextResponse.json(
      { error: "Erro ao consultar a API." },
      { status: 500 }
    );
  }
}