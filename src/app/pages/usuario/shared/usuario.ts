import { BaseResourceModel } from '../../../shared/models/base-resource-model';

export class Usuario extends BaseResourceModel {
  constructor(
    public nome?: string,
    public email?: string,
    public senha?: string,
    public novaSenha?: string,
    public confirmeSenha?: string,
    public codigo?: string,
  ) {
    super();
  }

  static fromJson(jsonData: any): Usuario {
    return Object.assign(new Usuario(), jsonData);
  }
}
