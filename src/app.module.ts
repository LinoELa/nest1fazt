import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { ProjectModule } from './project/project.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';


@Module({
  imports: [TaskModule, ProjectModule, AuthModule, UsersModule],
  controllers: [HelloController],
})
export class AppModule {}
