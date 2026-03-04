import app from './app';
import { AppDataSource } from './config/connection';

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Connection succeded");
  } catch(err){
    if(err instanceof Error){
      console.log(err.message);
    }
  }
  app.listen(3000, ()=> {
    console.log('server connected at por: ', 3000);
  })
}

main();
