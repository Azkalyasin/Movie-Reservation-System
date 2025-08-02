import dotenv from 'dotenv';

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in .env file');
}

const config = {
  PORT: process.env.PORT || 3000,
  JWTSECRET: process.env.JWT_SECRET,
};

export default config;
