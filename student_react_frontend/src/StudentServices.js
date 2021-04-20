import axios from "axios";

const STUDENT_API_URL = "http://localhost:8080/api/students";

class StudentServices{
    getStudent(){
        return axios.get(STUDENT_API_URL);
    }
}

export default new StudentServices();