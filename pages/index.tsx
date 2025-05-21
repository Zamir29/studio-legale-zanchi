import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Studio Legale Zanchi
        </title>
        <meta name="description" content="Avvocato civilista a Milano - Studio Legale Zanchi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
        <Image 
          src="/avvocato-silvio-zanchi.jpeg" 
          alt="Avvocato Silvio Zanchi" 
          width={160}
          height={160}
          className="rounded-full object-cover shadow-md mb-6" />
        <h1 className="text-4x1 font-bold text-gray-900">Studio Legale Zanchi</h1>
        <p className="mt-4 text-lg text-gray-600">Assistenza legale in ambito civile e contrattuale</p>
        <p className="mt-2 text-sm text-gray-500">Con sede a Milano, operiamo con competenza, trasparenza e dedizione</p>
      </main>
    </>
  );
}