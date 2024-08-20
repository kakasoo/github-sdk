export namespace IApiUsersHovercard {
  export type GetHeader = {
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
  export type GetQuery = {
    /**
     * Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`.
     */
    subject_id?: string;
  };
}
