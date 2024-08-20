import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_app_hook_deliveries_attempts_postByDelivery_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.app.hook.deliveries.attempts.postByDelivery_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
