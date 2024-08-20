import { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiUserPublicEmails } from "../../../structures/IApiUserPublicEmails";
import { email } from "../../../structures/email";
/**
 * List public email addresses for the authenticated user.
 * Lists your publicly visible email address, which you can set with the
 * [Set primary email visibility for the authenticated user](https://docs.github.com/rest/users/emails#set-primary-email-visibility-for-the-authenticated-user)
 * endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `user:email` scope to use this endpoint.
 *
 * @tag users
 * @path user/public_emails
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
  connection: IConnection<get.Headers>,
): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...get.METADATA,
          path: get.path(),
          status: null,
        },
      );
}
export namespace get {
  export type Headers = IApiUserPublicEmails.GetHeader;
  export type Output = email[];

  export const METADATA = {
    method: "GET",
    path: "/user/public_emails",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/user/public_emails";
  export const random = (g?: Partial<typia.IRandomGenerator>): email[] =>
    typia.random<email[]>(g);
  export const simulate = (connection: IConnection<get.Headers>): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}