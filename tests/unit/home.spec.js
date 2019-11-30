import { mount ,  shallowMount ,createLocalVue } from "@vue/test-utils";
import Home from '@/views/+pages/Home'
import Vuex from 'vuex';


const localVue = createLocalVue();
localVue.use(Vuex);


describe('Home Page Component', () => {
    const wrapper = shallowMount(Home);
    test('should render content correctly', async () => {
        expect(wrapper.find('.home-page').isVisible()).toBe(true);
    });
});