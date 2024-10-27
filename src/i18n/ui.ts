export const languages = {
  es: "Spanish",
  en: "English",
  ca: "Catalan",
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  en: {
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "contact.mainDescription":
      "For any questions, requests or requests for a fee quote, you can contact me via email or phone number:",
      "contact.disponibility": "Availability throughout the island of Mallorca."
  },
  es: {
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "contact.mainDescription":
      "Para cualquier consulta, petición o solicitud de presupuesto de honorarios, puede contactarme a través del correo electrónico o número de teléfono:",
      "contact.disponibility": "Disponibilidad por toda la isla de Mallorca."
  },
  ca: {
    "nav.services": "Serveis",
    "nav.projects": "Projectes",
    "nav.contact": "Contacte",
    "contact.mainDescription":
      "Per qualsevol consulta, petició o sol·licitud de pressupost d'honoraris, podeu contactar-me a través del correu electrònic o número de telèfon:",
       "contact.disponibility": "Disponibilitat per tota la illa de Mallorca."
  },
} as const;
