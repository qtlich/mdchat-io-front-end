import {RegisterUserInputModel} from "./register.user.input.model";

export class SignUpScreenDataModel extends RegisterUserInputModel
{
  public repeatedpassword: string | null = null;

  constructor()
  {
    super();
  }
}
