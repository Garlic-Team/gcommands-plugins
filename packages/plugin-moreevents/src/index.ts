import { Plugin, registerDirectory } from 'gcommands';
import * as path from 'path';

declare module 'discord.js' {
	type VoiceChannelMuteType = 'self-muted' | 'server-muted';
	type VoiceChannelDeafType = 'self-deafened' | 'server-deafened';

	interface ClientEvents {
		selectMenu: [SelectMenuInteraction];
		clickButton: [ButtonInteraction];
		autocomplete: [AutocompleteInteraction];
		applicationCommand: [ChatInputCommandInteraction];
		messageContextMenuCommand: [MessageContextMenuCommandInteraction];
		userContextMenuCommand: [UserContextMenuCommandInteraction];

		guildLargeUpdate: [Guild, boolean, boolean];
		guildBoostLevelUp: [Guild, string, string];
		guildBoostLevelDown: [Guild, string, string];
		guildBannerUpdate: [Guild, string, string];
		guildAfkChannelUpdate: [Guild, GuildChannel, GuildChannel];
		guildModeratorNewsChannelUpdate: [Guild, GuildChannel, GuildChannel];
		guildRulesChannelUpdate: [Guild, GuildChannel, GuildChannel];
		guildSystemChannelUpdate: [Guild, GuildChannel, GuildChannel];
		guildSystemEventsUpdate: [Guild, Readonly<SystemChannelFlagsBitField>, Readonly<SystemChannelFlagsBitField>];
		guildVanityURLUpdate: [Guild, string, string];
		guildFeaturesUpdate: [Guild, object, object];
		guildAcronymUpdate: [Guild, string, string];
		guildOwnerUpdate: [Guild, string, string];
		guildMaximumMembersUpdate: [Guild, number, number];
		guildPartnerUpdate: [Guild, boolean, boolean];
		guildVerifyUpdate: [Guild, boolean, boolean];
		guildNameUpdate: [Guild, string, string];
		guildIconUpdate: [Guild, Guild];
		guildDiscoverySplashUpdate: [Guild, Guild];
		guildSplashUpdate: [Guild, Guild];
		guildDescriptionUpdate: [Guild, string, string];
		guildDefaultMessageNotificationsUpdate: [Guild, GuildDefaultMessageNotifications, GuildDefaultMessageNotifications];
		guildExplicitContentFilterUpdate: [Guild, GuildExplicitContentFilter, GuildExplicitContentFilter];
		guildMaximumMembersIncreased: [Guild, number, number];
		guildMaximumMembersDecreased: [Guild, number, number];
		guildMaxVideoChannelUsersIncreased: [Guild, number, number];
		guildMaxVideoChannelUsersDecreased: [Guild, number, number];
		guildMFAProtectionDisabled: [Guild, GuildMFALevel, GuildMFALevel];
		guildMFAProtectionEnabled: [Guild, GuildMFALevel, GuildMFALevel];
		guildNSFWLevelDecreased: [Guild, GuildNSFWLevel, GuildNSFWLevel];
		guildNSFWLevelIncreased: [Guild, GuildNSFWLevel, GuildNSFWLevel];
		guildVerificationLevelIncreased: [Guild, GuildVerificationLevel, GuildVerificationLevel];
		guildVerificationLevelDecreased: [Guild, GuildVerificationLevel, GuildVerificationLevel];
		guildLocaleUpdate: [Guild, Locale, Locale];
		guildBoostProgressBarUpdate: [Guild, boolean, boolean];
		guildShardUpdate: [Guild, WebSocketShard, WebSocketShard];
		guildWidgetUpdate: [Guild, boolean, boolean];
		guildWidgetChannelUpdate: [Guild, GuildChannel, GuildChannel];
		
		threadStateUpdate: [ThreadChannel, ThreadChannel];
		threadNameUpdate: [ThreadChannel, string, string];
		threadLockStateUpdate: [ThreadChannel, ThreadChannel];
		threadRateLimitPerUserUpdate: [ThreadChannel, number, number];
		threadAutoArchiveDurationUpdate: [
			ThreadChannel,
			number | string,
			number | string,
		];

		voiceChannelJoin: [GuildMember, VoiceBasedChannel];
		voiceChannelLeave: [GuildMember, VoiceBasedChannel];
		voiceChannelSwitch: [GuildMember, VoiceBasedChannel, VoiceBasedChannel];
		voiceChannelMute: [GuildMember, VoiceChannelMuteType];
		voiceChannelUnmute: [GuildMember, VoiceChannelMuteType];
		voiceChannelDeaf: [GuildMember, VoiceChannelDeafType];
		voiceChannelUndeaf: [GuildMember, VoiceChannelDeafType];
		voiceStreamingStart: [GuildMember, VoiceBasedChannel];
		voiceStreamingStop: [GuildMember, VoiceBasedChannel];
		voiceCameraDisabled: [GuildMember, VoiceBasedChannel];
		voiceCameraEnabled: [GuildMember, VoiceBasedChannel];
		
		guildMemberBoost: [GuildMember, Date, Date];
		guildMemberUnboost: [GuildMember, Date, Date];
		guildMemberNicknameUpdate: [GuildMember, string, string];
		guildMemberTimeoutAdded: [GuildMember, Date, Date];
		guildMemberTimeoutRemoved: [GuildMember, Date, Date];
		guildMemberTimeoutUpdate: [GuildMember, Date, Date];
		guildMemberAcceptShipScreening: [GuildMember];
		guildMemberRoleUpdate: [GuildMember, GuildMemberRoleManager, GuildMemberRoleManager];
		guildMemberGuildAvatarUpdate: [GuildMember, string, string];
		guildMemberFlagsUpdate: [GuildMember, Readonly<GuildMemberFlagsBitField>, Readonly<GuildMemberFlagsBitField>];

		userAvatarUpdate: [User, string, string];
		userUsernameUpdate: [User, string, string];
		userDiscriminatorUpdate: [User, string, string];
		userFlagsUpdate: [User, Readonly<UserFlags>, Readonly<UserFlags>];
		userBannerUpdate: [User, string, string];

		rolePositionUpdate: [Role, number, number];
		rolePermissionsUpdate: [Role, bigint, bigint];
		roleColorUpdate: [Role, string, string];
		roleEditUpdate: [Role, boolean, boolean];
		roleHoistUpdate: [Role, boolean, boolean];
		roleIconUpdate: [Role, string, string];
		roleManageUpdate: [Role, boolean, boolean];
		roleMentionUpdate: [Role, boolean, boolean];
		roleNameUpdate: [Role, string, string];
	}
}

new Plugin('@gcommands/plugin-moreevents', () => {
	registerDirectory(path.join(__dirname, 'listeners'));
});
