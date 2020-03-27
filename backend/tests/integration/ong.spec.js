const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe ('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "Ong 1",
            email: "contato@aaai.com.br",
            whatsapp: "47997926045",
            city: "Itajai",
            uf: "SC"
        });

        console.log(response)
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});