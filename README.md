# askui-try-out
Hello and welcome to our demo of askui on Gitpod. We will do the following things here:

1. Explain the moving parts in this workspace
2. Open the GUI of the workspace
3. Observe first askui automation run
4. Show you where to go from there

## Moving Parts of This Workspace

We will tidy up your workspace now as the Visual Studio Code Editor in your browser is cluttered:

* Hide Sidebar: press `CTRL + b` (`COMMAND + b` on macOS)
* Remove _Get Started_ tab: Left click on the _x_ beneath the tab

Your browser window should look like this afterward:

![VSCode setup in Gitpod after hiding sidebar and closing tab _Get Started_](img/gitpod_initial_setup.png)

## Open the GUI of the workspace

On startup of this workspace, askui gets installed in the background and the first automation already started!

Click on the tab _Simple Browser_ to see this workspace's GUI (Linux Desktop). What you are seeing is like a real GUI from a physical device, but in the cloud. If you see red boxes like the one in the next picture around elements, it means the automation is ready to run:

![Red Box around the mouse on the desktop](img/red_boxes.png)

You can also resize the tab to be bigger.

## Observe First askui Automation Run

Click on the workspace to get the focus. Then press `ESC` on your keyboard and how askui moves the mouse, open Google Chrome and navigating to a webpage by typing in the URL and pressing `ENTER` on you keyboard.

> askui automates your Operating System as a real human would! With real mouse-movement, keystrokes and visual selection of elements.

If you want to know how the code looks to achieve this, click on the tab _my-first-askui-test-suite.test.ts_ to see the code with comments for each command.

## Where To Go Now
You have now seen what simple automation in a remote cloud environment can do.

Head over to our [User Portal](http://app.v2.askui.com/) to register (and later use) askui for free on your local machine.

For local installation follow the _Onboarding Guide_ there or head over to [our docs Getting Started](https://docs.askui.com/docs/general/Getting%20Started/getting-started).

If you need more inspiration we have the following resources for you:

* [Tutorials](https://docs.askui.com/docs/general/Tutorials/google-cat-search)
* [Flutter Example Repository](https://github.com/askui/flutter-example-automation)
* [Example Automations on Github](https://github.com/askui/askui-examples)

And our [Discord-Community](https://discord.gg/KFYJ5xuyBA) to answer any questions.

## Open in Gitpod

<a href="https://gitpod.io/#https://github.com/JohannesDienst-askui/askui-try-out" target="_blank" >
  <img
    src="https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod"
    alt="Contribute with Gitpod"
  />
</a>

## Known Issues with Gitpod

### After Automation Execution you get a Jest Warning
Sometimes you get the following error message after running the automation:

> Jest did not exit one second after the test run has completed. 

> This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.

This is because of the cloud development environment you are in. Focus the terminal and terminate the running process by pressing `CTRL+c`.

### The UiController does not start
Restart the Gitpod-Workspace.
