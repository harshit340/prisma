import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main (){
    await prisma.user.create({
        data:{
            email:"harshitshrivastva340",
            name:"harshit shrivastava",
            posts : {
                create : [
                    {
                        title : "New title 1",
                        content : "New title ",
                        published :  true
                    },
                    {
                        title : "new title 2",
                        content : "new title 33",
                        published:true
                    }
                ]
            }   
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