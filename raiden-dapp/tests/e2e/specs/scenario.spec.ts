import {
  closeChannel,
  depositTokensToOpenedChannel,
  mintAndDepositUtilityTokenFromSelectHubScreen,
  mintConnectedTokenFromSelectHubScreen,
  openChannel,
  transferETHToRaidenAccount,
  withdrawTokens,
  withdrawTokensBackToMainAccount,
  withdrawUDCTokens,
} from '../utils/blockchain-interaction';
import {
  navigateBackToAccountMenu,
  navigateBackToTransferScreenFromOverlay,
  navigateToAccountMenu,
  navigateToBackupState,
  navigateToChannelsList,
  navigateToConnectNewTokenFromTokenOverlay,
  navigateToDisclaimer,
  navigateToDownloadLogs,
  navigateToNotificationPanel,
  navigateToRaidenAccount,
  navigateToSelectHub,
  navigateToTokenDepositFromTransferScreen,
  navigateToTokenSelect,
  navigateToUDC,
  navigateToWithdrawal,
  reloadWholeApplication,
} from '../utils/navigation';
import {
  acceptDisclaimer,
  closeNotificationPanel,
  connectToDApp,
  deleteTopNotification,
  downloadState,
  enterAndSelectHub,
  enterChannelDepositAmount,
  enterDepositTokenAmountForOpenedChannel,
  enterETHAmountToTransferFromRaidenAccount,
  enterTokenWithdrawalAmoutFromChannelsList,
  enterTransferAddress,
  enterTransferAmount,
  enterUDCWithdrawalAmount,
  makeDirectTransfer,
  makeMediatedTransfer,
} from '../utils/user-interaction';

describe('dApp e2e tests', () => {
  const uiTimeout = 3000;
  const partnerAddress = '0xCBC49ec22c93DB69c78348C90cd03A323267db86';
  const thirdAddres = '0x517aAD51D0e9BbeF3c64803F86b3B9136641D9ec';

  it('should run all dApp e2e scenarios', () => {
    cy.viewport('macbook-13');
    navigateToDisclaimer();
    acceptDisclaimer();
    connectToDApp();
    navigateToSelectHub();
    mintAndDepositUtilityTokenFromSelectHubScreen();
    mintConnectedTokenFromSelectHubScreen();
    enterAndSelectHub(uiTimeout, partnerAddress);
    enterChannelDepositAmount();
    openChannel();
    navigateToNotificationPanel();
    deleteTopNotification(); // This must be the sticky backup notification.
    closeNotificationPanel();
    enterTransferAddress(uiTimeout, partnerAddress);
    enterTransferAmount();
    makeDirectTransfer(uiTimeout);
    enterTransferAddress(uiTimeout, thirdAddres);
    enterTransferAmount();
    makeMediatedTransfer(uiTimeout);
    navigateToAccountMenu();
    navigateToBackupState();
    downloadState(uiTimeout);
    navigateToTokenSelect();
    navigateToConnectNewTokenFromTokenOverlay();
    navigateBackToTransferScreenFromOverlay();
    navigateToTokenDepositFromTransferScreen();
    enterDepositTokenAmountForOpenedChannel(uiTimeout);
    depositTokensToOpenedChannel();
    navigateToChannelsList();
    enterTokenWithdrawalAmoutFromChannelsList(uiTimeout);
    withdrawTokens();
    closeChannel();
    navigateToAccountMenu();
    navigateToRaidenAccount();
    enterETHAmountToTransferFromRaidenAccount(uiTimeout);
    transferETHToRaidenAccount();
    navigateBackToAccountMenu();
    navigateToWithdrawal();
    withdrawTokensBackToMainAccount();
    navigateBackToAccountMenu();
    navigateToUDC();
    enterUDCWithdrawalAmount(uiTimeout);
    withdrawUDCTokens();
    reloadWholeApplication();
    navigateToAccountMenu();
    navigateToDownloadLogs();
  });
});
