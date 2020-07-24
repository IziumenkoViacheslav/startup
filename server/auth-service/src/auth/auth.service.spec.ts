import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
          useValue: {
            email: 'test@email.com',
            password: 'test'
          },
        }
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);    
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });
});
