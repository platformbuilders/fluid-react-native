import { Sentry } from '.';

/**
 * Generic function to be used with Sentry. Under the hood, it's called the `addBreadcrumb` method
 * from Sentry API, which adds logs about user's actions prior to an error or crash.
 *
 * Read [this research doc](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/89ba7171-90e3-4e5b-9856-fe36be0bed14/Sentry_-_Sentry_API_study_%28addBreadcrumb%29.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230119T180359Z&X-Amz-Expires=86400&X-Amz-Signature=b0395d3285cebaa0562ac64b30ed50a3803928181b7a40428c81dfd000442f03&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Sentry_-_Sentry_API_study_%28addBreadcrumb%29.pdf%22&x-id=GetObject)
 * to get more information about it's usage.
 * @param param0
 * @returns
 */
export const handleSentryTraceability = ({
  useSentryTraceability = false,
  category,
  data,
  event_id,
  level = 'info',
  message,
  timestamp,
  type,
}: HandleSentryTraceabilityProps) => {
  if (!useSentryTraceability) return;

  Sentry.addBreadcrumb({
    category,
    data,
    event_id,
    level,
    message,
    timestamp,
    type,
  });
};
