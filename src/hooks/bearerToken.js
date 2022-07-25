import axios from "axios";

const BASE_URL = "https://test.api.amadeus.com/v1/security/oauth2/token";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}
);

