import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diritto Contrattuale | Studio Legale Zanchi",
  description:
    "Consulenza legale su contratti commerciali, scrittura, revisione e negoziazione di accordi su misura per privati e aziende.",
};

export default function DirittoContrattualePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Diritto Contrattuale</h1>
      <p className="text-lg mb-4">
        Offriamo supporto nella redazione, revisione e negoziazione di contratti
        di ogni tipo: commerciali, immobiliari, di collaborazione, e altro
        ancora.
      </p>
      <p className="text-lg mb-4">
        La chiarezza contrattuale è fondamentale per evitare contenziosi e
        tutelare i tuoi interessi.
      </p>
      <p className="text-lg">
        Contattaci per una consulenza contrattuale personalizzata.
      </p>
    </div>
  );
}
