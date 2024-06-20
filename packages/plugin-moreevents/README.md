<div align="center">
    
   # <img src="https://cdn.discordapp.com/avatars/834822955229380619/7d0142158babe0375e7cc633e87c06d4.png" height="30"> GCommands Plugin More Events
   ### Official plugin for GCommands
    
  <br />
  <p>
    <a href="https://www.npmjs.com/package/@gcommands/plugin-moreevents"><img src="https://nodei.co/npm/@gcommands/plugin-moreevents.png?downloads=true&stars=true" alt="NPM Banner"></a>
    <br />
    <a href="https://discord.gg/AjKJSBbGm2"><img src="https://discord.com/api/guilds/833628077556367411/embed.png?style=banner2" /></a>
  </p>
  <p>
    <a href="https://ko-fi.com/H2H05FNRL"><img src="https://img.shields.io/badge/Kofi-Donate-yellow?style=for-the-badge" height="30" /></a>
    <a href="https://github.com/Garlic-Team/gcommands-addons"><img src="https://img.shields.io/badge/Open-Source-blue?style=for-the-badge" height="30" /></a>
    <img src="https://img.shields.io/badge/Made%20With-TypeScript-red?style=for-the-badge" height="30" />
  </p>
</div>

---

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install @gcommands/plugin-moreevents
yarn add @gcommands/plugin-moreevents
pnpm add @gcommands/plugin-moreevents
```

```js
const { Plugins } = require('gcommands');
require('@gcommands/plugin-moreevents'); // typings inject

Plugins.search(__dirname);
```

Now when you create a listener, more events will show up.

List of events:
- selectMenu
- clickButton
- autocomplete
- applicationCommand
- messageContextMenuCommand
- userContextMenuCommand

- guildLargeUpdate
- guildBoostLevelUp
- guildBoostLevelDown
- guildBannerUpdate
- guildAfkChannelUpdate
- guildModeratorNewsChannelUpdate
- guildRulesChannelUpdate
- guildSystemChannelUpdate
- guildSystemEventsUpdate
- guildVanityURLUpdate
- guildFeaturesUpdate
- guildAcronymUpdate
- guildOwnerUpdate
- guildMaximumMembersUpdate
- guildPartnerUpdate
- guildVerifyUpdate
- guildNameUpdate
- guildIconUpdate
- guildDiscoverySplashUpdate
- guildSplashUpdate
- guildDescriptionUpdate
- guildDefaultMessageNotificationsUpdate
- guildExplicitContentFilterUpdate
- guildMaximumMembersIncreased
- guildMaximumMembersDecreased
- guildMaxVideoChannelUsersIncreased
- guildMaxVideoChannelUsersDecreased
- guildMFAProtectionDisabled
- guildMFAProtectionEnabled
- guildNSFWLevelDecreased
- guildNSFWLevelIncreased
- guildVerificationLevelIncreased
- guildVerificationLevelDecreased
- guildLocaleUpdate
- guildBoostProgressBarUpdate
- guildShardUpdate
- guildWidgetUpdate
- guildWidgetChannelUpdate

- threadStateUpdate
- threadNameUpdate
- threadLockStateUpdate
- threadRateLimitPerUserUpdate
- threadAutoArchiveDurationUpdate

- voiceChannelJoin
- voiceChannelLeave
- voiceChannelSwitch
- voiceChannelMute
- voiceChannelUnmute
- voiceChannelDeaf
- voiceChannelUndeaf
- voiceStreamingStart
- voiceStreamingStop
- voiceCameraDisabled
- voiceCameraEnabled

- guildMemberBoost
- guildMemberUnboost
- guildMemberNicknameUpdate
- guildMemberTimeoutAdded
- guildMemberTimeoutRemoved
- guildMemberTimeoutUpdate
- guildMemberAcceptShipScreening
- guildMemberRoleUpdate
- guildMemberGuildAvatarUpdate
- guildMemebrFlagsUpdate

- userAvatarUpdate
- userUsernameUpdate
- userDiscriminatorUpdate
- userFlagsUpdate
- userBannerUpdate

- rolePositionUpdate
- rolePermissionsUpdate
- roleColorUpdate
- roleEditUpdate
- roleHoistUpdate
- roleIconUpdate
- roleManageUpdate
- roleMentionUpdate
- roleNameUpdate
