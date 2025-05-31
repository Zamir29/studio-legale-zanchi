import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recupero Crediti | Studio Legale Zanchi",
  description:
    "Strategie legali efficaci per il recupero di crediti insoluti. Proteggiamo i tuoi interessi economici.",
};

export default function RecuperoCreditiPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Recupero Crediti</h1>
      <p className="text-lg mb-4">
        Aiutiamo privati e aziende a recuperare somme dovute in modo rapido,
        legale ed efficace.
      </p>
      <p className="text-lg mb-4">
        Gestiamo ogni fase: dalla diffida fino alla fase giudiziale o esecutiva,
        se necessaria.
      </p>
      <p className="text-lg">
        Contattaci per valutare una strategia su misura per il tuo caso.
      </p>
    </div>
  );
}
