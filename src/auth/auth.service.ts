import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // Validate user credentials
  async validateUser(username: string, pass: string): Promise<any> {
    const user = { id: 1, username: 'test', password: 'test' }; // Replace with actual user fetching logic
    if (username === user.username && pass === user.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // Generate JWT token
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}