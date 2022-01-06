import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../../app.module';
import { PrismaService } from '../../../prisma/prisma.service';
import { AuthService } from '../../auth.service';

describe('Auth Flow', () => {
  let prisma: PrismaService;
  let authService: AuthService;
  let moduleRef: TestingModule;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    prisma = moduleRef.get(PrismaService);
    authService = moduleRef.get(AuthService);
    await prisma.cleanDatabase();
  });

  afterAll(async () => {
    await moduleRef.close();
  });

  it.todo('should pass');
});
