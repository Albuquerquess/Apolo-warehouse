import knex from 'knex';
import configuration from './Knexfile'

const connection = knex(configuration)

export default connection
