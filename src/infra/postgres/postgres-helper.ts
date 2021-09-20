import { Client, ClientConfig } from 'pg';

class PostgresHelper {
  client: Client | null = null;

  async connect (config: ClientConfig): Promise<void> {
    this.client = new Client(config);
    await this.client.connect()
  }
  
  async disconnect (): Promise<void> {
    await this.client?.end();
    this.client = null;
  }
}

const postgresHelper = new PostgresHelper();

export { postgresHelper };
