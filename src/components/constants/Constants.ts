export enum HttpStatusCodeEnum {
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,
  Ok = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  ImUsed = 226,
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  SwitchProxy = 306,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  PayloadTooLarge = 413,
  UriTooLong = 414,
  UnsupportedMediaType = 415,
  RangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  IAmATeapot = 418,
  MisdirectedRequest = 421,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HttpVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
}

export const SwalSuccessMsg = {
  title: 'Success',
  defaultMsg: 'Successful',
  icon: 'success',
};

export const SwalConfirmMsg = {
  title: 'Confirmation',
  defaultMsg: 'Searching Successful',
  icon: 'warning'
};

export const SwalFailMsg = {
  title: 'Failed',
  defaultMsg: 'Fail',
  noRecord: 'No Records Found',
  serverError: 'Problem connecting to the server, Please refresh',
  noAccess: "You don't have access to this resource.",
  icon: 'error',
};

export const SwalButtons = {
  btnYes: 'Yes',
  btnNo: 'No',
  btnCancel: 'Cancel',
  btnConfirm: 'Confirm',
}

export const PROMPT_MSG = {
  NoProfile: 'No Profile Available'
}


