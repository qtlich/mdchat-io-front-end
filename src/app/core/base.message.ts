export class BaseMessage
{
  public operationMessage: string | null = null;

  constructor(protected storageName: string)
  {
  }

}
