export function getApiUrl(staging: boolean, develop: boolean) {
  return staging ? "https://staging.amadeus.flippi.co" : develop ? "localhost:8080" : "https://amadeus.flippi.co";
}