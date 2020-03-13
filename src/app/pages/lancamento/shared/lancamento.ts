import { BaseResourceModel } from 'src/app/shared/models/base-resource-model';

export class Lancamento extends BaseResourceModel {
  constructor(
    public nome?: string,
    public valor?: string,
    public data?: Date,
    public pagamento?: string,
    public tipo?: string,
    public categoria?: string,
    public descricao?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): Lancamento {
    return Object.assign(new Lancamento(), jsonData);
  }
}
