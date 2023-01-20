/**
 * These options have been copyed from Sentry's addBredcrumb API's, so be aware that it might
 * get outdated as they update new values in the Sentry SDK API.
 */
declare type SentryBreadcrumbsSeverityLevels = 'debug'| 'error'| 'fatal'| 'info' | 'log'| 'warning';

/**
 * The great majority of breadcrumbs categories adopted as the default pattern
 * are the component names from `fluid-react-native`.
 */
declare type SentryBreadcrumbsCategories = 'touchable' | 'checkbox' | 'radio';

declare type HandleSentryTraceabilityProps = {
  /**
   * Feature flag for touchable press tracking on Sentry. Internally it uses the `addBreadcrumb`
   * function to trigger the logs.
   *
   * Default is `false`.
   */
  useSentryTraceability: boolean;
  data?: { [x: string]: any };
  event_id?: string;
  timestamp?: number;
  message?: string;
  type?: string;
  category?: SentryBreadcrumbsCategories;
  level?: SentryBreadcrumbsSeverityLevels;
};
