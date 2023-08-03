
const AddUser = async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const pool = await poolPromise;
      
        const result = await pool
            .request()
            .input('Name', mssql.NVarChar(50), name)
            .input('Age', mssql.Int, age)
            .input('Email', mssql.NVarChar(100), email)
            .execute('sp_InsertUser_NJS');
      
        if (result && result.rowsAffected[0] === 1) {
            res.status(201).send("Record created successfully!");
        } else {
            res.status(500).send("Error in saving new user");
        }
    } catch (err) {
        console.log("Error in saving new user:", err);
        res.status(500).send("Error in saving new user");
    }
}

const getAllUsers = async (req, res) => {
    try {
      const pool = await poolPromise;
  
      // Assuming your stored procedure is called 'sp_GetAllUsers_NJS'
      const result = await pool
        .request()
        .execute('sp_GetUsers_NJS');
  
      if (result && result.recordset.length > 0) {
        // Assuming your stored procedure returns an array of user records
        const users = result.recordset;
        res.send(users);
      } else {
        res.status(404).send("No users found");
      }
    } catch (err) {
      console.log("Error fetching users data:", err);
      res.status(500).send("Error fetching users data", err);
    }
  }

  module.exports = {
    getAllUsers,
    AddUser
  }