

const subjects = [

    "Artes",
    "Português",
    "Biologia ",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
    
]

//FUNCIONALIDADE
const getSubject = (subjectNumber) => {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

const ConvertHourToMinute = (time) => {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}


module.exports = {
     subjects,
     weekdays, 
     getSubject,
     ConvertHourToMinute
}