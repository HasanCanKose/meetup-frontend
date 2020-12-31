import {UserResponseModel} from '../../user/models/user-response.model';

export interface EventResponseModel {
  id: number;
  title: string;
  description: string;
  place: string;
  date: string;
  user: UserResponseModel;
  users: UserResponseModel[];
}
