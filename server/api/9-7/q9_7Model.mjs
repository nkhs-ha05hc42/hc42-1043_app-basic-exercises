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

const select9_7_2 = async (id) => { 
    const selectQuery = ` 
    SELECT 
      * 
    FROM 
      exams
    WHERE 
      id = $1; 
    ` 
    const results = await query(selectQuery, [id]) 
    return results.rows.at(0) 
}

const insert9_7_3 = async (user_id, year, month, day, name, score) => { 
    const insertQuery = ` 
      INSERT INTO exams( 
        user_id, 
        year, 
        month,
        day,
        name,
        score 
      ) 
      VALUES( 
        $1, 
        $2, 
        $3,
        $4,
        $5,
        $6
      ) 
      RETURNING *; 
    ` 
    const result = await query(insertQuery, [user_id, year, month, day, name, score]) 
    return result.rows.at(0) 
} 

export const q9_7Model = { 
    select9_7_1,
    select9_7_2,
    insert9_7_3,
} 