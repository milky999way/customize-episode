const env = process.env.STAGE || 'rc'

const local = {
  serverName: 'localhost:3000',
  staticPath: 'http://localhost:3000',
  ddbName: 'Episode.RC.FeedBack',
}

const rc = {
  serverName: 'rc-www.xxx.com',
  staticPath: 'https://static.xxx.com/rc-episode',
  ddbName: 'Episode.RC.FeedBack',
}

const live = {
  serverName: 'www.xxx.com',
  staticPath: 'https://static.xxx.com/episode',
  ddbName: 'Episode.Live.FeedBack',
}

const config = { local, rc, live }

module.exports = config[env]