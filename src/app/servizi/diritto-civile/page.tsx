import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diritto Civile | Studio Legale Zanchi",
  description:
    "Assistenza legale in ambito civile per controversie tra privati, tutela dei diritti, risarcimenti e soluzioni su misura",
};

export default function DirittoCivilePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Diritto Civile</h1>
      <p className="text-lg mb-4">
        Lo Studio Legale Zanchi offre consulenza e assistenza legale in tutte le
        controversie civili. Accompagniamo i nostri clienti nella tutela dei
        propri diritti in materia di obbligazioni, proprietà, responsabilità
        extracontrattuale e molto altro.
      </p>
      <p className="text-lg mb-4">
        Grazie a un approccio personalizzato, valutiamo ogni situazione con
        attenzione per offrire soluzioni efficaci, rapide e in linea con gli
        obiettivi del cliente.
      </p>
      <p className="text-lg">
        Contattaci per una prima consulenza gratuita e scopri come possiamo
        supportarti.
      </p>
    </div>
  );
}
