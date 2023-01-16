import fastify from "fastify";
import cors from "@fastify/cors"
import { PrismaClient } from "@prisma/client"



const app = fastify()
const prisma = new PrismaClient()

app.register(cors)


app.get("/", (req, res) => { })



app.listen({ port: 3333 }).then(() => { console.log('rodando') })