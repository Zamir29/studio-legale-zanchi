import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsabilità Civile | Studio Legale Zanchi",
  description:
    "Assistenza in casi di danni derivanti da inadempimenti, incidenti o altri comportamenti illeciti.",
};

export default function ResponsabilitaCivilePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Responsabilità Civile</h1>
      <p className="text-lg mb-4">
        Forniamo assistenza per ottenere risarcimenti in caso di danni causati
        da terzi, in ambito personale o professionale.
      </p>
      <p className="text-lg mb-4">
        Analizziamo il caso con attenzione e agiamo in difesa dei tuoi diritti
        con tempestività ed efficacia.
      </p>
      <p className="text-lg">
        Contattaci per una valutazione del tuo caso senza impegno.
      </p>
    </div>
  );
}
