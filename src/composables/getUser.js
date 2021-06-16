import { ref } from "vue";
import { taramenAuth } from '../firebase/config'

const user = ref(taramenAuth.currentUser);

taramenAuth.onAuthStateChanged(_user => {   
    user.value = _user;
});

const getUser = () => {
    return { user }
}

export default getUser;