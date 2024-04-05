import { expect } from '@wdio/globals'
import axios from 'axios';

const URL = 'https://reqres.in/api/users?page=2'

describe('Reqres', () => {
    it('should return a list of users from page 2 using axios', async () => {
        await axios.get(URL).then(response => {
            expect(response.status).toEqual(200)
            expect(response.data.data).not.toHaveLength(0);
        })

    })

    it('should return a list of users from page 2 using fetch', async () => {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        expect(response.status).toEqual(200);

        const body = await response.json();
        expect(body).toHaveProperty('data');
        expect(body.data).not.toHaveLength(0);
    })
})