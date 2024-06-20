import { Listener } from 'gcommands';

new Listener({
	event: 'interactionCreate',
	name: 'interactionCreate-moreevents',
	run: interaction => {
		const client = interaction.client;

		if (interaction.isButton()) {
			client.emit('clickButton', interaction);
		} else if (interaction.isAnySelectMenu()) {
			client.emit('selectMenu', interaction);
		} else if (interaction.isAutocomplete()) {
			client.emit('autocomplete', interaction);
		} else if (interaction.isChatInputCommand()) {
			client.emit('applicationCommand', interaction);
		} else if (interaction.isMessageContextMenuCommand()) {
			client.emit('messageContextMenuCommand', interaction);
		} else if (interaction.isUserContextMenuCommand()) {
			client.emit('userContextMenuCommand', interaction);
		}
	},
});
