import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
const webhookURL = 'https://discord.com/api/webhooks/1202323580801519627/CoX2wy7UPe9mvXbvKgFS7cGlCFswRV63gVY1yz0JPa5EMcCo7_Gd0StjY5O94tbFfvVU';

const sendWebhook = async (body: any) => {
	const response = await fetch(webhookURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: 'Forms bot',
			content: `**Dotazník**\n @here\n\n **Name**: ${body.name}\n **Surname**: ${body.surname} \n **Email**: ${body.email} \n **Discord username**: ${body.discord} \n **Role**: ${body.role} \n **About**: ${body.about}\n\n **React with :white_check_mark: or :x: to accept or decline this application.**`
		})
	});

	if (!response.ok) {
		throw new Error(`Failed to send webhook: ${response.status} ${response.statusText}`);
	}
	
};


export const POST: RequestHandler = async (event) => {
	const body = await event.request.json();
	if(!body.name || !body.surname || !body.email || !body.role || !body.about) return json({ error: 'Missing fields' });else{
	sendWebhook(body);
	}
	return json(body);
};
