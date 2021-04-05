import bcrypt from 'bcrypt';

const saltRounds = 12;

async function hashPassword(password){
    return await bcrypt.hash(password, saltRounds);
}

async function comparePassword(password, hash){
    return await bcrypt.compare(password, hash);
}

export {
    hashPassword,
    comparePassword,
}