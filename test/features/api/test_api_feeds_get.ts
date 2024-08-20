import api from "@kakasoo/github-sdk";
import { feed } from "@kakasoo/github-sdk/lib/structures/feed";
import typia from "typia";

export async function test_api_feeds_get(connection: api.IConnection) {
  const output: feed = await api.functional.feeds.get(connection);
  typia.assert(output);
}
