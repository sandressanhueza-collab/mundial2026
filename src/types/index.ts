export interface Match {
  fecha: string;
  hora: string;
  fase: string;
  grupo?: string;
  eq1: string;
  eq2: string;
  estadio: string;
  ciudad: string;
  pais: string;
  canales: string[];
  tag?: string;
  destacado?: string;
}

export interface Favorito {
  nombre: string;
  bandera: string;
  prob: number;
  razon: string;
}

export interface LatamTeam {
  nombre: string;
  bandera: string;
  prob_cuartos: number;
  prob_semi: number;
  prob_campeon: number;
}

export interface Stadium {
  name: string;
  city: string;
  country: "mx" | "us" | "ca";
  cap: string;
  emoji: string;
}

export interface FeaturedTeam {
  id: string;
  name: string;
  flag: string;
  badge: string;
  matches: { date: string; hora: string; rival: string }[];
}
