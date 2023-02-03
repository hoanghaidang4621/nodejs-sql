import { createConnection } from 'mysql2-promise';
import dbConfig from '../configs/dbConfig.js';
//DB;
async function query(sql,params ) {
    const connection = await createConnection(dbConfig);
    const [results, ] = await connection.execute(sql, params);
    return results;
  }

  export {
    query
  } 