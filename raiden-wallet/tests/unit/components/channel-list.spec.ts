import Mocked = jest.Mocked;

jest.mock('@/services/raiden-service');

import { addElemWithDataAppToBody } from '../utils/dialog';
import store from '@/store';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, Wrapper } from '@vue/test-utils';
import ChannelList from '@/components/ChannelList.vue';
import { TestData } from '../data/mock-data';
import VueRouter from 'vue-router';
import RaidenService, {
  ChannelCloseFailed,
  ChannelDepositFailed,
  ChannelSettleFailed
} from '@/services/raiden-service';
import Filters from '@/filters';
import flushPromises from 'flush-promises';
import { BigNumber } from 'ethers/utils';

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.filter('displayFormat', Filters.displayFormat);

describe('ChannelList.vue', function() {
  addElemWithDataAppToBody();

  let wrapper: Wrapper<ChannelList>;
  let raiden: Mocked<RaidenService>;
  let mockIdenticon: jest.Mock<any, any>;

  beforeEach(() => {
    raiden = new RaidenService(store) as Mocked<RaidenService>;
    raiden.getToken = jest.fn().mockResolvedValue(TestData.token);
    mockIdenticon = jest.fn().mockResolvedValue('');
    const $identicon = {
      getIdenticon: mockIdenticon
    };

    wrapper = mount(ChannelList, {
      propsData: {
        tokenAddress: '0xtoken',
        channels: TestData.mockChannelArray
      },
      mocks: {
        $raiden: raiden,
        $identicon: $identicon
      },
      stubs: {
        ConfirmationDialog: `
        <div>
            <button id="confirm" @click="$emit('confirm')"></button>
            <button id="cancel" @click="$emit('cancel')"></button>
        </div>`,
        DepositDialog: `
        <div>
            <button id="deposit-confirm" @click="$emit('confirm', '1.0')"></button>
            <button id="deposit-cancel" @click="$emit('cancel')"></button>
        </div>
        `
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display two channels entries', function() {
    const connections = wrapper.findAll('.channel');
    expect(connections.exists()).toBeTruthy();
    expect(connections.length).toBe(4);
  });

  it('should display a close and deposit action for an open channel', function() {
    expect(wrapper.find('#close-0').exists()).toBeTruthy();
    expect(wrapper.find('#deposit-0').exists()).toBeTruthy();
    expect(wrapper.find('#settle-0').exists()).toBeFalsy();
    expect(wrapper.find('#no-action-0').exists()).toBeFalsy();
  });

  it('should display an no action entry when the channel is not open or settleable', function() {
    expect(wrapper.find('#close-3').exists()).toBeFalsy();
    expect(wrapper.find('#deposit-3').exists()).toBeFalsy();
    expect(wrapper.find('#settle-3').exists()).toBeFalsy();
    expect(wrapper.find('#no-action-3').exists()).toBeTruthy();
  });

  it('should display only settle in a settleable channel', function() {
    expect(wrapper.find('#close-2').exists()).toBeFalsy();
    expect(wrapper.find('#deposit-2').exists()).toBeFalsy();
    expect(wrapper.find('#settle-2').exists()).toBeTruthy();
    expect(wrapper.find('#no-action-2').exists()).toBeFalsy();
  });

  describe('closing a channel', function() {
    it('should close the channel when confirmed', async function() {
      raiden.closeChannel = jest.fn().mockReturnValue(null);
      expect(wrapper.vm.$data.closeModalVisible).toBe(false);
      wrapper.find('#overflow-0').trigger('click');
      wrapper.find('#close-0').trigger('click');
      expect(wrapper.vm.$data.closeModalVisible).toBe(true);
      wrapper.find('#confirm').trigger('click');

      expect(wrapper.vm.$data.closeModalVisible).toBe(false);
      await flushPromises();
      expect(raiden.closeChannel).toHaveBeenCalledTimes(1);
      expect(raiden.closeChannel).toHaveBeenCalledWith(
        TestData.openChannel.token,
        TestData.openChannel.partner
      );
    });

    it('should show a success message on close success', async function() {
      raiden.closeChannel = jest.fn().mockReturnValue(null);
      wrapper.find('#overflow-0').trigger('click');
      wrapper.find('#close-0').trigger('click');
      wrapper.find('#confirm').trigger('click');
      await flushPromises();
      expect(wrapper.vm.$data.snackbar).toBe(true);
      expect(wrapper.vm.$data.message).toBe('Channel close successful');
    });

    it('should show an error message on close failure', async function() {
      raiden.closeChannel = jest
        .fn()
        .mockRejectedValue(new ChannelCloseFailed());
      wrapper.find('#overflow-0').trigger('click');
      wrapper.find('#close-0').trigger('click');
      wrapper.find('#confirm').trigger('click');
      await flushPromises();
      expect(wrapper.vm.$data.snackbar).toBe(true);
      expect(wrapper.vm.$data.message).toBe('Channel close failed');
    });

    it('should dismiss the dialog when cancel is pressed', function() {
      raiden.closeChannel = jest.fn().mockReturnValue(null);
      wrapper.find('#overflow-0').trigger('click');
      wrapper.find('#close-0').trigger('click');
      expect(wrapper.vm.$data.closeModalVisible).toBe(true);
      wrapper.find('#cancel').trigger('click');
      expect(wrapper.vm.$data.closeModalVisible).toBe(false);
      expect(raiden.closeChannel).toHaveBeenCalledTimes(0);
    });
  });

  describe('depositing in a channel', function() {
    it('should deposit to the channel when confirmed', async function() {
      raiden.deposit = jest.fn().mockReturnValue(null);
      const $data = wrapper.vm.$data;
      expect($data.depositModalVisible).toBe(false);
      wrapper.find('#overflow-0').trigger('click');
      wrapper.find('#deposit-0').trigger('click');
      expect($data.depositModalVisible).toBe(true);
      wrapper.find('#deposit-confirm').trigger('click');

      expect($data.depositModalVisible).toBe(false);
      expect($data.selectedChannel).toBeNull();

      await flushPromises();
      expect(raiden.deposit).toHaveBeenCalledTimes(1);
      expect(raiden.deposit).toHaveBeenCalledWith(
        TestData.openChannel.token,
        TestData.openChannel.partner,
        new BigNumber(10 ** 5)
      );
    });

    it('should show a success message on deposit success', async function() {
      raiden.deposit = jest.fn().mockReturnValue(null);
      wrapper.find('#overflow-0').trigger('click');
      wrapper.find('#deposit-0').trigger('click');
      wrapper.find('#deposit-confirm').trigger('click');
      await flushPromises();
      expect(wrapper.vm.$data.snackbar).toBe(true);
      expect(wrapper.vm.$data.message).toBe('Deposit was successful');
    });

    it('should show an error message on deposit failure', async function() {
      raiden.deposit = jest.fn().mockRejectedValue(new ChannelDepositFailed());
      wrapper.find('#overflow-0').trigger('click');
      wrapper.find('#deposit-0').trigger('click');
      wrapper.find('#deposit-confirm').trigger('click');
      await flushPromises();
      expect(wrapper.vm.$data.snackbar).toBe(true);
      expect(wrapper.vm.$data.message).toBe('Deposit failed');
    });

    it('should dismiss the dialog when cancel is pressed', function() {
      raiden.deposit = jest.fn().mockReturnValue(null);
      wrapper.find('#overflow-0').trigger('click');
      wrapper.find('#deposit-0').trigger('click');
      expect(wrapper.vm.$data.depositModalVisible).toBe(true);
      wrapper.find('#deposit-cancel').trigger('click');
      expect(wrapper.vm.$data.depositModalVisible).toBe(false);
      expect(raiden.deposit).toHaveBeenCalledTimes(0);
    });
  });

  describe('settling a channel', function() {
    it('should settle the channel when confirmed', async function() {
      raiden.settleChannel = jest.fn().mockReturnValue('thxhash');
      const $data = wrapper.vm.$data;
      expect($data.settleModalVisible).toBe(false);
      wrapper.find('#overflow-2').trigger('click');
      wrapper.find('#settle-2').trigger('click');
      expect($data.settleModalVisible).toBe(true);
      wrapper
        .findAll('#confirm')
        .at(1)
        .trigger('click');

      expect($data.settleModalVisible).toBe(false);
      expect($data.selectedChannel).toBeNull();

      await flushPromises();
      expect(raiden.settleChannel).toHaveBeenCalledTimes(1);
      expect(raiden.settleChannel).toHaveBeenCalledWith(
        TestData.settlableChannel.token,
        TestData.settlableChannel.partner
      );
    });

    it('should show a success message when settle succeeds', async function() {
      raiden.settleChannel = jest.fn().mockReturnValue('thxhash');
      wrapper.find('#overflow-2').trigger('click');
      wrapper.find('#settle-2').trigger('click');
      wrapper
        .findAll('#confirm')
        .at(1)
        .trigger('click');
      await flushPromises();
      expect(wrapper.vm.$data.snackbar).toBe(true);
      expect(wrapper.vm.$data.message).toBe('Channel settle was successful');
    });

    it('should show an error message on settle failure', async function() {
      raiden.settleChannel = jest
        .fn()
        .mockRejectedValue(new ChannelSettleFailed());
      wrapper.find('#overflow-2').trigger('click');
      wrapper.find('#settle-2').trigger('click');
      wrapper
        .findAll('#confirm')
        .at(1)
        .trigger('click');
      await flushPromises();
      expect(wrapper.vm.$data.snackbar).toBe(true);
      expect(wrapper.vm.$data.message).toBe('Channel settle failed');
    });

    it('should dismiss the dialog when cancel is pressed', function() {
      raiden.settleChannel = jest
        .fn()
        .mockRejectedValue(new ChannelSettleFailed());
      wrapper.find('#overflow-2').trigger('click');
      wrapper.find('#settle-2').trigger('click');
      expect(wrapper.vm.$data.settleModalVisible).toBe(true);
      wrapper
        .findAll('#cancel')
        .at(1)
        .trigger('click');
      expect(wrapper.vm.$data.settleModalVisible).toBe(false);
      expect(raiden.settleChannel).toHaveBeenCalledTimes(0);
    });
  });
});
