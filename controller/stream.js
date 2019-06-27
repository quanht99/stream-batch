const fs = require("fs");

module.exports.downloadFile = (req, res) => {
    let stream;
    try{
        stream = fs.createReadStream('/home/quanht/Desktop/stream-batch/1GB.bin').pipe(res);
    }
    catch(err){
        console.log(err.message);
        res.json({
            success: false,
            message: err.message
        })
    }
};