import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diritto Immobiliare | Studio Legale Zanchi",
  description:
    "Consulenza in compravendite, locazioni, contratti e controversie immobiliari. Tutela dei tuoi interessi in ambito immobiliare.",
};

export default function DirittoImmobiliarePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Diritto Immobiliare</h1>
      <p className="text-lg mb-4">
        Supportiamo clienti privati e aziende in operazioni di compravendita,
        locazione e gestione di immobili.
      </p>
      <p className="text-lg mb-4">
        Offriamo assistenza nei contenziosi condominiali, contratti di affitto e
        problematiche con agenzie.
      </p>
      <p className="text-lg">
        Un supporto sicuro per proteggere il tuo patrimonio immobiliare.
      </p>
    </div>
  );
}
