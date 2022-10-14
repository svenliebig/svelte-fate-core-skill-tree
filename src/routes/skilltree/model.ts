export type SkilltreeForm = {
  name: string;
  beschreibung: string;
  erhohlungsrate: string;
  konzept: string;
  dilemma: string;
  aspekte: [string, string, string];
  extras: string;
  stunts: string;
  fertigkeiten: [
    [string, string, string, string, string],
    [string, string, string, string, string],
    [string, string, string, string, string],
    [string, string, string, string, string],
    [string, string, string, string, string]
  ];
  level: number;
  konsequenzen: {
    leicht: [string, string];
    mittel: string;
    schwer: string;
  };
};
