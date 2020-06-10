import Bug from '../../repositories/bugs/typeorm/entities/Bug';

export default interface ICreateInspectionsDTO {
  user_id: string;
  machine_id: string;
  article: string;
  tag: string;
  amountSamples: number;
  amountParts: number;
  palconstLength: number;
  statusPalconst: string;
  bugs: Bug[];
}
