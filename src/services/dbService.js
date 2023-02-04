import { createConnection } from 'mysql2';
import dbConfig from '../configs/dbConfig.js';
//DB;
async function query(sql,params ) {
    const connection = await createConnection(dbConfig);
    const result = await connection.query(sql,params);
    return result;
  }

  export {
    query
  } 