# askui-try-out
Gitpod ready repository to try out askui

<a href="https://gitpod.io/#https://github.com/JohannesDienst-askui/askui-try-out">
  <img
    src="https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod"
    alt="Contribute with Gitpod"
  />
</a>

## Known Issues with Gitpod

### After Automation Execution you get a Jest Warning
Sometimes you get the following error message after running the automation

> Jest did not exit one second after the test run has completed. 

> This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.

This is because of the cloud development environment you are in. Focus the terminal and terminate the running process by pressing `CTRL+c`.


### The UiController does not start
Restart the Gitpod-Workspace.
