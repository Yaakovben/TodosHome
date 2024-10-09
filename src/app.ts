import exp,{Express}  from "express";
import "dotenv/config"
import usersRouter from './routers/usersRouter'
import todosRouter from './routers/todosRouter'

const app:Express = exp()

app.use(exp.json())

app.use('/user',usersRouter )
app.use('/todo',todosRouter )


const PORT:number = (process.env.PORT || 1010) as number
app.listen(PORT,() => { console.log(`Server is up and running, feel free to visit at http://localhost:${PORT}`);
})

   



   


      