import axios from "axios";

const Api = axios.create({
    baseURL: "https://api.github.com/",
    auth: {
        username: 'demil-ade',
        password: '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'
    }
});

export default Api