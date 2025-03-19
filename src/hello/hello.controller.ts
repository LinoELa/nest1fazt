import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {

    @Get('/home')
    index(): string {
        return 'Home Page'
    }
    
}
