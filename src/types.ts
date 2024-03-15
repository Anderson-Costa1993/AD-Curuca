export type EventosType = {
  eventName : string,
  eventDescription : string,
  Data: Date;
  id: number;
  time: string;
  eventType: string;
}

export type MemberType = {
  id?: number;
  name: string;
  surname: string;
  age: number;
  baptized: boolean;
  birth: Date;
  sexo: string;
  cargo: string;
  carterinha: string;
  emissao: Date;
}