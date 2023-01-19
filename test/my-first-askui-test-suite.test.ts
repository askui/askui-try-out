import { aui } from './helper/jest.setup';

describe('jest with askui', () => {

  it('should let James say hello to the user', async () => {

    // Open the text editor Geany
    await aui.click().text().withText('Applications').exec();
    await aui.click().text().withText('Development').exec();
    await aui.click().text().withText('geany').exec();

    // Wait for the open (VNC is slow ;) )
    await aui.waitFor(2000).exec();

    // Increase the text size
    // await aui.pressTwoKeys('control', '+').exec();
    // await aui.pressTwoKeys('control', '+').exec();
    // await aui.pressTwoKeys('control', '+').exec();
    // await aui.pressTwoKeys('control', '+').exec();
    
    // Say hello by typing some text
    await aui.type('Hello, I am askui James!').exec();
    await aui.waitFor(2000).exec();
    await aui.pressKey('enter').exec();
    await aui.pressKey('enter').exec();

    // Explain interactive annotation
    await aui.type("what you see here with the red bounding boxes").exec();

    await aui.pressKey('enter').exec();
    await aui.type("is an interactive annotation.").exec();

    await aui.pressKey('enter').exec();
    await aui.pressKey('enter').exec();
    await aui.type("Every bounding box is an element I recognized on your screen.").exec();
    await aui.pressKey('enter').exec();
    await aui.type("I call it an annotation :-)").exec();

    await aui.pressKey('enter').exec();
    await aui.pressKey('enter').exec();
    await aui.type("You can hover over an annotation").exec();
    await aui.pressKey('enter').exec();
    await aui.type("to see what type of element I recognized.").exec();

    await aui.pressKey('enter').exec();
    await aui.pressKey('enter').exec();
    await aui.type("To stop the interactive annotation click left with your mouse").exec();
    await aui.pressKey('enter').exec();
    await aui.type("into the Simple Browser tab/window to gain focus.").exec();
    await aui.pressKey('enter').exec();
    await aui.type("Then press 'ESCAPE' on your keyboard.").exec();
    await aui.pressKey('enter').exec();

    // Run this to see what askui annotates
    await aui.annotateInteractively();

    await aui.pressKey('enter').exec();
    await aui.type("I can automate your whole operating system ").exec();
    await aui.waitFor(2000).exec();
    await aui.pressKey('enter').exec();
    await aui.type("by doing real key pressing and mouse moving.").exec();
    await aui.waitFor(2000).exec();
    await aui.pressKey('enter').exec();
    await aui.pressKey('enter').exec();
    await aui.type('In fact, I typed the text you see here.').exec();
    await aui.waitFor(2000).exec();
    await aui.pressKey('enter').exec();

    await aui.type('I can also move your mouse around and do mouse clicks.').exec();
    await aui.waitFor(2000).exec();
    await aui.pressKey('enter').exec();
    await aui.pressKey('enter').exec();
    await aui.type('Look!').exec();
    await aui.waitFor(2000).exec();

    // Move the mouse around
    await aui.moveMouse(500, 500).exec();
    await aui.waitFor(1000).exec();
    await aui.moveMouse(800, 800).exec();
    await aui.waitFor(1000).exec();
    await aui.moveMouse(800, 100).exec();
    await aui.waitFor(1000).exec();
    await aui.moveMouse(100, 150).exec();
    await aui.waitFor(1000).exec();

    await aui.pressKey('enter').exec();
    await aui.pressKey('enter').exec();
    await aui.type('And now I will close this window and show you my docs!').exec();
    await aui.waitFor(5000).exec();

    await aui.moveMouse(890, 40).exec();
    await aui.mouseLeftClick().exec();
    await aui.click().text().withTextRegex("Don't[\\s]{0,1}save").exec();

  });

  it('should do some stuff with askui', async () => {


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
