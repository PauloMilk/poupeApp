import { BaseResourceModel } from '../shared/models/base-resource-model';

export class Page<T extends BaseResourceModel> {

  content: T[];
  pageable: any;
  totalElements: number;
  totalPages: number;
  size: number;

  static fromJson(jsonData: any): Page<BaseResourceModel> {
    return Object.assign(new Page<BaseResourceModel>(), jsonData);
  }

}
