const fs = require("fs");


module.exports.readFileAndEdit = (req, res) => {
    try{
        fs.readFile('/home/quanht/Desktop/stream-batch/truyen-kieu.txt', (err, data) => {
            if(err){
                throw new Error(err.message)
            }
            data = data.toString();
            data = data.replace(/([.,?!])\s/gm, "$1\n");
            data = data.split(/\n/);
            data = data.map(e => {
                if(e[0] == "'" && e[1] == " "){
                    return  e.substring(2, e.length);
                }
                else{
                    return e;
                }
            });
            let i;
            let check = 6;
            for(i=0; i<data.length; i++){
                if(check == 6){
                    let array = data[i].split(" ");
                    console.log(array.length);
                    if(array.length == 6){
                        check = 8;
                    }
                    else if(array.length < 6){
                            data[i] = data[i] + " " + data[i+1];
                            data.splice(i+1, 1);
                            i--;
                    }
                    else{
                        let j;
                        let count = 0;
                        for(j=0; j<data[i].length; j++){
                            if(data[i][j] == " "){
                                count++;
                            }
                            if(count == 6){
                                data.splice(i+1, 0, (data[i].substring(j+1, data[i].length)));
                                data[i] = data[i].substring(0, j);
                                data[i] = data[i];
                                check = 8;
                            }
                        }
                    }
                }
                else if(check == 8){
                    let array = data[i].split(" ");
                    if(array.length == 8){
                        check = 6;
                    }
                    else if(array.length < 8){
                            data[i] = data[i] + " " + data[i+1];
                            data.splice(i+1, 1);
                            i--;
                    }else{
                        let j;
                        let count = 0;
                        for(j=0; j<data[i].length; j++){
                            if(data[i][j] == " "){
                                count++;
                            }
                            if(count == 8){
                                data.splice(i+1, 0, (data[i].substring(j+1, data[i].length)));
                                data[i] = data[i].substring(0, j);
                                data[i] = data[i];
                                check = 6;
                            }
                        }
                    }
                }
            }
            let text = "";
            let k;
            for(k=0; k<data.length; k++){
                if(data[k].split(" ").length > 3){
                    text = text + data[k] + "\n";
                }
            }
            console.log(text);
            res.json({
                success: true,
                data: text
            })
        })
    }
    catch (e) {
        console.log(e.message);
        res.json({
            success: false,
            message: e.message
        })
    }
};




module.exports.downloadFile = (req, res) => {
    try{
        fs.readFile('/home/quanht/Desktop/stream-batch/data.html', (err, data) => {
            res.send(data);
        });
    }
    catch(err){
        console.log(err.message);
        res.json({
            success: false,
            message: err.message
        })
    }
};





