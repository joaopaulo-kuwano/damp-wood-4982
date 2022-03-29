import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yqrgbqvtmirlwtbfhghw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxcmdicXZ0bWlybHd0YmZoZ2h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg1MTk2MzUsImV4cCI6MTk2NDA5NTYzNX0.ZkdpV4CgRV4rMSkHKfhOw34mRQzupqy7Bs76ymZxsxw'
// const pass = 'Ukb64SjyZJacdvhZKXeS8sKPGtpU9uhJjaY9YJUW'

export class SupaSDK {
  client!: SupabaseClient

  constructor () {
    if (!this.client) { this.client = createClient(supabaseUrl, supabaseKey) }
  }

  getClient () {
    return this.client
  }
}
