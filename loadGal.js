const fs = require('fs');

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://mongodb-stitch-europeana-bdhxh:whydoesntmongodbwork@europeanaimaging-porog.mongodb.net/Users?retryWrites=true";


module.exports.loadGal = function(user) {
    try {

        MongoClient.connect(uri, function(err, client) {
            global.gallery_val = '';
            const gallery = client.db("Users").collection("Gallery");
            gallery.find({
                username: user
            }).forEach(function(error, doc) {

                global.gallery_val += '<div id=galDiv <br> <b>' + error.title + '</b><br><div id=galDivPic <img id=galDivPic src=' + error.img_links + ' </div> </div>';
                

            });
            
            console.log(gallery_val)
            client.close();
            return gallery_val
        });


        /*var readalbum = fs.readFileSync('album.json');
        var piclist = JSON.parse(readalbum);
        
        for (var i = 0; i < piclist.length; i++) {
            
        }*/
    } catch (SyntaxError) {
        gallery_val += '<font size="6"><b>No albums<b></font>';
        return gallery_val
    }

}