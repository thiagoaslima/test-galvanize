export interface CacheRepository<Key extends string, Value = any> {
  get: (key: Key) => Value,
  save: (data: Record<Key, Value>) => void
}
