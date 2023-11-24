
export class User {
  constructor(
    public email: string, 
    public name: string, 
    public password?: string,
    public img?: string, 
    public google?: boolean, 
    public role?: string, 
   public uid?: string,
  ) {}
}