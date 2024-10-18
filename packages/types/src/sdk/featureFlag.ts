export enum FeatureFlag {
  PER_CREATOR_PER_USER_PRICE = "PER_CREATOR_PER_USER_PRICE",
  PER_CREATOR_PER_USER_PRICE_ALERT = "PER_CREATOR_PER_USER_PRICE_ALERT",
  AUTOMATION_BRANCHING = "AUTOMATION_BRANCHING",
  SQS = "SQS",
  AI_CUSTOM_CONFIGS = "AI_CUSTOM_CONFIGS",
  DEFAULT_VALUES = "DEFAULT_VALUES",
  ENRICHED_RELATIONSHIPS = "ENRICHED_RELATIONSHIPS",
  TABLES_DEFAULT_ADMIN = "TABLES_DEFAULT_ADMIN",
}

export interface TenantFeatureFlags {
  [key: string]: FeatureFlag[]
}
