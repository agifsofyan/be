import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

const {
	// MONGO_DB_URI,
	DB_USER,
	DB_PASS,
	DB_HOST,
	DB_NAME, 
	DB_AUTH,
} = process.env;

const URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;

export const MONGO_DB_CONNECTION = MongooseModule.forRoot(URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});
