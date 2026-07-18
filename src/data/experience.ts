import type { Bilingual } from "./types";

export interface ExperienceRole {
  date: string;
  title: Bilingual;
  description?: Bilingual;
  subtitle?: string;
  details?: Bilingual;
}

export interface ExperienceData {
  slug: string;
  date: string;
  title: Bilingual;
  subtitle: string;
  description?: Bilingual;
  details?: Bilingual;
  roles?: ExperienceRole[];
}

export const experience: ExperienceData[] = [
  {
    slug: "sparebanken-norge",
    date: "June 2025 – {{present}}",
    title: { en: "System Developer", no: "Systemutvikler" },
    subtitle: "Sparebanken Norge",
    description: { en: "Part-time", no: "Deltid" },
    details: {
      en: "Working on further development of the bank's digital services, including product development and development of a mobile bank for children, as well as improving the loan application process. Started as a summer intern in 2025, then received a part-time position alongside studies, and in 2026 took on a mentor role for new summer students.",
      no: "Arbeidet har dreid seg om videreutvikling av bankens digitale tjenester, blant annet produktutvikling og utvikling av en mobilbank for barn, samt forbedring av lånesøknadsprosessen. Startet som sommerintern i 2025, fikk deretter tilbud om en deltidsstilling ved siden av studiene, og har i 2026 tatt på meg mentorrolle for nye sommerstudenter.",
    },
  },
  {
    slug: "pwc",
    date: "January 2026 – May 2026",
    title: { en: "Internship", no: "Internship" },
    subtitle: "PwC",
    description: { en: "Part-time", no: "Deltid" },
    details: {
      en: "Internship connected to a course at UiB. Tasks involved designing and analyzing a market survey about AI in collaboration with a team.",
      no: "Internship i tilknytning til emne på UIB. Arbeidsoppgavene innebar å utforme og analysere en markedsundersøkelse om AI i samarbeid med et team.",
    },
  },
  {
    slug: "uib",
    date: "August 2025 – November 2025",
    title: { en: "Teaching Assistant", no: "Undervisningsassistent" },
    subtitle: "Universitetet i Bergen (UiB)",
    description: {
      en: "Part-time",
      no: "Deltid",
    },
    details: {
      en: "In the course ITØK204 (Econometrics and Data Analysis). Graded assignments and taught seminars for students.",
      no: "I emnet ITØK204 (Økonometri og dataanalyse). Rettet innleveringsoppgaver og underviste på seminarer for studentene.",
    },
  },
  {
    slug: "avo-consulting",
    date: "January 2025 – May 2025",
    title: { en: "Internship", no: "Internship" },
    subtitle: "Avo Consulting",
    description: {
      en: "Part-time",
      no: "Deltid",
    },
    details: {
      en: "Used Power Apps to develop a CV builder for the consultants, with integrated AI support for text writing in the app.",
      no: "Benyttet Power Apps til å utvikle en CV-bygger for konsulentene, med integrert AI-støtte for tekstskriving i appen.",
    },
  },
  {
    slug: "telenor",
    date: "November 2021 – March 2025",
    title: { en: "Assistant Store Manager", no: "Assisterende butikkleder" },
    subtitle: "Commbroker / Telenor",
    description: { en: "Part-time / Full-time", no: "Deltid/Heltid" },
    details: {
      en: "Customer-facing work with sales of phones, equipment and services. Worked with both direct sales and training/development of other salespeople, as well as occasional responsibility for store operations during holiday coverage. Gained solid experience in sales and customer service.",
      no: "Kunderettet arbeid med salg av mobiler, utstyr og tjenester. Jobbet både med eget direktesalg og opplæring/videreutvikling av andre selgere, samt tidvis ansvar for butikkdrift i ferieavvikling. Har opparbeidet meg solid erfaring med salg og kundebehandling gjennom stillingen.",
    },
  },
  {
    slug: "forsvaret",
    date: "August 2019 – July 2020",
    title: { en: "Military Service", no: "Førstegangstjeneste" },
    subtitle: "Forsvaret",
    description: { en: "Full-time", no: "Heltid" },
    details: {
      en: "Leading position among conscripts, with responsibility for the troop's personnel and equipment. Served as a liaison between officers and conscripts. Was also elected as company representative to advocate for fellow soldiers' issues with the company leadership.",
      no: "Ledende stilling blant vernepliktige, med ansvar for troppens personell og materiell. Fungerte som bindeledd mellom befal og vernepliktige. Ble i tillegg valgt som kompanitillitsvalgt for å fremme medsoldaters saker mot kompaniledelsen.",
    },
  },
  {
    slug: "finnfjord",
    date: "April 2018 – August 2021",
    title: { en: "Process Operator", no: "Prosessoperatør" },
    subtitle: "Finnfjord AS",
    description: { en: "On-call substitute", no: "Tilkallingsvikar" },
    details: {
      en: "Shift work with responsibility for draining smelting furnaces of liquid metal. Tasks consisted of emptying the furnace and transporting the metal by crane for further production.",
      no: "Skiftarbeid med ansvar for drenering av smelteovner for flytende metall. Arbeidsoppgavene besto i å tømme ovnen og frakte metallet med kran til videre produksjon.",
    },
  },
];
