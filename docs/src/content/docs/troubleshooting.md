---
title: "Troubleshooting"
description: Troubleshooting NodeKit installation
next:
  label: "NodeKit Reference"
  link: /reference/nodekit
---

This page contains troubleshooting tips for common issues that you might run into. For additional support, please visit our [Discord channel](https://discord.com/channels/491256308461207573/807825288666939482).

## Bootstrapping the Algorand node

:::note
This section outlines **common errors encountered** during the "bootstrap" node installation process.

**If you are looking for the instructions instead, they are located [here](/guides/20-bootstrap).**
:::


### Fast catchup is taking too long to complete

If the fast catchup process is taking too long to complete, check the following:

#### Status is in FAST-CATCHUP

The colored status at the top of Nodekit should be in a yellow `FAST-CATCHUP` state:

![](/assets/nodekit-state-fast-catchup.png)

After fast-catchup completes successfully, it is normal for a node to be in a `SYNCING` state for a few minutes:

![](/assets/nodekit-state-syncing.png)

During this the `Latest Round` number should be increasing rapidly.

If there is no progress for a while, or the Latest Round value is smaller than `46000000` (46 million) then you should start fast-catchup again:

#### Fast Catchup was interrupted or did not complete

To start the fast catchup process again, exit the Nodekit user interface by pressing `Q` and enter the following command:

```bash
./nodekit catchup
```

You can enter nodekit again by running:

```bash
./nodekit
```

When the syncing process completes, the status will display `RUNNING`:

![](/assets/nodekit-state-running.png)

### Your hardware meets the minimum specs

TODO SSD

### Your network connection meets the minimum specs

TODO

## Generating participation keys

:::note
This section outlines **common errors encountered** during the participation key generation step on Nodekit.

**If you are looking for the instructions instead, they are located [here](/guides/30-generate-participation-keys).**
:::

### Failed to get participation keys

Occasionally, Nodekit may fall out of sync with the Algorand node while waiting for the participation keys to be generated. In this case this error message will be shown:

You can:

- wait for the participation keys to appear in the Accounts list
- try to generate a participation key again
  - If the key generation process is still running on the node, you will see a ["Participation key generation already in progress"](#participation-key-generation-already-in-progress) error

![](/assets/nodekit-error-keygen-failed.png)

### Participation key generation already in progress

This error means that there is a participation key already being generated on the Algorand node.

You can wait a few minutes, and the key will automatically appear in the Accounts list when it is ready.

![](/assets/nodekit-error-keygen-already.png)
