const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const gang90210 = {
    'brenda':{
        'fullName': 'Brenda Walsh' ,
        'actor': 'Shannen Doherty',
        'parents': 'Jim and Cindy', 
        'siblings': 'Brandon (Twin)',
        'relationships': 'Dylan McKay, Rick from Paris, Stuart Carson ' ,
    },

    'brandon':{
        'fullName': 'Brandon Walsh',
        'actor': 'Jason Priestley' ,
        'parents': 'Jim and Cindy' , 
        'siblings': 'Brenda (Twin)',
        'relationships': 'Nikki Witt, Emily Valentine, Kelly Taylor, Susan Keats, Tracy Gaylian' ,
    },

    'kelly':{
        'fullName': 'Kelly Taylor' ,
        'actor': 'Jennie Garth',
        'parents': 'Jackie and Bill', 
        'siblings': 'Erin Silver (half-sister), David Silver (step-brother)',
        'relationships': 'Dylan McKay, Brandon Walsh, Colin Robbins,  Matt Durning' ,
    },

    'steve':{
        'fullName': 'Steve Sanders' ,
        'actor': 'Ian Ziering',
        'parents': 'Rush and Samantha', 
        'siblings': 'Ryan and Austin (half-brothers',
        'relationships': 'Celeste Lundy, Claire Arnold, Janet Sosna' ,
    },

    'andrea':{
        'fullName': 'Andrea Zuckerman' ,
        'actor': 'Gabrielle Carteris',
        'parents': 'Kenny and Gail, but Grandma Rose is the one featured', 
        'siblings': 'none',
        'relationships': 'Dan Rubin, Jesse Vasquez, Peter Tucker' ,
    },

    'dylan':{
        'fullName': 'Dylan McKay' ,
        'actor': 'Luke Perry',
        'parents': 'Iris and Jack', 
        'siblings': 'Erica (alleged half-sister)',
        'relationships': 'Brenda Walsh, Kelly Taylor, Toni Marchette, Gina Kincaid' ,
    },

    'david':{
        'fullName': 'David Silver' ,
        'actor': 'Brian Austin Green',
        'parents': 'Mel and Shelia', 
        'siblings': 'Erin (half-sister), Kelly Taylor(step-sister)',
        'relationships': 'Donna Martin, Claire Arnold, Valerie Malone',
    },

    'donna':{
        'fullName': 'Donna Martin' ,
        'actor': 'Tori Spelling',
        'parents': 'John and Felice', 
        'siblings': 'Gina Kincaid (secret half-sister)',
        'relationships': 'David Silver, Ray Pruit, Joe Bradley, Noah Hunter',
    },

    'unknown':{
        'fullName': 'unknown' ,
        'actor': 'unknown',
        'parents': 'unknown', 
        'siblings': 'unknown',
        'relationships': 'unknown',
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterName', (request, response) => {
    const charName = request.params.characterName.toLowerCase()

    if(gang90210[charName]){
        response.json(gang90210[charName])
    }
    else{
        response.json(gang90210['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log("Server is Running")
})