export class RegisterUser {
    public eusername: string = '';
    public Email: string = '';
    public Password: string = '';
    public euserPhone: string = '';
    public euserAddress: string = '';
}

export class LoginUser {
    public Email: string = '';
    public Password: string = '';
}

export class SecurityResponse {
    public User!:User;
    public Token:string = '';
}

export class User {
    public Id:number=0;
    public Email:string = '';
    public Firstname:string = '';
    public Lastname:string = '';
}

export class UserProfile {
    
    public Firstname:string = '';
    public Lastname:string = '';
    public Email:string = '';
    public Password:string = '';
}