export default function SobrePage() {
  return (
    <main className="page">
      <div className="container">
        <a href="/" className="back-link">
          ← Voltar para a página inicial
        </a>

        <section className="about-card">
          <h1>Sobre o WorldExplorer</h1>

          <div className="student-info">
            <p>
              <strong>Nome do aluno:</strong> Lidiane Aline
            </p>

            <p>
              <strong>Matrícula:</strong> COLOQUE_SUA_MATRÍCULA
            </p>

            <p>
              <strong>Curso:</strong>{" "}
              Tecnologia em Análise e Desenvolvimento de Sistemas
            </p>
          </div>

          <div className="project-description">
            <h2>Sobre o projeto</h2>

            <p>
              O WorldExplorer é um portal desenvolvido com
              Next.js para consulta de informações sobre países,
              utilizando uma API de dados internacionais.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}