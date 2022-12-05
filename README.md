# askui-try-out
Hello and welcome to our demo of askui on Gitpod. We will do the following things here:

1. Explain the moving parts in this workspace
2. Let the first askui automation run
3. Show you where to go from there

## Open in Gitpod

<a href="https://gitpod.io/#https://github.com/JohannesDienst-askui/askui-try-out" target="_blank">
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
