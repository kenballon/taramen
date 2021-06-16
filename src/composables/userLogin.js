import { ref } from "vue";
import { taramenAuth } from '../firebase/config'

const error = ref(null);

const login = async (email, password) => {
    error.value = null;
    try {
        const res = await taramenAuth.signInWithEmailAndPassword(email, password);
        error.value = null;
      
        return res;

    } catch (err) {
        console.log(err.value);
        error.value = "Incorrect login credentials."
    }
}

const userLogin = () => {
    return { error, login }
}

export default userLogin;