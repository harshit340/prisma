import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main()
{
    await prisma.user.delete({
        where : {
            email : "harshitshrivastav340"
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

// to delete many

/* import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main()
{
    await prisma.post.deleteMany({
        where : {
            published : false
        }
    })
}

main() */

// For any specific user

// async function main()
// {
//     await prisma.user.update({
//         where: {
//             id : 1
//         },
//         data : {
//             posts : {
//                 deleteMany : {
//                     published : false
//                 }
//             }
//         }
//     })
// }