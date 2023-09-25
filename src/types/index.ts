export type UserProps = {
  id: string;
  name: string;

  email: string;
  password: string;
  repeat_password: string;
  createdAt: Date;
  updatedAt?: Date;
};

export class User {
  public readonly id: string;

  public readonly name: string;

  public readonly email: string;

  public readonly password: string;

  public readonly repeat_password: string;

  public readonly createdAt: Date;

  public readonly updatedAt?: Date;

  constructor(props: UserProps) {
    this.id = props.id;
    this.name = props.name;
    this.repeat_password = props.repeat_password;
    this.email = props.email;
    this.password = props.password;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
