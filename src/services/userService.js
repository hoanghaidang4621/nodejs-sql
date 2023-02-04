import {query} from './dbservice.js';

async function getAllUser(){
  const data = await query(
    `SELECT * FROM user` ,[]
  );
  console.log(data);
  return data ;
}
export {getAllUser}