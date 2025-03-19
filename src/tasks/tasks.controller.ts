import { Controller, Get } from "@nestjs/common";

@Controller({})
export class TaskController {

    @Get('/tasks')
    getAlltask(): string {
        return 'obtener tareas'
    }

    @Get('/index')
    getIndex(): string {
        // Se puede ejecutar de forma automatica 
        
        return 'Este es nuetro index'
    }




}