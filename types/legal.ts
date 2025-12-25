export interface LegalSection {
    id: string;
    title: string;
    content: string | string[]; // Permet paragraphes multiples
    subsections?: LegalSection[];
  }
  
  export interface LegalPage {
    title: string;
    description: string;
    lastUpdate: string;
    sections: LegalSection[];
  }
  
  export interface LegalContact {
    name: string;
    email: string;
    address: string;
    siret?: string;
    host: {
      name: string;
      address: string;
    };
  }