/*
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe ('Login', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to login', async () => {
        const response = await request(app)
        .post('/sessions')
        .send({
            id: "fde28c8f",
        });

        expect(response.body).toHaveProperty('name');
    });
});
*/