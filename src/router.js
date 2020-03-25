import Vue from 'vue';
import VueRouter from 'vue-router';
import Todos from './components/Todos'
import Users from './components/Users'
import Photos from './components/Photos'
import AddUser from './components/AddUser'
import DetailUser from './components/DetailUser'
import DetailTodo from './components/DetailTodo'
import EditTodo from './components/EditTodo'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'ok',
            component: Todos
        },{
            path: '/todo/:id',
            name: 'detailTodo',
            component: DetailTodo,
            children: [
                {
                    path: 'edit',
                    name: 'edit-todo',
                    component: EditTodo
                }
            ]
        },{
            path: '/users',
            name: 'users',
            component: Users
        },{
            path: '/users/:id',
            name: 'usersDetail',
            component: DetailUser
        },{
            path: '/form',
            name: 'adduser',
            component: AddUser
        },{
            path: '/photos',
            name: 'photos',
            component: Photos
        }
      
    ]
});