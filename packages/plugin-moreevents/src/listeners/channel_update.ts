import type { GuildChannel, TextChannel, VoiceChannel } from 'discord.js';
import { Listener } from 'gcommands';

new Listener({
	event: 'channelUpdate',
	name: 'channelUpdate-moreEvents',
	run: (oldChannel, newChannel) => {
		const client = oldChannel.client;

		const guildOldChannel = oldChannel as GuildChannel;
		const guildNewChannel = newChannel as GuildChannel;

		
		
		if (!guildOldChannel.permissionOverwrites.cache.equals(guildOldChannel.permissionOverwrites.cache)) {
			client.emit(
				'guildChannelPermissionsUpdate',
				newChannel,
				guildOldChannel.permissionOverwrites,
				guildNewChannel.permissionOverwrites
			);
		}

		if (guildOldChannel.type === 0 && (guildOldChannel as TextChannel).topic !== (guildNewChannel as TextChannel).topic) {
			client.emit(
				'guildChannelTopicUpdate',
				newChannel,
				(guildOldChannel as TextChannel).topic,
				(guildNewChannel as TextChannel).topic
			);
		}

		if (guildOldChannel.type === 0 && (guildOldChannel as TextChannel).nsfw !== (guildNewChannel as TextChannel).nsfw) {
			client.emit(
				'guildChannelNSFWUpdate',
				newChannel,
				(guildOldChannel as TextChannel).nsfw,
				(guildNewChannel as TextChannel).nsfw
			);
		}

		if (oldChannel.type !== newChannel.type) {
			client.emit(
				'guildChannelTypeUpdate',
				newChannel,
				oldChannel.type,
				newChannel.type
			);
		}

		if (guildOldChannel.type === 2 && (guildOldChannel as VoiceChannel).userLimit !== (guildNewChannel as VoiceChannel).userLimit) {
			client.emit(
				'guildChannelUserLimitUpdate',
				newChannel,
				(guildOldChannel as VoiceChannel).userLimit,
				(guildNewChannel as VoiceChannel).userLimit
			);
		}

		if (guildOldChannel.type === 2 && (guildOldChannel as VoiceChannel).bitrate !== (guildNewChannel as VoiceChannel).bitrate) {
			client.emit(
				'guildChannelBitrateUpdate',
				newChannel,
				(guildOldChannel as VoiceChannel).bitrate,
				(guildNewChannel as VoiceChannel).bitrate
			);
		}
		
		if (guildOldChannel.name !== guildNewChannel.name) {
			client.emit(
				'guildChannelNameUpdate',
				newChannel,
				guildOldChannel.name,
				guildNewChannel.name
			);
		}
		
		if (guildOldChannel.parentId !== guildNewChannel.parentId) {
			client.emit(
				'guildChannelCategoryUpdate',
				newChannel,
				guildOldChannel.parent,
				guildNewChannel.parent
			);
		}
		
		if (guildOldChannel.permissionsLocked !== guildNewChannel.permissionLocked) {
			client.emit(
				'guildChannelSynchronizationUpdate',
				newChannel,
				guildOldChannel.permissionsLocked,
				guildNewChannel.permissionsLocked
			);
		}
		
		if (guildOldChannel.position !== guildNewChannel.position) {
			client.emit(
				'guildChannelPositionUpdate',
				newChannel,
				guildOldChannel.position,
				guildNewChannel.position
			);
		}
		
		if (guildOldChannel.rawPosition !== guildNewChannel.rawPosition) {
			client.emit(
				'guildChannelRawPositionUpdate',
				newChannel,
				guildOldChannel.rawPosition,
				guildNewChannel.rawPosition
			);
		}
	}
});
