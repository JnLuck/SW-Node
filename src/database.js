import { Pool } from "pg"

export const pool = new Pool({
    host:'ec2-34-230-153-41.compute-1.amazonaws.com',
    user:'kifxpefgiagukl',
    password:'0705d3d694c1c5f3c757537439b19946613fe58c219ff44aa26d01606f28961c',
    database:'dcl9is5q8pcgur',
    port:5432,
    ssl:{rejectUnauthorized:false}

});