import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diritto di Famiglia | Studio Legale Zanchi",
  description:
    "Assistenza legale in separazioni, divorzi, affidamento minori e tutela dei diritti familiari a Milano.",
};

export default function DirittoFamigliaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Diritto di Famiglia</h1>
      <p className="text-lg mb-4">
        Offriamo supporto umano e legale in momenti delicati come separazioni,
        divorzi, affidi e tutela dei minori.
      </p>
      <p className="text-lg mb-4">
        Lo Studio adotta un approccio empatico e riservato, focalizzato sul
        benessere della famiglia e dei minori.
      </p>
      <p className="text-lg">
        Contattaci per affrontare insieme ogni questione familiare con la giusta
        competenza.
      </p>
    </div>
  );
}
