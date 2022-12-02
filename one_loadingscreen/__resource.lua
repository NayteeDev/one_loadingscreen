resource_manifest_version '77731fab-63ca-442c-a67b-abc70f28dfa5'


client_script "client.lua"

server_scripts {
  'common.lua'
}

files {
  'index.html',
  'script.js',
  'player.js',
  'style.css',
  'time.js',
  'loadbar.js',
  'img/*.png',
  'images/*.jpg',
  'music/*.mp3',
}

loadscreen 'index.html'
loadscreen_cursor 'yes'
