const HASURA_GRAPHQL_ENGINE_HOSTNAME =
  process.env.HASURA_GRAPHQL_ENGINE_HOSTNAME;
const HASURA_CLOUD_HOSTNAME = process.env.HASURA_CLOUD_HOSTNAME;
const CALLBACK_PATH = process.env.CALLBACK_PATH;
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;

const scheme = (proto: string) => {
  return window.location.protocol === "https:" ? `${proto}s` : proto;
};

export const GRAPHQL_URL = `${scheme(
  "http"
)}://${HASURA_CLOUD_HOSTNAME}/v1/graphql`;

export const REALTIME_GRAPHQL_URL = `${scheme(
  "ws"
)}://${HASURA_CLOUD_HOSTNAME}/${GRAPHQL_ENDPOINT}`;

export const AUTH_CLIENT_ID = process.env.AUTH_CLIENT_ID;
export const AUTH_DOMAIN = process.env.AUTH_DOMAIN;

export const CALLBACK_URL = `${scheme(
  "http"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/${CALLBACK_PATH}`;
