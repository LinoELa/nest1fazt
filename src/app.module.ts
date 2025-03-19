import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { ProjectModule } from './project/project.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [TaskModule, ProjectModule, AuthModule, UsersModule],
})
export class AppModule {}
