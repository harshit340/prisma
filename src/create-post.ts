import { PrismaClient } from "@prisma/client";
import { connect } from "http2";

const prisma = new PrismaClient();

async function main (){
    await prisma.post.create({
        data : {
            title  :" this is me harshit shrivastava ",
            content : "i am harshit",
            authorId : 1 
            /* author : {
                connect:{
                    id:1
                }
            } */
        }
    })
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect();
    process.exit(1);
})