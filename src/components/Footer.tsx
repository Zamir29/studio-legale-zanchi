import Link from "next/link";
import { Scale, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              <span className="font-semibold tracking-tight">
                Studio Legale Zanchi
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Assistenza legale in ambito civile e contrattuale con sede a
              Milano.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium mb-4">Contatti</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Via Milano 123, 20100 Milano</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+39 02 1234567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>info@studiolegale-zanchi.it</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4">Link Rapidi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servizi" className="hover:underline">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="hover:underline">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="hover:underline">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-medium mb-4">Informazioni Legali</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/termini-e-condizioni" className="hover:underline">
                  Termini e Condizioni
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Studio Legale Zanchi. Tutti i diritti
            riservati.
          </p>
          <p className="mt-1">P.IVA: 12345678910</p>
        </div>
      </div>
    </footer>
  );
}
