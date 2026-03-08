import { config } from 'dotenv'
import { defineConfig, env } from 'prisma/config'
import { resolve } from 'path'

config({ path: resolve(__dirname, '.env.local') })

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
  },
})
