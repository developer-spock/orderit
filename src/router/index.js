/**
 * Vue-Router Setting
 * 
 * @author PHS
 * @version 1.0, 2021.07.20 first commit
 * @see None
 */
import { createWebHistory, createRouter } from 'vue-router';
import page_not_found from '@/views/error/error';

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes: [
    /************************************************************************************************************************
     * @Description
     * Route 정의
     *                                  [ route 및 route 관련 view 폴더, 파일명 정의 규칙 ]
     * 
     * 1. 최상위 route중 자식 route(children)를 가지고있는 route항목은 
     *    views -> main -> [해당 route이름] 으로 **-index.vue 파일이 존해야 하며 해당 파일은 route-view를 포함한다.
     *    ※ 최상위 route가 자식을 가질 경우 메인 페이지가 존재하는 별도의 root 프로젝트로 본다.
     * 2. 최상위 route중 자식 route(children)를 가지고있는 route항목은 
     *    views -> sub -> [해당 route이름] 으로 폴더가 존재해야 한다.
     * 3. 최상위가 아닌 하위 route중 자식 route(children)를 가지고 있는 route항목은
     *    views -> sub -> [최상위 route이름] -> layout 폴더에 xxxx-layout.vue 파일로 생성하여 사용한다.
     *    반면 route(children)을 가지고 있지 않는 항목은
     *    views -> sub -> [최상위 route이름] -> page 폴더에 xxxx.vue 파일을 생성해서 사용한다.
     * 
     * @Syntax 
     * { path: '/login', component: () => import('@/views/main/login.vue') },
     * { path: '/', name: 'main', components: { default: Main , header: Header, footer: Footer, }, meta: { requiresAuth: true, } },
     *************************************************************************************************************************/    
    { path: "/:catchAll(.*)", component: page_not_found },
    /* Layout is null*/
    { path: "/error", name: "error", component: page_not_found, props: (route) => ({ error: route.query.error }) },
    { path: '/', component: () => import('@/views/default/main/index.vue'), meta: {requiresAuth: false, title:'orderit', },
      children: [
        { path: 'main', name: "main", alias: "/", component: () => import('@/views/default/sub/page/main.vue'), meta: {requiresAuth: true, title:'orderit', },},
        
      ]
    },
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach(async (to, from, next) => {  
  /********************************************************************************************
  * @Description
  *  requireAuth(), Route적용 시 이동하기 전에 로그인 세션을 체크하여 존재유무를 확인
  * @Syntax
  *  routes에 meta: { requiresAuth: true, } 형태로 사용, 
  ********************************************************************************************/ 
  if (to.matched.some(m => m.meta.requiresAuth)){
    try{
      // 토큰 체크로직
      // next({ path: '/loginPage', query: {redirect: to.fullPath}});
      
      next();      
    }catch (err) {
      console.error('[route.beforeEach] : ' + err.message);
    }
  }else{
    next();
  }
})

/* router.afterEach((to, from) => {

}) */

const originalPush = createRouter.prototype.push;

createRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => {
		if (err.name !== 'NavigationDuplicated') throw err;
	});
};

export default router