import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

const main =  async () =>{
    const users = await prisma.user.findUnique({
        where : {
            id:1
        },
        include:{
            posts : true
        }
    })
    console.log(users);
}

main()