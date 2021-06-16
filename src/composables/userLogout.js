import { ref } from "vue";
import { taramenAuth } from '../firebase/config'

const error = ref(null);

const logout = async () => { 
    error.value = null;
    try {
        await taramenAuth.signOut();
    } catch (err) {
        console.log(err.message);
        error.value = err.message;
    }
}

const userLogout = () => {
    return { logout, error }
}

export default userLogout;