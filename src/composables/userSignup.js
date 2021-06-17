import { ref } from "vue";
import { taramenAuth } from '../firebase/config'

const error = ref(null);
const isPending = ref(false);

const signup = async (email, password, displayName) => {
    error.value = null;
    isPending.value = true;

    try {
        const res = await taramenAuth.createUserWithEmailAndPassword(email, password);
        if (!res) {
            throw new Error('Could not complete the signup');
        }
        //update profile
        await res.user.updateProfile({ displayName });
        error.value = null;
        isPending.value = false;

        return res;

    } catch (err) {
        console.log(err.message);
        error.value = err.message;
        isPending.value = false;
    }
}

const userSignup = () => {
    return { error, signup }
}

export default userSignup;