import { Listener } from 'gcommands';

new Listener({
	event: 'roleUpdate',
	name: 'roleUpdate-moreevents',
	run: (oldRole, newRole) => {
		const client = oldRole.client;

		if (oldRole.rawPosition !== newRole.rawPosition) {
			client.emit(
				'rolePositionUpdate',
				newRole,
				oldRole.rawPosition,
				newRole.rawPosition
			);
		}

		if (oldRole.permissions.bitfield !== newRole.permissions.bitfield) {
			client.emit(
				'rolePermissionsUpdate',
				newRole,
				oldRole.permissions.bitfield,
				newRole.permissions.bitfield
			);
		}
		
		if (oldRole.hexColor !== newRole.hexColor) {
			client.emit(
				'roleColorUpdate',
				newRole,
				oldRole.hexColor,
				newRole.hexColor
			);
		}
		
		if (oldRole.editable !== newRole.editable) {
			client.emit(
				'roleEditUpdate',
				newRole,
				oldRole.editable,
				newRole.editable
			);
		}
		
		if (oldRole.hoist !== newRole.hoist) {
			client.emit(
				'roleHoistUpdate',
				newRole,
				oldRole.hoist,
				newRole.hoist
			);
		}
		
		if (oldRole.icon !== newRole.icon) {
			client.emit(
				'roleIconUpdate',
				newRole,
				oldRole.icon,
				newRole.icon
			);
		}
		
		if (oldRole.managed !== newRole.managed) {
			client.emit(
				'roleManageUpdate',
				newRole,
				oldRole.managed,
				newRole.managed
			);
		}
		
		if (oldRole.mentionable !== newRole.mentionable) {
			client.emit(
				'roleMentionUpdate',
				newRole,
				oldRole.mentionable,
				newRole.mentionable
			);
		}
		
		if (oldRole.name !== newRole.name) {
			client.emit(
				'roleNameUpdate',
				newRole,
				oldRole.name,
				newRole.name
			);
		}
	}
});
