import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import ProductCard from '@/components/ProductCard'
import Vuex from 'vuex';
import BootstrapVue from "bootstrap-vue";


const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue)


describe('Product Card Component', () => {

    const wrapper = shallowMount(ProductCard, {
        localVue,
        propsData: {
            product : {
                'id': 1,
                'name': 'test product',
                'image': 'https://fr.vuejs.org/images/logo.png',
                'price': 100,
                'detail': 'lorem details'
    
            }
        }
      })

    expect(wrapper.props().product.id).toBe(1)

    test('should render content correctly', async () => {
        expect(wrapper.find('.product-card').isVisible()).toBe(true);
    });
});