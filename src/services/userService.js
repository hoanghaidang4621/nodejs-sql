import {query} from './dbservice.js';

async function getAllUser(){
  const data = await query(
    `SELECT * FROM users`, 
  );
  return data ;
}
export {getAllUser}