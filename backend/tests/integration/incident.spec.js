/*
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe ('Incident', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new incident', async () => {
        const response = await request(app)
        .post('/incidents')
        .set('Authorization', 'fde28c8f')
        .send({
            title: "Caso  ong",
            description: "Detalhessssss do caso",
            value: 12 
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(2);
    });
});
*/