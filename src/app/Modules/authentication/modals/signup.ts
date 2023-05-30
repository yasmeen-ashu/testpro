export class Signup {
    public  email:string
    public  password:string;
    public username:string;
}

export class User {
    public user!:Signup;
}
export class SignUp {
  public  UserInternalId:number=0;
  public  UserName:string=""
  public  Email:string=""
  public  Password:string=""
  public  Bio:string=""
  public  Image :string="";
    
}