export function getApiUrl(staging: boolean, develop: boolean) {
  return staging ? "https://staging.amadeus.flippi.co/api" : develop ? "localhost:8080/api" : "https://amadeus.flippi.co/api";
}