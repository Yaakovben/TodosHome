import exp,{Express}  from "express";
import "dotenv/config"

const app:Express = exp()

app.use(exp.json())

const PORT:number = (process.env.PORT || 1010) as number




app.listen(PORT,() => { console.log(`Server is up and running, feel free to visit at http://localhost:${PORT}`);
})

   



   


      