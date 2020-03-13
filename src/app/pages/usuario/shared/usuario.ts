import { BaseResourceModel } from '../../../shared/models/base-resource-model';

export class Usuario extends BaseResourceModel {
  constructor(
    public nome?: string,
    public username?: string,
    public password?: string,
    public senhaConfirm?: string,
    public codigo?: string,
    public novaSenha?: string,
  ) {
    super();
  }

  static fromJson(jsonData: any): Usuario {
    return Object.assign(new Usuario(), jsonData);
  }
}
