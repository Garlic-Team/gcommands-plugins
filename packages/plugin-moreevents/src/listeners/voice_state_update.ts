import { Listener } from 'gcommands';

new Listener({
	event: 'voiceStateUpdate',
	name: 'voiceStateUpdate-moreevents',
	run: (oldState, newState) => {
		const client = oldState.client;
		const member = newState.member;

		if (!oldState.channel && newState.channel) {
			client.emit('voiceChannelJoin', member, newState.channel);
		}

		if (oldState.channel && !newState.channel) {
			client.emit('voiceChannelLeave', member, oldState.channel);
		}

		if (oldState.channel && newState.channel && oldState.channel.id !== newState.channel.id) {
			client.emit(
				'voiceChannelSwitch',
				member,
				oldState.channel,
				newState.channel,
			);
		}

		if (!oldState.mute && newState.mute) {
			const muteType = newState.selfMute ? 'self-muted' : 'server-muted';
			client.emit('voiceChannelMute', member, muteType);
		}

		if (oldState.mute && !newState.mute) {
			const muteType = oldState.selfMute ? 'self-muted' : 'server-muted';
			client.emit('voiceChannelUnmute', member, muteType);
		}

		if (!oldState.deaf && newState.deaf) {
			const deafType = newState.selfDeaf ? 'self-deafened' : 'server-deafened';
			client.emit('voiceChannelDeaf', member, deafType);
		}

		if (oldState.deaf && !newState.deaf) {
			const deafType = oldState.selfDeaf ? 'self-deafened' : 'server-deafened';
			client.emit('voiceChannelUndeaf', member, deafType);
		}

		if (!oldState.streaming && newState.streaming) {
			client.emit('voiceStreamingStart', member, newState.channel);
		}

		if (oldState.streaming && !newState.streaming) {
			client.emit('voiceStreamingStop', member, newState.channel);
		}
		
		if (oldState.selfVideo && !newState.selfVideo) {
			client.emit('voiceCameraDisabled', member, newState.channel);
		}
		
		if (!oldState.selfVideo && newState.selfVideo) {
			client.emit('voiceCameraEnabled', member, newState.channel);
		}
	},
});
