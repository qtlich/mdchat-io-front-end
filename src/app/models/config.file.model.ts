export class ConfigFileModel
{
  public title: string = "";
  public debug: boolean = false;
  public api: APIConfig = new APIConfig();
}


export class APIConfig
{
  public apiUrl: string = "http://192.168.1.60:4200/";
}

