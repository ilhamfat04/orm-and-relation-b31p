// import model here
const { user } = require('../../models')

exports.addUser = async (req, res) => {
    // code here
    try {
        const data = req.body

        // const query = `INSERT INTO users () VALUES ()`
        // await db.sequelize.query(query)

        const createdData = await user.create(data)

        res.send({
            status: "success",
            data: createdData
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "Failed",
            message: "Server error"
        })
    }
}