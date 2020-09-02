const Database = require('./db')
const createProffy = require("./createProffy")


Database.then( async (db)=> {
    //inserir DADOS

    proffyValue = {
        name: 'Nayol de Fátima',
        avatar: 'https://scontent.fppy4-1.fna.fbcdn.net/v/t1.0-9/74996751_2760816503952049_4609688390483312640_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=8wfUiimXNPEAX-RJUHY&_nc_ht=scontent.fppy4-1.fna&oh=528d3906e69ee2fd751c688b01e955af&oe=5F746E4D',
        whatsapp: '8989888',
        bio: 'Mãe das bebês'
        

    }

    classValue = {
        subject: 'Quimica',
        cost: '20'
    }

    classSchedule = [{
        weekday: 1,
        time_from: 720, 
        time_to: 1220

    }, 

    {
        weekday: 0,
        time_from: 520, 
        time_to: 1220

    }


]

await createProffy(db, {proffyValue, classValue, classSchedule})





    //Consultar os dados inseridos


})