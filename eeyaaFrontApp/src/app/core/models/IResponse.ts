export interface IResponse<T> {
  status_code?: number;
  status_message?: string;
  errors?: any;
  data?: T;
  lenght?: number;
  totalRecord?: number;
}
