import { Listener } from 'gcommands';

new Listener({
	event: 'guildMemberUpdate',
	name: 'guildMemberUpdate-moreEvents',
	run: (oldMember, newMember) => {
		const client = oldMember.client;

		if (!oldMember.premiumSince && newMember.premiumSince) {
			client.emit(
				'guildMemberBoost',
				newMember,
				oldMember.premiumSince,
				newMember.premiumSince
			);
		}

		if (oldMember.premiumSince && !newMember.premiumSince) {
			client.emit(
				'guildMemberUnboost',
				newMember,
				oldMember.premiumSince,
				newMember.premiumSince
			);
		}

		if (oldMember.nickname !== newMember.nickname) {
			client.emit(
				'guildMemberNicknameUpdate',
				newMember,
				oldMember.nickname,
				newMember.nickname
			);
		}

		if (!oldMember.isCommunicationDisabled() && newMember.isCommunicationDisabled()) {
			client.emit(
				'guildMemberTimeoutAdded',
				newMember,
				oldMember.communicationDisabledUntil,
				newMember.communicationDisabledUntil
			);
		}

		if (oldMember.isCommunicationDisabled() && !newMember.isCommunicationDisabled()) {
			client.emit(
				'guildMemberTimeoutRemoved',
				newMember,
				oldMember.communicationDisabledUntil,
				null
			);
		}

		if (oldMember.isCommunicationDisabled() && oldMember.communicationDisabledUntilTimestamp !== newMember.communicationDisabledUntilTimestamp) {
			client.emit(
				'guildMemberTimeoutUpdate',
				newMember,
				oldMember.communicationDisabledUntil,
				newMember.communicationDisabledUntil
			);
		}

		if (newMember.pending === false) {
			client.emit('guildMemberAcceptShipScreening', newMember);
		}
		
		if (!oldMember.roles.cache.equals(newMember.roles.cache)) {
			client.emit(
				'guildMemberRoleUpdate',
				newMember,
				oldMember.roles,
				newMember.roles
			);
		}
		
		if (oldMember.avatar !== newMember.avatar && newMember.avatar !== newMember.user.avatar) {
			client.emit(
				'guildMemberGuildAvatarUpdate',
				newMember,
				oldMember.avatar,
				newMember.avatar
			);
		}
		
		if (oldMember.flags.bits !== newMember.flags.bits) {
			client.emit(
				'guildMemberFlagsUpdate',
				newMember,
				oldMember.flags,
				newMember.flags
			);
		}
	},
});
