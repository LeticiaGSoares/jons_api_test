import { User, UserInstance } from "../models/User";
import {createUser, findByEmail, matchPassword, all} from './Userservice'
import request from 'supertest'

describe('Testando User service', () => {

    const register = {
        email: "foobaz@email.com",
        password: "123456768"
    }
    const wrongRegister = {
        email: "username",
        password: "1234345677"
    }

    //faz a sincronização entre a estrutura do model e o que está no banco de dados
    //se não existir, ele cria, se existir o "force", faz com que ele delete, e cria uma nova
    beforeAll(async () => {
        await User.sync({ force: true })
    })

    it("1) Criar um usuário corretamente.", async () => {
        const newUser = await createUser(register.email, register.password) as UserInstance; //UserInstance é
        expect(newUser.email).toBe(register.email)
        expect(newUser).not.toBeInstanceOf(Error)
        expect(newUser).toHaveProperty('id')
    })
    it("2) Não conseguir criar um usuário com email existente.", async () => {
        const newUser = await createUser(register.email, register.password) as UserInstance
        expect(newUser).toBeInstanceOf(Error)
    })
    it("3) Deve encontrar um usuário pelo email.", async () => {
        const newUser = await findByEmail(register.email) as UserInstance
        
        expect(register.email).toBe(newUser.email)
    })
    it("4) Deve combinar com a senha no banco de dados.", async () => {
        const user = await findByEmail(register.email) as UserInstance
        const match = await matchPassword(register.password, user.password)
        
        expect(match).toBe(true)
    })
    it("5) Não deve combinar com a senha no banco de dados.", async () => {
        const match =  await matchPassword('invalid', register.password)
        expect(match).toBeFalsy()
    })
    it("6) Deve retornar uma lista de usuários.", async () => {
        const users = await all()
        expect(users.length).toBeGreaterThanOrEqual(1)

        for(let i in users){
            expect(users[i]).toBeInstanceOf(User)
        }
    })

})