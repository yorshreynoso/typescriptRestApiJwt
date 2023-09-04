import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import "./routes/database";

function main() {
    const PORT:number = app.get('PORT');
    app.listen((PORT), () => {
        console.log('⚡️[server] working on port ', PORT);
    });

}

main();

