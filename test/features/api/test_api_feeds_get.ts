import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { feed } from "@ORGANIZATION/PROJECT-api/lib/structures/feed";

export async function test_api_feeds_get(connection: api.IConnection) {
  const output: feed = await api.functional.feeds.get(connection);
  typia.assert(output);
}
