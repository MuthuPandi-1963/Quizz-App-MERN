import bcrypt from 'bcrypt'


export async function hashPassword(pwd : string) :Promise<string> {
    const salt = await bcrypt.genSalt(10,"b");
    return await bcrypt.hash(pwd,salt);
}

export async function verifyPassword(pwd:string,hashedPwd : string) : Promise<boolean> {
    return await bcrypt.compare(pwd,hashedPwd);
}