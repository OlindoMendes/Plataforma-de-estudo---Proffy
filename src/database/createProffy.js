module.exports = async (db, {proffyValue, classValue, classSchedule }) =>{
    //Organizar os dados a serem inseridos
    const InsertProffy = await db.run(`
        INSERT INTO proffys(  name, avatar, whatsapp, bio) VALUES (
            "${proffyValue.name}", 
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );

    `)
    

    const proffy_id = InsertProffy.lastID

    //Inserir dados na table classe

    const InsertClass = await db.run(` 
            INSERT INTO classes( subject, cost,  pcleroffy_id) VALUES(
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
            
    
    
    `)

    const class_id = InsertClass.lastID
    

    //Inserir dados na tabela classeSchedule

    const insertAllScheduleValues = classSchedule.map((classSchedule)=> {
        return db.run(`
        INSERT INTO classSchedule(
            class_id,
            weekday,
            time_from,
            time_to

        ) VALUES (
            "${class_id}",
            "${classSchedule.weekday}",
            "${classSchedule.time_from}",
            "${classSchedule.time_to}"

        );
     `);

    })

    await Promise.all(insertAllScheduleValues)


    //execução dos dbs.runs()





}