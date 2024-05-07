import axios from "axios";

axios.defaults.baseURL = 'https://ci-pp5-djangorest-walkthru-81ff52f3facc.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;