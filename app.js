const express = require('express');
const config = require('./config').port; 

const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

let Users =
        [{
            "name":"Andrzej",
            "email":"andrzej@net.pl",
            "password":"Start"
        },
        {
            "name":"Marta",
            "email":"andrzej@net.pl",
            "password":"Start"
        },
        {
            "name":"Józef",
            "email":"andrzej@net.pl",
            "password":"Start"
        },
        {
            "name":"Rafał",
            "email":"andrzej@net.pl",
            "password":"Start"
        },
        {
            "name":"Stefan",
            "email":"andrzej@net.pl",
            "password":"Start"
        }]

    let continents = 

        {
            labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
            datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                label: "Africa",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                label: "Asia",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                label: "Europe",
                borderColor: "#3cba9f",
                fill: false
            }, {
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                label: "Latin America",
                borderColor: "#e8c3b9",
                fill: false
            }, {
                data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                label: "North America",
                borderColor: "#c45850",
                fill: false
            }]
         };
         
       
            

        app.get('/users', (request, response) => {

            let User_s = "";

            let Users_s = Users;

            response.render(__dirname + '/index.html', {Users_s: JSON.stringify(Users_s),User_s , chart : "nic"});
         }); 

         app.get('/users/:id', (request, response) => {

            const id = request.params.id;

            const User_s = Users[id-1];

            let Users_s= "";
            response.render(__dirname + '/index.html', {Users_s, User_s: JSON.stringify(User_s) , chart : "nic"});
         });  

         app.get('/continents', (request, response) => {


            const User_s = "";

            let Users_s= "";
            response.render(__dirname + '/index.html', {Users_s, User_s , chart : JSON.stringify(continents)});
         });  

         app.listen(config, function () {
            console.info(`Server is running at port 3000`);
         });
