import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should click on text', async () => {

    // Run this to see what askui annotates
    await aui.annotateInteractively();

    // Move the mouse to the middle of the screen
    await aui.moveMouse(500, 500).exec();

    // Search for the text 'Applications' and click on it
    await aui.click().text().withText('Applications').exec();

    // Navigate to Google Chrome in the menu
    await aui.click().text().withText('Internet').exec();
    await aui.click().text().withText('Google Chrome').exec();

    // Do not enter a password for a keyring but cancel
    try {
      await aui.expect().text().withText('Cancel').exists().exec();
      await aui.click().button().withText('Cancel').exec();
      await aui.click().button().withText('Cancel').exec();
    } catch (error: any) {
      // We do not have to do anything
      console.log('No keyring popup found!');
    }
    
    // Sometimes a 'Make Chrome your own' popup shows up
    try {
      await aui.expect().button().button().contains().text().withText('Get Started').exists();
      await aui.click().button().contains().text().withText('Get Started').exec();
      await aui.click().text().withText('Next').exec();
      await aui.click().text().withText('Next').exec();
      await aui.click().text().withText('thanks').exec();
    } catch(error) {
      // We do not have to do anything
      console.log('No Make Chrome your own popup found!');
    }

    // Click on text with regex 'Search*'
    await aui.click().text().withTextRegex('Search*').exec();
    
    // Make sure the focus is on the textfield
    await aui.mouseLeftClick().exec();

    // Type on the URL with the keyboard
    await aui.type('https://docs.askui.com').exec()

    // Press ENTER on the keyboard
    await aui.pressKey('enter').exec();

    // Reject popup if shown
    try {
      await aui.click().button().contains().text().withTextRegex('Alle*').exec();
    } catch (error: any) {
      // We do not have to do anything
      console.log('No popup button found!');
    }

    // Accept the cookies
    try {
      await aui.click().button().contains().text().withText('Allow all').exec();
    } catch (error: any) {
      // We do not have to do anything
      console.log('No cookies button found!');
    }

  });
});
