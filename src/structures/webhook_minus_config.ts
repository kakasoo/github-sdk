import { webhook_minus_config_minus_url } from "./webhook_minus_config_minus_url";
import { webhook_minus_config_minus_content_minus_type } from "./webhook_minus_config_minus_content_minus_type";
import { webhook_minus_config_minus_secret } from "./webhook_minus_config_minus_secret";
import { webhook_minus_config_minus_insecure_minus_ssl } from "./webhook_minus_config_minus_insecure_minus_ssl";

/**
 * Configuration object of the webhook
 *
 * @title Webhook Configuration
 */
export type webhook_minus_config = {
  url?: webhook_minus_config_minus_url;
  content_type?: webhook_minus_config_minus_content_minus_type;
  secret?: webhook_minus_config_minus_secret;
  insecure_ssl?: webhook_minus_config_minus_insecure_minus_ssl;
};
