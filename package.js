Package.describe({
	name: 'rkhaslarov:md5',
	version: '1.0.0',
	summary: 'Javascript implementation of MD5 function for MeteorJS.',
	git: 'https://github.com/rkhaslarov/md5',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use(['ecmascript']);
	api.addFiles(['md5.js']);
	api.export('md5');
});
