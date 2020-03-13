import { BaseResourceModel } from 'src/app/shared/models/base-resource-model';
import { TotalCategoria } from './TotalCategoria';

export class Relatorio extends BaseResourceModel {

  constructor(
    public mes?: number,
    public ano?: number,
    public receita?: TotalCategoria[],
    public despesa?: TotalCategoria[]
  ) {
    super();
  }

  static fromJson(jsonData: any): Relatorio {
    return Object.assign(new Relatorio(), jsonData);
  }
}
