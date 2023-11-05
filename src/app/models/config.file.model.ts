export class ConfigFileModel
{
  public api: APIConfig = new APIConfig();
  public debug: boolean = false;
  public title: string = "";
  public version: Version = new Version();
}

export class Version
{
  public isTest: boolean = false;
}

export class APIConfig
{
  public apiUrl: string = "";
  public baseApiUrl: string = "";
}

