import { query } from "../../db/manager.mjs" 

const select9_7_1 = async () => { 
    const results = await query(` 
      SELECT 
        * 
      FROM 
        exams; 
    `) 
    return results.rows 
} 

export const q9_7Model = { 
    select9_7_1,
} 