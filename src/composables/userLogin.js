import { ref } from "vue";
import { taramenAuth } from '../firebase/config'

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
    error.value = null;
    isPending.value = true;

    try {
        const res = await taramenAuth.signInWithEmailAndPassword(email, password);
        error.value = null;
        isPending.value = false;
      
        return res;

    } catch (err) {
        console.log(err.value);
        error.value = "Incorrect login credentials.";
        isPending.value = false;
    }
}

const userLogin = () => {
    return { error, login, isPending }
}

export default userLogin;