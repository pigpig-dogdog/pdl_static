import router from '@/router';
import { getToken } from '@/utils/user';
import store from '@/store';
const hasToken = getToken();

router.beforeEach(async (to, from, next) => {
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' });
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasUsername = store.getters.username && store.getters.username.length > 0;
      if (hasUsername) {
        next();
      } else {
        try {
          next({ path: '/login' });
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/logout');
          Element.Message.error(error || 'Has Error');
          next(`/login?redirect=${to.path}`);
        }
      }
    }
  } else {
    /*  has no token */
    this.$router.push({path: '/login'});
    // to.path = '/login';
  }
});
