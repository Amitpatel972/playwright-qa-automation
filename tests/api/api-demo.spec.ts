import { test, expect } from '@playwright/test';

test.describe('API Testing', () => {

  test('GET API request', async ({ request }) => {

    const response = await request.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);

    console.log('Status:', response.status());
    console.log('Response:', body);

  });

});