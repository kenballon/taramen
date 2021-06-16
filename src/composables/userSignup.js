import { ref } from "vue";
import { taramenAuth } from '../firebase/config'

const error = ref(null);

const signup = async (email, password, displayName) => {
    error.value = null;

    try {
        const res = await taramenAuth.createUserWithEmailAndPassword(email, password);
        if (!res) {
            throw new Error('Could not complete the signup');
        }
        //update profile
        await res.user.updateProfile({ displayName });
        error.value = null;

        return res;

    } catch (err) {
        console.log(err.message);
        error.value = err.message;
    }
}

const userSignup = () => {
    return { error, signup }
}

export default userSignup;