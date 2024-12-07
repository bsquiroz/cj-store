export interface Console {
  id: number;
  sentence?: string;
  name: string;
  description: string;
  imageUrl: string;
  brand: "PlayStation" | "Xbox" | "Nintendo" | "Portable";
}

export interface Game {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  platform: string;
}

export interface MaintenanceService {
  id: number;
  title: string;
  description: string;
  type: "preventive" | "corrective";
}

export type IconTypeHeader =
  | "playStation"
  | "xbox"
  | "nintendo"
  | "maintenance"
  | "portableConsoles";
export interface HeaderTitle {
  title: string;
  icon: IconTypeHeader;
}
