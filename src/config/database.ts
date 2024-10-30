import { Pool } from 'pg';

const connectionString = 'postgresql://postgres:LkUpTGEnlcIBiMotVknStMyFdjuSmklE@junction.proxy.rlwy.net:17821/railway';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;