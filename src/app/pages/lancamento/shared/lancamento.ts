import { BaseResourceModel } from 'src/app/shared/models/base-resource-model';
import { Categoria } from '../../categoria/shared/categoria';

export class Lancamento extends BaseResourceModel {
  constructor(
    public nome?: string,
    public valor?: string,
    public data?: Date,
    public statusPagamento?: string,
    public tipo?: string,
    public categoria?: Categoria,
    public categoriaId?: number,
    public descricao?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): Lancamento {
    let lancamento = Object.assign(new Lancamento(), jsonData);
    lancamento.categoriaId = lancamento.categoria.id;
    return lancamento;
  }
}
