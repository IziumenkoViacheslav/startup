import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/user.service';
import bcrypt from 'bcrypt';
import CreateUserDto from '../user/dto/createUser.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) { }

  public async register(newUser: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const createdUser = await this.userService.create({
      ...newUser,
      password: hashedPassword
    });
    createdUser.password = undefined;
    return createdUser;
  }

  public async getAuthenticatedUser(email: string, plainTextPassword: string) {
    try {
      const user = await this.userService.getByEmail(email);
      await this.verifyPassword(plainTextPassword, user.password);
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
    const isPasswordMatching: boolean = await bcrypt.compare(
      plainTextPassword,
      hashedPassword
    );
    if (!isPasswordMatching) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
    return isPasswordMatching;
  }
}
