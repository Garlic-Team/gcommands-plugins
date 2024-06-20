import { Listener } from 'gcommands';

new Listener({
	event: 'guildUpdate',
	name: 'guildUpdate-moreEvents',
	run: (oldGuild, newGuild) => {
		const client = oldGuild.client;

		if (oldGuild.large !== newGuild.large) {
			client.emit(
				'guildLargeUpdate',
				newGuild,
				oldGuild.large,
				newGuild.large
			);
		}
		
		if (oldGuild.premiumTier < newGuild.premiumTier) {
			client.emit(
				'guildBoostLevelUp',
				newGuild,
				oldGuild.premiumTier,
				newGuild.premiumTier
			);
		}

		if (oldGuild.premiumTier > newGuild.premiumTier) {
			client.emit(
				'guildBoostLevelDown',
				newGuild,
				oldGuild.premiumTier,
				newGuild.premiumTier
			);
		}

		if (oldGuild.banner !== newGuild.banner) {
			client.emit(
				'guildBannerUpdate',
				newGuild,
				oldGuild.banner,
				newGuild.banner
			);
		}

		if (oldGuild.afkChannelId !== newGuild.afkChannelId) {
			client.emit(
				'guildAfkChannelUpdate',
				newGuild,
				oldGuild.afkChannel,
				newGuild.afkChannel
			);
		}
		
		if (oldGuild.publicUpdatesChannelId !== newGuild.publicUpdatesChannelId) {
			client.emit(
				'guildModeratorNewsChannelUpdate',
				newGuild,
				oldGuild.publicUpdatesChannel,
				newGuild.publicUpdatesChannel
			);
		}
		
		if (oldGuild.rulesChannelId !== newGuild.rulesChannelId) {
			client.emit(
				'guildRulesChannelUpdate',
				newGuild,
				oldGuild.rulesChannel,
				newGuild.rulesChannel
			);
		}
		
		if (oldGuild.systemChannelId !== newGuild.systemChannelId) {
			client.emit(
				'guildSystemChannelUpdate',
				newGuild,
				oldGuild.systemChannel,
				newGuild.systemChannel
			);
		}
		
		if (oldGuild.systemChannelFlags.bits !== newGuild.systemChannelFlags.bits) {
			client.emit(
				'guildSystemEventsUpdate',
				newGuild,
				oldGuild.systemChannelFlags,
				newGuild.systemChannelFlags
			);
		}

		if (oldGuild.vanityURLCode !== newGuild.vanityURLCode) {
			client.emit(
				'guildVanityURLUpdate',
				newGuild,
				oldGuild.vanityURLCode,
				newGuild.vanityURLCode
			);
		}

		if (oldGuild.features.length !== newGuild.features.length) {
			client.emit(
				'guildFeaturesUpdate',
				newGuild,
				oldGuild.features,
				newGuild.features
			);
		}

		if (oldGuild.nameAcronym !== newGuild.nameAcronym) {
			client.emit(
				'guildAcronymUpdate',
				newGuild,
				oldGuild.nameAcronym,
				newGuild.nameAcronym
			);
		}

		if (oldGuild.ownerId !== newGuild.ownerId) {
			client.emit(
				'guildOwnerUpdate',
				newGuild,
				oldGuild.ownerId,
				newGuild.ownerId
			);
		}

		if (oldGuild.maximumMembers !== newGuild.maximumMembers) {
			client.emit(
				'guildMaximumMembersUpdate',
				newGuild,
				oldGuild.maximumMembers,
				newGuild.maximumMembers
			);
		}

		if (oldGuild.partnered !== newGuild.partnered) {
			client.emit(
				'guildPartnerUpdate',
				newGuild,
				oldGuild.partnered,
				newGuild.partnered
			);
		}

		if (oldGuild.verified !== newGuild.verified) {
			client.emit(
				'guildVerifyUpdate',
				newGuild,
				oldGuild.verified,
				newGuild.verified
			);
		}
		
		if (oldGuild.name !== newGuild.name) {
			client.emit(
				'guildNameUpdate',
				newGuild,
				oldGuild.name,
				newGuild.name
			);
		}
		
		if (oldGuild.icon !== newGuild.icon) {
			client.emit(
				'guildIconUpdate',
				newGuild,
				oldGuild
			);
		}
		
		if (oldGuild.discoverySplash !== newGuild.discoverySplash) {
			client.emit(
				'guildDiscoverySplashUpdate',
				newGuild,
				oldGuild
			);
		}
		
		if (oldGuild.splash !== newGuild.splash) {
			client.emit(
				'guildSplashUpdate',
				newGuild,
				oldGuild
			);
		}
		
		if (oldGuild.description !== newGuild.description) {
			client.emit(
				'guildDescriptionUpdate',
				newGuild,
				oldGuild.description,
				newGuild.description
			);
		}
		
		if (oldGuild.defaultMessageNotifications !== newGuild.defaultMessageNotifications) {
			client.emit(
				'guildDefaultMessageNotificationsUpdate',
				newGuild,
				oldGuild.defaultMessageNotifications,
				newGuild.defaultMessageNotifications
			);
		}
		
		if (oldGuild.explicitContentFilter !== newGuild.explicitContentFilter) {
			client.emit(
				'guildExplicitContentFilterUpdate',
				newGuild,
				oldGuild.explicitContentFilter,
				newGuild.explicitContentFilter
			);
		}
		
		if (oldGuild.maximumMembers > newGuild.maximumMembers) {
			client.emit(
				'guildMaximumMembersIncreased',
				newGuild,
				oldGuild.maximumMembers,
				newGuild.maximumMembers
			);
		}
		
		if (oldGuild.maximumMembers < newGuild.maximumMembers) {
			client.emit(
				'guildMaximumMembersDecreased',
				newGuild,
				oldGuild.maximumMembers,
				newGuild.maximumMembers
			);
		}
		
		if (oldGuild.maxVideoChannelUsers > newGuild.maxVideoChannelUsers) {
			client.emit(
				'guildMaxVideoChannelUsersIncreased',
				newGuild,
				oldGuild.maxVideoChannelUsers,
				newGuild.maxVideoChannelUsers
			);
		}
		
		if (oldGuild.maxVideoChannelUsers < newGuild.maxVideoChannelUsers) {
			client.emit(
				'guildMaxVideoChannelUsersDecreased',
				newGuild,
				oldGuild.maxVideoChannelUsers,
				newGuild.maxVideoChannelUsers
			);
		}
		
		if (oldGuild.mfaLevel > newGuild.mfaLevel) {
			client.emit(
				'guildMFAProtectionDisabled',
				newGuild,
				oldGuild.mfaLevel,
				newGuild.mfaLevel
			);
		}
		
		if (oldGuild.mfaLevel < newGuild.mfaLevel) {
			client.emit(
				'guildMFAProtectionEnabled',
				newGuild,
				oldGuild.mfaLevel,
				newGuild.mfaLevel
			);
		}
		
		if (oldGuild.nsfwLevel > newGuild.nsfwLevel) {
			client.emit(
				'guildNSFWLevelDecreased',
				newGuild,
				oldGuild.nsfwLevel,
				newGuild.nsfwLevel
			);
		}
		
		if (oldGuild.nsfwLevel < oldGuild.nsfwLevel) {
			client.emit(
				'guildNSFWLevelIncreased',
				newGuild,
				oldGuild.nsfwLevel,
				newGuild.nsfwLevel
			);
		}
		
		if (oldGuild.verificationLevel > newGuild.verificationLevel) {
			client.emit(
				'guildVerificationLevelIncreased',
				newGuild,
				oldGuild.verificationLevel,
				newGuild.verificationLevel
			);
		}
		
		if (oldGuild.verificationLevel < newGuild.verificationLevel) {
			client.emit(
				'guildVerificationLevelDecreased',
				newGuild,
				oldGuild.verificationLevel,
				newGuild.verificationLevel
			);
		}
		
		if (oldGuild.preferredLocale !== newGuild.preferredLocale) {
			client.emit(
				'guildLocaleUpdate',
				newGuild,
				oldGuild.preferredLocale,
				newGuild.preferredLocale
			);
		}
		
		if (oldGuild.premiumProgressBarEnabled !== newGuild.premiumProgressBarEnabled) {
			client.emit(
				'guildBoostProgressBarUpdate',
				newGuild,
				oldGuild.premiumProgressBarEnabled,
				newGuild.premiumProgressBarEnabled
			);
		}
		
		if (oldGuild.shardId !== newGuild.shardId) {
			client.emit(
				'guildShardUpdate',
				newGuild,
				oldGuild.shard,
				newGuild.shard
			);
		}
		
		if (oldGuild.widgetEnabled !== newGuild.widgetEnabled) {
			client.emit(
				'guildWidgetUpdate',
				newGuild,
				oldGuild.widgetEnabled,
				newGuild.widgetEnabled
			);
		}
		
		if (oldGuild.widgetChannelId !== newGuild.widgetChannelId) {
			client.emit(
				'guildWidgetChannelUpdate',
				newGuild,
				oldGuild.widgetChannel,
				newGuild.widgetChannel
			);
		}
	},
});
