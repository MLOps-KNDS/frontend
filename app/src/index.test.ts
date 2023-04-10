import { describe, it, expect } from 'vitest';
import { dev_server_url } from './config';
import { createServer } from 'vite';
import { test } from 'vitest';
import { page_title } from './config';
import puppeteer from 'puppeteer';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});

const server = await createServer();

describe('Main page', () => {
  test('loads', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/');

    await page.goto(dev_server_url);

    const mainHeading = await page.$('h1');
    expect(mainHeading).not.toBeNull();
  }, 10000);

  test('has correct title', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(dev_server_url);

    const title = await page.title();
    expect(title).toBe(page_title);

    await server.close();
    await browser.close();
  }, 10000);
});

await server.close();

